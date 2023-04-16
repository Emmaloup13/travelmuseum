<template>
    <div id="home">
        <a id="lien" v-if="click" :href="pageRegion">Voir les musées {{ determinant }} {{ regionName }} !</a>
    </div>
</template>

<script>
import getData from '@/functions/getMuseumData';
import { store } from '../../functions/store';

export default {
    name: "MyHome",
    data() {
        return {
            store,
        }
    },
    computed: {
        regionName() {
            return JSON.parse(JSON.stringify(this.store.region_name));
        },
        click() {
            if (this.regionName != "") {
                return true;
            }
            else {
                return false;
            }
        },
        pageRegion() {
            getData.findRegions()
            return "/musees/" + this.regionName;
        },
        determinant() {
            return JSON.parse(JSON.stringify(this.store.liste_pro[this.regionName]));
        }
    },
    methods: {

    }
}

</script>


<style>
#lien {
    text-decoration: none;
}
</style>