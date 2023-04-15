import data from "../data/musees.json";

let getData = {
    findAll() {
        let regions = [];
        data.forEach(museum => {
            if (!regions.includes(museum.region)) {
                regions.push(museum.region);
            }
        });
        console.log(regions);
    }
}

export default getData;