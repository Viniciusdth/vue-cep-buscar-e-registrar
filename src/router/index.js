import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/views/Home.vue";
import AddressPage from "@/views/Address.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/address",
      name: "AddressPage",
      component: AddressPage,
    },
  ],
});
