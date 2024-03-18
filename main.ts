import {RawResponse, SimplifiedWoonnetUnitData, WoonnetUnitData} from "./types";
import {differenceInMinutes} from "./util";

const webhookUrl = 'https://discord.com/api/webhooks/1208085535038513192/Rsl___7aMerTCXptmGCScM6YMSZGWjLEBrFMXBkObNgkWEDYmZQ3W_Jv3xZdUaCvh_rd';

const rootUrls = [
    `https://www.woonnet-haaglanden.nl`, // THE HAGUE
    `https://www.woninghuren.nl` // ENSCHEDE
]

async function getData(){
    const collectedData: WoonnetUnitData[] = [];

    for (const rootUrl of rootUrls) {
        const response = await fetch(`${rootUrl}/portal/object/frontend/getallobjects/format/json`);
        const raw: RawResponse = await response.json();
        const data = raw.result;

        for (const unitData of data) {
            unitData.rootUrl = rootUrl;
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
            url: `${unitData.rootUrl}/aanbod/nu-te-huur/te-huur/details/${unitData.urlKey}`,
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