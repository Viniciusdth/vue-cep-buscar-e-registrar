<template>
  <div>
    <v-card class="address-card">
      <v-card-title>Últimos Endereços Cadastrados</v-card-title>
      <v-card-text>
        <ul class="address-list">
          <li
            v-for="address in recentAddresses"
            :key="address.id"
            class="address-item"
          >
            <h3>{{ address.title }}</h3>
            <div>{{ address.logradouro }}, {{ address.complemento }}</div>
            <div>
              {{ address.bairro }}, {{ address.localidade }} - {{ address.uf }}
            </div>
            <div>Criado em: {{ address.createdAt }}</div>
            <div>Atualizado em: {{ address.updatedAt }}</div>
          </li>
          <li v-if="recentAddresses.length === 0">
            Não há endereços cadastrados.
          </li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddressResume",
  computed: {
    ...mapGetters({
      addresses: "allAddresses",
    }),
    recentAddresses() {
      return this.addresses.slice(-3).reverse();
    },
  },
};
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>
