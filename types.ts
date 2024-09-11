import { Doelgroep } from "./types/Doelgroep";
import { Woningtype } from "./types/Woningtype";

export interface SimplifiedWoonnetUnitData {
    municipality: string,
    totalRent: number,
    modelCategorie: 'inschrijfduur' | 'random' | string,
    url: string,
    publicationDate: Date
}

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
    dwellingType: Woningtype,
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
            code: 'inschrijfduur' | 'random' | 'woningruil' | 'maatwerk' | 'woningwagen' | string,
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
    doelgroepen: Doelgroep[],
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
    isInGepubliceerdeVerzameladvertentie: boolean,
    url: WoonnetUrl
}

export interface RawResponse {
    sAngularServiceData: string,
    result: Array<WoonnetUnitData>
}

export type WoonnetUrl = {
    rootUrl: string,
    extendedUrl: string
}