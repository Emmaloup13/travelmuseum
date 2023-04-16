<template>
    <div id="fiche_musee">
        <div class="card  mb-3">
            <h3 class="card-header">{{ musee.nom }}</h3>
            <div class="card-body">
                <h5 class="card-title">{{ musee.adresse }}, {{ musee.cp }} {{ musee.ville }}</h5>
                <h6 class="card-subtitle text-muted">{{ musee.tel }}</h6>
            </div>
            <div class="card-body" id="domaines" v-if="musee.domaines != null">
                <h5 class="card-title">Domaines</h5>
                <span class="badge rounded-pill bg-info" v-for="domaine in musee.domaines" :key="domaine">{{ domaine
                }}</span>
            </div>
            <div class="card-body" id="scrollable" v-if="musee.histoire != null">
                <h5 class="card-title">Histoire</h5>
                <p class="card-text">{{ musee.histoire }}</p>
            </div>
            <div class="card-body" v-if="musee.interet != null">
                <h5 class="card-title">Interêt</h5>
                <p class="card-text">{{ musee.interet }}</p>
            </div>
            <div class="card-body" v-if="musee.url != 'https://' + null">
                <h5 class="card-title">Plus d'informations</h5>
                <a :href="musee.url" class="card-link" target="_blank">{{ musee.url }}</a>
            </div>
            <div class="card-footer text-muted">
                Mis à jour le {{ musee.maj }}
            </div>

        </div>
        <div id="retour">
            <button type="button" class="btn btn-danger"><a id="lien" :href="musee.url_retour">Retour</a></button>
        </div>
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

#fiche_musee {
    margin: 2%;
}

.class {
    display: block;
}

#retour {
    position: absolute;
    display: inline-block;
    right: 2%;
}

#scrollable {
    height: 20vh;
    overflow-y: scroll;
}
</style>