<template>
  <v-form @submit.prevent="submit">
    <v-text-field v-model="cep" label="CEP" required></v-text-field>
    <v-btn @click="buscar" color="primary">Buscar</v-btn>
    <v-text-field v-model="title" label="Título" required></v-text-field>
    <v-text-field v-model="logradouro" label="Logradouro" readonly></v-text-field>
    <v-text-field v-model="complemento" label="Complemento"></v-text-field>
    <v-text-field v-model="bairro" label="Bairro" readonly></v-text-field>
    <v-text-field v-model="localidade" label="Localidade" readonly></v-text-field>
    <v-text-field v-model="uf" label="UF" readonly></v-text-field>
    <v-btn type="submit" color="primary">Salvar</v-btn>
  </v-form>
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      title: "",
      dadosBuscados: false,
    };
  },
  watch: {
    address: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.cep = newVal.cep;
          this.logradouro = newVal.logradouro;
          this.complemento = newVal.complemento;
          this.bairro = newVal.bairro;
          this.localidade = newVal.localidade;
          this.uf = newVal.uf;
          this.title = newVal.title;
          this.dadosBuscados = true;
        } else {
          this.resetForm();
        }
      },
    },
  },
  methods: {
    async buscar() {
      try {
        const data = await this.$store.dispatch("buscarCep", this.cep);
        this.logradouro = data.logradouro;
        this.complemento = data.complemento;
        this.bairro = data.bairro;
        this.localidade = data.localidade;
        this.uf = data.uf;
        this.dadosBuscados = true;
      } catch (error) {
        console.error("Erro ao buscar o endereço:", error);
      }
    },
    submit() {
      if (this.dadosBuscados) {
        const newAddress = {
          cep: this.cep,
          logradouro: this.logradouro,
          complemento: this.complemento,
          bairro: this.bairro,
          localidade: this.localidade,
          uf: this.uf,
          title: this.title,
        };

        if (this.address) {
          this.$store.dispatch("updateAddress", { id: this.address.id, updatedData: newAddress });
        } else {
          this.$store.dispatch("addAddress", newAddress);
        }
        this.$emit("close");
      } else {
        alert("Por favor, busque o endereço antes de salvar.");
      }
    },
    resetForm() {
      this.cep = "";
      this.logradouro = "";
      this.complemento = "";
      this.bairro = "";
      this.localidade = "";
      this.uf = "";
      this.title = "";
      this.dadosBuscados = false;
    },
  },
};
</script>

<style scoped>
/* Adicione aqui os estilos específicos para o AddressForm */
</style>
