<template>
  <v-data-table :headers="headers" :items="addresses" class="elevation-1">
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon medium @click="$emit('edit', item)">mdi-pencil</v-icon>
      <v-icon medium @click="$emit('delete', item.id)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'AddressList',
  props: {
    addresses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headers: [
        { text: 'Título', value: 'title' },
        { text: 'Logradouro', value: 'logradouro' },
        { text: 'Complemento', value: 'complemento' },
        { text: 'Bairro', value: 'bairro' },
        { text: 'Localidade', value: 'localidade' },
        { text: 'UF', value: 'uf' },
        { text: 'Criado em', value: 'createdAt' },
        { text: 'Atualizado em', value: 'updatedAt' },
        { text: 'Ações', value: 'actions', sortable: false }
      ]
    };
  }
};
</script>

<style scoped>
.v-data-table .v-data-table__row:hover {
  background-color: #f5f5f5;
}
</style>
