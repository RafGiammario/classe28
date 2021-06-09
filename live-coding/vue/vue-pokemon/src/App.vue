<template>
    <div id="app">
        <CustomTitle :titleText="message" :subtitleText="subMessage"/>
        <img alt="Vue logo" src="./assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <Pokemons />
    </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import CustomTitle from "./components/CustomTitle.vue";
import Pokemons from "./pages/Pokemons.vue";

export default {
    name: "App",
    components: {
        // HelloWorld
        CustomTitle,
        Pokemons,
    },
    data() {
        return {
            message: "La mia prima app in Vue.js!",
            subMessage: "Giochiamo con le API"
        }
    }
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
