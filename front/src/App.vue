<template>
  <NavBar />
  <RouterView />
</template>

<script>
import NavBar from './components/App/NavBar.vue';

export default {
  name: "MyApp",
  components: {
    NavBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>