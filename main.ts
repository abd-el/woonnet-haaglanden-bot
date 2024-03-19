import {RawResponse, SimplifiedWoonnetUnitData, WoonnetUnitData, WoonnetUrl} from "./types";
import {differenceInMinutes} from "./util";

const webhookUrl = 'https://discord.com/api/webhooks/1208085535038513192/Rsl___7aMerTCXptmGCScM6YMSZGWjLEBrFMXBkObNgkWEDYmZQ3W_Jv3xZdUaCvh_rd';

const woonnetUrls: WoonnetUrl[] = [
    {
        rootUrl: `https://www.woonnet-haaglanden.nl`, // THE HAGUE
        extendedUrl: 'https://www.woonnet-haaglanden.nl/aanbod/nu-te-huur/te-huur/details'
    },
    {
        rootUrl: `https://www.woninghuren.nl`, // ENSCHEDE
        extendedUrl: 'https://www.woninghuren.nl/aanbod/te-huur/details'
    },
    {
        rootUrl: `https://www.thuisindeachterhoek.nl`, // ACHTERHOEK
        extendedUrl: 'https://www.thuisindeachterhoek.nl/aanbod/te-huur/details/'
    }
]

async function getData(){
    const collectedData: WoonnetUnitData[] = [];

    for (const url of woonnetUrls) {
        const response = await fetch(`${url.rootUrl}/portal/object/frontend/getallobjects/format/json`);
        const raw: RawResponse = await response.json();
        const data = raw.result;

        for (const unitData of data) {
            unitData.url = url;
            collectedData.push(unitData);
        }
    }

    return collectedData;
}

async function sendDiscordMessage(unitData: SimplifiedWoonnetUnitData){
    const message = {
        embeds: [{
            title: "New (non-inschrijfduur) Social Housing Unit Available!",
            color: 5814783,
            fields: [
                {
                    name: "Total Rent",
                    value: `€${unitData.totalRent}`,
                    inline: false
                },
                {
                    name: "Municipality",
                    value: unitData.municipality,
                    inline: false
                },
                {
                    name: "Model Category",
                    value: unitData.modelCategorie,
                    inline: false
                },
                {
                    name: "Publication Date",
                    value: unitData.publicationDate,
                    inline: false
                },
                {
                    name: "Details",
                    value: `${unitData.url}`,
                    inline: false
                }
            ],
            timestamp: new Date().toISOString()
        }]
    };

    await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
    })

}
async function main(): Promise<void> {
    const data = await getData();

    for (const unitData of data) {
        const simplifiedData: SimplifiedWoonnetUnitData = {
            totalRent: unitData.totalRent,
            municipality: unitData.municipality.name,
            modelCategorie: unitData.model.modelCategorie.code,
            url: `${unitData.url.extendedUrl}/${unitData.urlKey}`,
            publicationDate: new Date(`${unitData.publicationDate}+01:00`),
        };

        if (differenceInMinutes(simplifiedData.publicationDate, new Date()) > 10) {
            continue;
        }

        const code = unitData.model.modelCategorie.code;

        if (code !== 'inschrijfduur' && code !== 'woningruil') {
            await sendDiscordMessage(simplifiedData);
        }
    }
}

main();