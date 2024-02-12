<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import { store } from "./store";
import axios from "axios";
export default {
  data() {
    return {
      store,

      headerNavList: [],

      headerNavIcons: [
        "fa-regular fa-user",
        "fa-regular fa-heart",
        "fa-solid fa-bag-shopping",
      ],

      mainCards: [],

      footerLink: [],

      footerIcons: [
        "fa-brands fa-square-twitter",
        "fa-brands fa-square-facebook",
        "fa-brands fa-square-instagram",
        "fa-brands fa-square-pinterest",
        "fa-brands fa-square-youtube",
      ],
    };
  },

  components: { AppHeader, AppMain, AppFooter },

  created() {
    axios.get(`${store.APIuri}headerNavList`).then((res) => {
      this.headerNavList = res.data;
    });

    axios.get(`${store.APIuri}maincards`).then((res) => {
      this.mainCards = res.data;
    });

    axios.get(`${store.APIuri}footerLink`).then((res) => {
      this.footerLink = res.data;
    });
  },
};
</script>

<template>
  <app-header :navList="headerNavList" :navIcons="headerNavIcons"></app-header>
  <app-main :cards="mainCards"></app-main>
  <app-footer :links="footerLink" :icons="footerIcons"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
