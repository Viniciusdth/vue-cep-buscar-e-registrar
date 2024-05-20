<template>
  <v-container>
    <v-btn color="primary mb-5" @click="openNewAddressModal">Novo</v-btn>
    <AddressList :addresses="addresses" @edit="editAddress" @delete="deleteAddress" />
    <v-dialog v-model="showModal" max-width="600px">
      <address-form :address="editingAddress" @close="closeModal"></address-form>
    </v-dialog>
  </v-container>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import AddressList from "@/components/AddressList.vue";
import AddressForm from "@/components/AddressForm.vue";

export default {
  name: "AddressPage",
  components: {
    AddressList,
    AddressForm,
  },
  data() {
    return {
      showModal: false,
      editingAddress: null,
    };
  },
  computed: {
    ...mapGetters(["allAddresses"]),
    addresses() {
      return this.allAddresses;
    },
  },
  methods: {
    ...mapActions(["deleteAddress"]),
    openNewAddressModal() {
      this.editingAddress = null;
      this.showModal = true;
    },
    editAddress(item) {
      this.editingAddress = { ...item };
      this.showModal = true;
    },
    deleteAddress(id) {
      this.$store.dispatch("deleteAddress", id);
    },
    closeModal() {
      this.showModal = false;
      this.editingAddress = null;
    },
  },
};
</script>

<style>
/* Estilos específicos */
</style>
