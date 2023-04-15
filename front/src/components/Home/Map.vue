<template>
    <div id="map">
    </div>
</template>

<script>
import L from 'leaflet';
import regions from '../../data/regions.json';
import { store } from '../../functions/store';


let geojson;

export default {
    name: "MyMap",
    data() {
        return {
            store
        }
    },
    mounted() {
        let map = L.map("map").setView([46.787446982348385, 2.4100420621892833], 5);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        geojson = L.geoJSON(regions, { style: this.styleRegions, onEachFeature: this.onEachFeature }).addTo(map);

    },
    methods: {
        styleRegions() {
            return {
                fillColor: "#ff0000",
                weight: 1.5,
                opacity: 0.8,
                color: 'white',
                dashArray: '1',
                fillOpacity: 0.4
            }
        },
        highlightFeature(e) {
            let layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });

            layer.bringToFront();
        },
        resetHighlight(e) {
            geojson.resetStyle(e.target);
        },
        onEachFeature(feature, layer) {
            layer.addEventListener("mouseover", this.highlightFeature);
            layer.addEventListener("mouseout", this.resetHighlight);
            layer.addEventListener("click", () => {
                // window.location.href = "/Coucou";
                this.store.region_name = feature.properties.nom;
            });
        }
    }
}

</script>


<style>
#map {
    height: 80vh;
    width: 90vw;
    display: inline-block;
    border: solid black;
}
</style>