<script>
export default {
  props: {
    card: Object,
  },

  methods: {
    getImgUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card">
    <div
      class="card-img"
      @mouseover="card.state.hover = true"
      @mouseleave="card.state.hover = false"
    >
      <img :src="getImgUrl(card.sprites.firstImg)" alt="" />
      <img
        :src="getImgUrl(card.sprites.secondImg)"
        :class="card.state.hover ? '' : 'active'"
        alt=""
        class="second-img"
      />
      <div class="badges">
        <div v-show="card.bagde.discountValue > 0" class="discount">
          -{{ card.bagde.discountValue }}%
        </div>
        <div v-show="card.bagde.sostenibility" class="sostenibility">
          Sostenibilità
        </div>
      </div>

      <div
        @click="card.state.favourite = !card.state.favourite"
        :class="card.state.favourite ? 'active' : ''"
        class="favourites"
      >
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
    <div class="card-details">
      <p>{{ card.brand }}</p>
      <h3>{{ card.title }}</h3>
      <div class="price">
        <p>
          {{ card.descountedPrice }} €
          <span v-show="card.bagde.discountValue > 0">
            {{ card.originalPrice }} €
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(100% / 3 - 10px);
  margin: 5px;
  .card-img {
    position: relative;
    img {
      transition: all linear 0.1s;
      width: 100%;
      &.second-img {
        position: absolute;
        top: 0;
        &.active {
          opacity: 0;
        }
      }
    }
    .badges {
      position: absolute;
      bottom: 2rem;
      display: flex;
      gap: 5px;
      div {
        padding: 3px 7px;
        background-color: aliceblue;
        color: white;
        font-weight: 600;
        font-size: 0.6rem;
        &.sostenibility {
          background-color: green;
        }
        &.discount {
          background-color: red;
        }
      }
    }

    .favourites {
      width: 50px;
      height: 50px;
      background-color: aliceblue;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 1rem;
      cursor: pointer;

      &.active {
        color: red;
      }
    }
  }

  .card-details {
    margin: 5px 0;
    font-size: 0.8rem;
    p {
      text-transform: capitalize;
    }

    h3 {
      font-size: 1rem;
      text-transform: uppercase;
    }

    .price {
      p {
        color: red;
        font-weight: 600;
      }
      span {
        color: black;
        text-decoration: line-through;
        font-weight: 200;
      }
    }
  }
}
</style>
