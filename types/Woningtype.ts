export interface Woningtype {
    categorie: string,
    huurprijsDuurActief: boolean,
    id: string,
    localizedName: string
}

export const FlatMetLift: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "1",
    localizedName: "Flat met lift"
}

export const Eengezinswoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "2",
    localizedName: "Eengezinswoning"
}

export const FlatZonderLift: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "3",
    localizedName: "Flat zonder lift"
}

export const Benedenwoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "4",
    localizedName: "Benedenwoning"
}

export const Bovenwoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "5",
    localizedName: "Bovenwoning"
}

export const Maisonnette: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "6",
    localizedName: "Maisonnette"
}

export const Portiekwoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "10",
    localizedName: "Portiekwoning"
}

// Er is misschien een 22-jaar max leeftijd voor deze woning
export const HATWoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "11",
    localizedName: "HAT-woning"
}

export const Seniorenwoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "17",
    localizedName: "Seniorenwoning"
}

export const Hofjeswoning: Woningtype = {
    categorie: "woning",
    huurprijsDuurActief: false,
    id: "20",
    localizedName: "Hofjeswoning"
}