<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  props: {
    cards: Array,
  },

  components: {
    AppCard,
  },

  methods: {
    showModal() {
      store.modal.show = true;
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
        @click="showModal()"
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
