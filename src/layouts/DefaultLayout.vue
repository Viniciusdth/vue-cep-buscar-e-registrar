<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Nome da Aplicação</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item link :to="{ name: 'Home' }">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'Address' }">
          <v-list-item-title>Cadastrar Endereço</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
};
</script>

<style>
/* Estilos específicos */
</style>
