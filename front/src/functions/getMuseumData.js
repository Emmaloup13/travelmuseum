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
            if (museum.region == region) {
                museums.push(museum);
            }
        });
        return museums;
    },
    findMuseumById(id) {
        let right_museum;
        data.forEach(museum => {
            if (museum.ref == id) {
                right_museum = museum;
            }
        })
        return right_museum;
    }
}

export default getData;