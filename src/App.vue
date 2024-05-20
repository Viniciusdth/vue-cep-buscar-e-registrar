<template>
  <v-app>
    <v-app-bar color="primary"
      app
      :elevation="1"
      style="
        background-image: linear-gradient(103deg, #0054e8 0%, #00a0ed 100%);
      "
      
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mt-0">
        <v-btn icon class="mt-0 text-white">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-white">Buscador de Endereços</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" color="#0054e8" dark>
      <v-list dense>
        <v-list-item
          link
          :to="{ name: 'HomePage' }"
          exact
          active-class="white--text"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          :to="{ name: 'AddressPage' }"
          active-class="white--text"
        >
          <v-list-item-icon>
            <v-icon>mdi-map-marker-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Cadastrar Endereço</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
@import "assets/css/colors.css";
@import "assets/css/fonts.css";
@import "assets/css/styles.css";
</style>
