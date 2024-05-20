<template>
  <v-container>
    <h1>Resumo de registros</h1>
    <AddressResume :addresses="latestAddresses" />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import AddressResume from "@/components/AddressResume.vue";

export default {
  name: "HomePage",
  components: {
    AddressResume,
  },
  computed: {
    ...mapGetters(["allAddresses"]),
    latestAddresses() {
      return this.allAddresses.slice(-3).reverse();
    },
  },
};
</script>

<style>
h1 {
  margin-bottom: 30px;
}
</style>
