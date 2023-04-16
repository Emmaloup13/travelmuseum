<template>
    <div id="musees">
        <h4>Les musées de {{ region }}</h4>
        <table class="table table-hover">
            <thead>
                <tr class="table-info">
                    <th scope="col">Nom du musée</th>
                    <th scope="col">Ville</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-warning" v-for="musee in liste_musees" :key="musee.id">
                    <td><a :id="musee.id" class="lien" :href="pageMusee" @click="getId">{{ musee.nom }}</a></td>
                    <td>{{ musee.ville }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import getData from '@/functions/getMuseumData.js';
import { store } from '../../functions/store';

export default {
    name: "MyMusees",
    props: ["region"],
    data() {
        return {
            data: {},
            store,
            liste_musees: [],
            current_museum_id: ""
        }
    },
    mounted() {
        this.data = getData.findMuseumsByRegion(this.region);
        this.data.forEach(musee => {
            if (musee.autnom == null && musee.nomoff != null) {
                this.liste_musees.push({ nom: musee.nomoff.replace(musee.nomoff[0], musee.nomoff[0].toUpperCase()), ville: musee.ville_m, id: musee.ref })
            }
            else {
                this.liste_musees.push({ nom: musee.autnom, ville: musee.ville_m, id: musee.ref })
            }
        })
    },
    computed: {
        pageMusee() {
            return "/musees/" + this.region + "/" + this.current_museum_id;
        }
    },
    methods: {
        getId(e) {
            this.current_museum_id = e.target.id;
        }
    }
}

</script>


<style>
#lien,
.lien {
    text-decoration: none;
}

h4 {
    text-align: center;
}
</style>