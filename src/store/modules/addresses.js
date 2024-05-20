// src/store/modules/addresses.js
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const state = {
  addresses: [],
};

const getters = {
  allAddresses: (state) => {
    return [...state.addresses].sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
  },
};

const actions = {
  async addAddress({ commit, state }, newAddress) {
    const lastAddress = state.addresses[state.addresses.length - 1];
    const nextAddressId = lastAddress ? lastAddress.id + 1 : 0;
    const address = {
      ...newAddress,
      id: nextAddressId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    commit("newAddress", address);
  },
  async deleteAddress({ commit }, id) {
    commit("removeAddress", id);
  },
  async updateAddress({ commit }, { id, updatedData }) {
    const updatedAddress = {
      ...updatedData,
      updatedAt: new Date().toISOString(),
    };
    commit("updateAddress", { id, updatedAddress });
  },

  async buscarCep(_, cep) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error.response.data);
      throw error;
    }
  },
};

const mutations = {
  setAddresses(state, addresses) {
    state.addresses = addresses.map((address) => ({
      ...address,
      createdAt: format(new Date(address.createdAt), "dd/MM/yyyy", {
        locale: ptBR,
      }),
      updatedAt: format(new Date(address.updatedAt), "dd/MM/yyyy", {
        locale: ptBR,
      }),
    }));
  },
  newAddress(state, address) {
    state.addresses.push({
      ...address,
      createdAt: format(new Date(address.createdAt), "dd/MM/yyyy", {
        locale: ptBR,
      }),
      updatedAt: format(new Date(address.updatedAt), "dd/MM/yyyy", {
        locale: ptBR,
      }),
    });
  },
  removeAddress(state, id) {
    state.addresses = state.addresses.filter((address) => address.id !== id);
  },
  updateAddress(state, { id, updatedAddress }) {
    const index = state.addresses.findIndex((address) => address.id === id);
    if (index !== -1) {
      state.addresses.splice(index, 1, {
        ...state.addresses[index],
        ...updatedAddress,
        updatedAt: format(new Date(updatedAddress.updatedAt), "dd/MM/yyyy", {
          locale: ptBR,
        }),
      });
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
