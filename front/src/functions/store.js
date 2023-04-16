import { reactive } from 'vue'

export const store = reactive({
    region_name: "",
    liste_pro: {
        "Grand Est": "du",
        "Nouvelle-Aquitaine": "de",
        "Auvergne-Rhône-Alpes": "d'",
        "Bourgogne-Franche-Comté": "de",
        "Bretagne": "de",
        "Centre-Val de Loire": "du",
        "Île-de-France": "d'",
        "Occitanie": "d'",
        "Hauts-de-France": "des",
        "Normandie": "de",
        "Pays-de-la-Loire": "du",
        "Provence-Alpes-Côte d'Azur": "de",
        "Guadeloupe": "de",
        "Corse": "de"
    }
})
