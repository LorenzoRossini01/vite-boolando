<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  data() {
    return {
      store,
    };
  },

  props: {
    cards: Array,
  },

  components: {
    AppCard,
  },

  methods: {
    handleCardOpen(productIndex) {
      store.modal.show = true;
      const selectedCard = this.cards[productIndex];

      store.modal.title = selectedCard.title;
      store.modal.brand = selectedCard.brand;
      store.modal.descountedPrice = selectedCard.descountedPrice;
      store.modal.originalPrice = selectedCard.originalPrice;
      store.modal.bagde.discountValue = selectedCard.bagde.discountValue;
      store.modal.bagde.sostenibility = selectedCard.bagde.sostenibility;
      store.modal.sprites.firstImg = selectedCard.sprites.firstImg;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <app-card
        v-for="(card, index) in cards"
        :card="card"
        :index="index"
        @card-open="handleCardOpen"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 30px 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
