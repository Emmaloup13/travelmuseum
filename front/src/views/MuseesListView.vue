<template>
    <Musees :region="$route.params.region" />
</template>

<script>

import Musees from '@/components/MuseesList/MuseesList.vue';

export default {
    name: "MuseeView",
    components: {
        Musees
    }
}
</script>