export interface SimplifiedWoonnetUnitData {
    municipality: string,
    totalRent: number,
    modelCategorie: 'inschrijfduur' | 'random' | string,
    url: string,
    publicationDate: Date,
}

// {
//     "uitlegAanbiedprocesVideoTonen": true,
//     "infoveldKort": "",
//     "huurtoeslagVoorwaarde": {
//         "icon": "",
//         "id": null,
//         "localizedIconText": null
//     },
//     "huurtoeslagMogelijk": null,
//     "specifiekeVoorzieningen": [
//         {
//             "id": "45"
//         }
//     ],
//     "toegankelijkheid": [],
//     "inschrijvingVereistVoorReageren": true,
//     "postalcode": "2531 SW",
//     "street": "Willem Dreespark",
//     "houseNumber": "291",
//     "houseNumberAddition": "",
//     "regio": {
//         "name": null,
//         "id": null
//     },
//     "municipality": {
//         "name": "Den Haag",
//         "id": "1"
//     },
//     "city": {
//         "name": "Den Haag",
//         "id": "1"
//     },
//     "quarter": {
//         "name": "Moerwijk",
//         "id": "36"
//     },
//     "neighborhood": {
//         "name": "",
//         "id": null
//     },
//     "dwellingType": {
//         "categorie": "woning",
//         "huurprijsDuurActief": false,
//         "id": "1",
//         "localizedName": "Flat met lift"
//     },
//     "availableFrom": "",
//     "netRent": 626.69,
//     "totalRent": 831.6,
//     "flexibelHurenActief": false,
//     "sellingPrice": 0,
//     "sleepingRoom": {
//         "amountOfRooms": "2",
//         "id": "2"
//     },
//     "energyLabel": {
//         "icon": "icon_label_d",
//         "id": "4"
//     },
//     "floor": {
//         "id": "14",
//         "localizedName": "14e etage"
//     },
//     "balcony": true,
//     "balconySite": {
//         "localizedName": null
//     },
//     "constructionYear": 1969,
//     "model": {
//         "modelCategorie": {
//             "icon": "br_aanbodcooptatie",
//             "code": "inschrijfduur",
//             "toonOpWebsite": true,
//             "id": "1"
//         },
//         "isHospiteren": false,
//         "advertentieSluitenNaEersteReactie": false,
//         "einddatumTonen": true,
//         "aantalReactiesTonen": 1
//     },
//     "rentBuy": "Huur",
//     "publicationDate": "2024-02-14 20:00:00",
//     "closingDate": "2024-02-16 20:00:00",
//     "latitude": "52.0564",
//     "longitude": "4.30796",
//     "floorplans": [
//         {
//             "label": "",
//             "uri": "/portal/uploads/dwelling/floorplans/239734-65b7b521a74af.pdf"
//         },
//         {
//             "label": "",
//             "uri": "/portal/uploads/dwelling/floorplans/239734-65b7b521a98e2.pdf"
//         }
//     ],
//     "pictures": [
//         {
//             "label": "",
//             "uri": "/portal/uploads/dwelling/pictures/239734-65b7b30f74008.jpg",
//             "type": "jpg"
//         },
//         {
//             "label": "",
//             "uri": "/portal/uploads/dwelling/pictures/239734-65b7b5217f714.jpg",
//             "type": "jpg"
//         },
//         {
//             "label": "",
//             "uri": "/portal/uploads/dwelling/pictures/239734-65b7b52192577.jpg",
//             "type": "jpg"
//         }
//     ],
//     "reactieUrl": "",
//     "newlyBuild": false,
//     "areaDwelling": 70,
//     "actionLabel": {
//         "localizedLabel": null
//     },
//     "actionLabelFrom": "0000-00-00 00:00:00",
//     "actionLabelUntil": "0000-00-00 00:00:00",
//     "actionLabelIfActive": false,
//     "relatieHuurInkomenData": null,
//     "relatieHuurInkomenGroepen": null,
//     "doelgroepen": [
//         {
//             "icon": "br_doelgroep_regulier",
//             "code": "regulier",
//             "id": "1"
//         }
//     ],
//     "koopvoorwaarden": {
//         "localizedNaam": null
//     },
//     "isExtraAanbod": false,
//     "isWoningruil": false,
//     "vatInclusive": true,
//     "woningsoort": {
//         "id": null,
//         "localizedNaam": null
//     },
//     "aantalMedebewoners": 0,
//     "isExternModelType": false,
//     "isZelfstandig": false,
//     "urlKey": "239734-willemdreespark-291-denhaag",
//     "availableFromDate": "2024-02-21",
//     "verzameladvertentieID": 0,
//     "huurprijsBuitenKortingsgrens": true,
//     "land": {
//         "id": "524"
//     },
//     "uitlegTekstAanbiedproces": "",
//     "id": "239734",
//     "isGepubliceerd": true,
//     "isInGepubliceerdeVerzameladvertentie": false
// }

