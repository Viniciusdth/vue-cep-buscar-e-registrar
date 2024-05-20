// store/index.js

import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import addresses from "./modules/addresses";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    addresses,
  },
  plugins: [
    createPersistedState({
      key: "vuex", // Nome da chave usada no localStorage
      paths: ["addresses"], // Caminhos dos módulos a serem persistidos
    }),
  ],
});
