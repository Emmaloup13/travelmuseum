<template>
    <div id="home">
        <p v-if="click">Vous avez cliqué sur {{ regionName }} !</p>
    </div>
</template>

<script>

import getData from '@/functions/getMuseumData.js';
import { store } from '../../functions/store';

export default {
    name: "MyHome",
    data() {
        return {
            data: {},
            store,
        }
    },
    mounted() {
        this.data = getData.findAll();
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
        }
    },
    methods: {

    }
}

</script>


<style></style>