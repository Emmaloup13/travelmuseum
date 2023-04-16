<template>
    <Musee :region="$route.params.region" :id="$route.params.id" />
</template>

<script>

import Musee from '@/components/Musee/Musee.vue';

export default {
    name: "MuseeView",
    components: {
        Musee
    }
}
</script>