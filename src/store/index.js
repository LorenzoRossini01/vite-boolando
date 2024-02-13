import { reactive } from "vue";

export const store = reactive({
  APIuri: "http://localhost:3000/",

  modal: {
    show: false,
    title: "",
    brand: "",
    descountedPrice: "",
    originalPrice: "",
    sprites: {
      firstImg: "",
      secondImg: "",
    },
    bagde: {
      discountValue: 50,
      sostenibility: true,
    },
  },
});
