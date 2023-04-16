import data from "../data/musees.json";

let getData = {
    findRegions() {
        let regions = [];
        data.forEach(museum => {
            if (!regions.includes(museum.region)) {
                regions.push(museum.region);
            }
        });
        return regions;
    },
    findMuseumsByRegion(region) {
        let museums = [];
        data.forEach(museum => {
            if (museum.region == region && (museum.nomoff != null || museum.autnom != null)) {
                museums.push(museum);
            }
        });
        return museums;
    },
    findMuseumById(id) {
        let right_museum;
        let nom;
        data.forEach(museum => {
            if (museum.ref == id) {
                right_museum = museum;
            }
        })
        if (right_museum.autnom != null) {
            nom = right_museum.autnom
        }
        else {
            nom = right_museum.nomoff.replace(right_museum.nomoff[0], right_museum.nomoff[0].toUpperCase())
        }
        right_museum = {
            nom: nom, adresse: right_museum.adrl1_m, ville: right_museum.ville_m, cp: right_museum.cp_m, histoire: right_museum.hist, interet: right_museum.interet,
            maj: new Date(right_museum.dmaj).toLocaleDateString(), artistes: right_museum.artiste, dep: right_museum.dept, tel: right_museum.tel_m, url: "https://" + right_museum.url_m, domaines: right_museum.dompal,
            url_retour: "/musees/" + right_museum.region
        }
        return right_museum;
    }
}

export default getData;