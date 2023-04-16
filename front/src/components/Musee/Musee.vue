<template>
    <div id="fiche_musee">
        {{ musee.nomoff }}
    </div>
</template>

<script>

import getData from '@/functions/getMuseumData.js';

export default {
    name: "MyMusee",
    props: ["region", "id"],
    data() {
        return {
            musee: {}
        }
    },
    mounted() {
        this.musee = getData.findMuseumById(this.id);

    }
}

</script>


<style>
#lien {
    text-decoration: none;
}

h4 {
    text-align: center;
}
</style>