import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/";

export default {
    install(Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.base_url = BASE_URL;
    }
}
