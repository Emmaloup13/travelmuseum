<template>
    <div id="home_view">
        <div id="map_container">
            <Map></Map>
        </div>
        <div id="home_container">
            <Home />
        </div>
    </div>
</template>


<script>

import Home from '../components/Home/Home.vue'
import Map from '../components/Home/Map.vue'


export default {
    name: 'HomeView',
    components: {
        Home,
        Map
    }
}
</script>



<style>
#map_container,
#home_container {
    text-align: center;
}
</style>