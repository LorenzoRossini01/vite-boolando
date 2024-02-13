import { reactive } from "vue";

export const store = reactive({
  APIuri: "http://localhost:3000/",

  modal: {
    show: true,
    title: "",
    brand: "",
    descountedPrice: "",
    originalPrice: "",
  },
});
