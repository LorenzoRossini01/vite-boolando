<script>
import AppCard from "./AppCard.vue";
export default {
  props: {
    cards: Array,
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <app-card v-for="card in cards" :card="card" />
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