export interface WoonnetUnitData {
    uitlegAanbiedprocesVideoTonen: boolean,
    infoveldKort: string,
    huurtoeslagVoorwaarde: {
        icon: string,
        id: unknown | null,
        localizedIconText: string | null
    },
    huurtoeslagMogelijk: boolean | null,
    specifiekeVoorzieningen: Array<{
        id: string
    }>,
    toegankelijkheid: Array<unknown>,
    inschrijvingVereistVoorReageren: boolean,
    postalcode: string,
    street: string,
    houseNumber: string,
    houseNumberAddition: string,
    regio: {
        name: string | null,
        id: number | null
    },
    municipality: {
        name: string,
        id: string
    },
    city: {
        name: string,
        id: string
    },
    quarter: {
        name: string,
        id: string
    },
    neighborhood: {
        name: string,
        id: string | null
    },
    dwellingType: {
        categorie: string,
        huurprijsDuurActief: boolean,
        id: string,
        localizedName: string
    },
    availableFrom: string,
    netRent: number,
    totalRent: number,
    flexibelHurenActief: boolean,
    sellingPrice: number,
    sleepingRoom: {
        amountOfRooms: string,
        id: string
    },
    energyLabel: {
        icon: string,
        id: string
    },
    floor: {
        id: string,
        localizedName: string
    },
    balcony: boolean,
    balconySite: {
        localizedName: string | null
    },
    constructionYear: number,
    model: {
        modelCategorie: {
            icon: string,
            code: 'inschrijfduur' | 'random' | 'woningruil' | string,
            toonOpWebsite: boolean,
            id: string
        },
        isHospiteren: boolean,
        advertentieSluitenNaEersteReactie: boolean,
        einddatumTonen: boolean,
        aantalReactiesTonen: number
    },
    rentBuy: string,
    publicationDate: string,
    closingDate: string,
    latitude: string,
    longitude: string,
    floorplans: Array<{
        label: string,
        uri: string
    }>,
    pictures: Array<{
        label: string,
        uri: string,
        type: string
    }>,
    reactieUrl: string,
    newlyBuild: boolean,
    areaDwelling: number,
    actionLabel: {
        localizedLabel: string | null
    },
    actionLabelFrom: string,
    actionLabelUntil: string,
    actionLabelIfActive: boolean,
    relatieHuurInkomenData: unknown | null,
    relatieHuurInkomenGroepen: unknown | null,
    doelgroepen: Array<{
        icon: string,
        code: string,
        id: string
    }>,
    koopvoorwaarden: {
        localizedNaam: string | null
    },
    isExtraAanbod: boolean,
    isWoningruil: boolean,
    vatInclusive: boolean,
    woningsoort: {
        id: string | null,
        localizedNaam: string | null
    },
    aantalMedebewoners: number,
    isExternModelType: boolean,
    isZelfstandig: boolean,
    urlKey: string,
    availableFromDate: string,
    verzameladvertentieID: number,
    huurprijsBuitenKortingsgrens: boolean,
    land: {
        id: string
    },
    uitlegTekstAanbiedproces: string,
    id: string,
    isGepubliceerd: boolean,
    isInGepubliceerdeVerzameladvertentie: boolean
}

export interface RawResponse {
    sAngularServiceData: string,
    result: Array<WoonnetUnitData>
}