<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  data() {
    return {
      headerNavList: ["Donna", "Uomo", "Bambini"],
      headerNavIcons: [
        "fa-regular fa-user",
        "fa-regular fa-heart",
        "fa-solid fa-bag-shopping",
      ],

      mainCards: [
        {
          brand: "levi's",
          title: "relaxed fit tee unisex",
          descountedPrice: 14.99,
          originalPrice: 29.99,
          sprites: {
            firstImg: "1.webp",
            secondImg: "1b.webp",
          },
          bagde: {
            discountValue: 50,
            sostenibility: true,
          },

          state: {
            favourite: false,
            hover: false,
          },
        },
        {
          brand: "guess",
          title: "roses tee",
          descountedPrice: 20.99,
          originalPrice: 29.99,
          sprites: {
            firstImg: "2.webp",
            secondImg: "2b.webp",
          },
          bagde: {
            discountValue: 30,
            sostenibility: false,
          },
          state: {
            favourite: false,
            hover: false,
          },
        },
        {
          brand: "come zucchero filato",
          title: "voglia di colori pastello",
          descountedPrice: 129.99,
          originalPrice: 184.99,
          sprites: {
            firstImg: "3.webp",
            secondImg: "3b.webp",
          },
          bagde: {
            discountValue: 30,
            sostenibility: false,
          },
          state: {
            favourite: false,
            hover: false,
          },
        },
        {
          brand: "levi's",
          title: "tee unisex",
          descountedPrice: 14.99,
          originalPrice: 29.99,
          sprites: {
            firstImg: "4.webp",
            secondImg: "4b.webp",
          },
          bagde: {
            discountValue: 50,
            sostenibility: true,
          },
          state: {
            favourite: false,
            hover: false,
          },
        },
        {
          brand: "maya deluxe",
          title: "stripe bodice",
          descountedPrice: 99.99,
          originalPrice: "",
          sprites: {
            firstImg: "5.webp",
            secondImg: "5b.webp",
          },
          bagde: {
            discountValue: 0,
            sostenibility: false,
          },
          state: {
            favourite: false,
            hover: false,
          },
        },
        {
          brand: "esprit",
          title: "maglione - black",
          descountedPrice: 29.99,
          originalPrice: "",
          sprites: {
            firstImg: "6.webp",
            secondImg: "6b.webp",
          },
          bagde: {
            discountValue: 0,
            sostenibility: true,
          },
          state: {
            favourite: false,
            hover: false,
          },
        },
      ],

      footerLink: [
        {
          text: "Informazioni legali",
          href: "#",
        },
        {
          text: "Informativa sulla privacy",
          href: "#",
        },
        {
          text: "Diritto di recesso",
          href: "#",
        },
      ],

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
