<script>
export default {
  data() {
    return {
      cards: [
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
        },
      ],
    };
  },

  methods: {
    getImgUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div v-for="card in cards" class="card">
        <div class="card-img">
          <img :src="getImgUrl(card.sprites.firstImg)" alt="" />
        </div>
        <div class="card-details">
          <p>{{ card.brand }}</p>
          <h3>{{ card.title.toUpperCase() }}</h3>
          <p>
            {{ card.descountedPrice }}
            <span>
              {{ card.originalPrice }}
            </span>
          </p>
        </div>
      </div>
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
    .card {
      width: calc(30% - 10px);
      margin: 5px;
      background-color: aqua;
      img {
        width: 100%;
      }
    }
  }
}
</style>
