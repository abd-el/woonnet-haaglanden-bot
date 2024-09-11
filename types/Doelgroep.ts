export interface Doelgroep {
    icon: string,
    code: string,
    id: string
}

export const ReguliereDoelgroep: Doelgroep = {
    code: "regulier",
    icon: "br_doelgroep_regulier",
    id: "1"
}

export const SeniorenDoelgroep: Doelgroep = {
    code: "55_plus",
    icon: "icon_doelgroep_senioren",
    id: "4"
}