import { differenceInMinutes } from "./util";
import { HATWoning } from "./types/Woningtype";
import { SeniorenDoelgroep } from "./types/Doelgroep";
import { RawResponse, SimplifiedWoonnetUnitData, WoonnetUnitData, WoonnetUrl } from "./types/web";
import { config } from "dotenv";
config();

const webhookUrl = process.env.DISCORD_WEBHOOK_URL as string;

const woonnetUrls: WoonnetUrl[] = [
    {
        rootUrl: `https://www.woonnet-haaglanden.nl`, // THE HAGUE
        extendedUrl: 'https://www.woonnet-haaglanden.nl/aanbod/nu-te-huur/te-huur/details'
    },
    {
        rootUrl: `https://www.hureninhollandrijnland.nl`, // RIJNLAND
        extendedUrl: 'https://www.hureninhollandrijnland.nl/aanbod/nu-te-huur/huurwoningen/details'
    },
    // {
    //     rootUrl: `https://www.woninghuren.nl`, // ENSCHEDE
    //     extendedUrl: 'https://www.woninghuren.nl/aanbod/te-huur/details'
    // },
    // {
    //     rootUrl: `https://www.thuisindeachterhoek.nl`, // ACHTERHOEK
    //     extendedUrl: 'https://www.thuisindeachterhoek.nl/aanbod/te-huur/details/'
    // },
]

const ignoreOlderThanMinutes = 9;

async function getData() {
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

async function sendDiscordMessage(unitData: SimplifiedWoonnetUnitData, note: string): Promise<void> {
    const message = {
        embeds: [{
            title: "New (non-inschrijfduur) Social Housing Unit Available!",
            color: 5814783,
            fields: [
                {
                    name: "Total Rent",
                    value: `€ ${unitData.totalRent}`,
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
                },
                {
                    name: "Note",
                    value: note,
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

        if (differenceInMinutes(simplifiedData.publicationDate, new Date()) > ignoreOlderThanMinutes) continue;

        if (simplifiedData.totalRent > 879.66 || simplifiedData.totalRent < 150) return;

        const code = unitData.model.modelCategorie.code;
        const undesiredCodes = ['inschrijfduur', 'woningruil', 'woningwagen', 'maatwerk'];
        if (undesiredCodes.includes(code)) return;

        if (unitData.dwellingType.id === HATWoning.id) {
            return await sendDiscordMessage(simplifiedData, 'HAT-woning dus misschien max 22 jaar');
        }

        let note = '-';
        if (unitData.doelgroepen.length === 1) {
            if (unitData.doelgroepen[0].id === SeniorenDoelgroep.id) {
                return;
            }
        } else if (unitData.doelgroepen.length > 1) {
            note = `meerdere doelgroepen: ${unitData.doelgroepen.map(d => d.code).join(', ')}`;
        }

        return await sendDiscordMessage(simplifiedData, note);
    }
}

main();