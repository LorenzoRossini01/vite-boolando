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
    };
  },

  methods: {
    getImgUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },

    getWordCapitalized(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div v-for="card in cards" class="card">
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
          <p>{{ getWordCapitalized(card.brand) }}</p>
          <h3>{{ card.title.toUpperCase() }}</h3>
          <div class="price">
            <p>
              {{ card.descountedPrice }} €
              <span> {{ card.originalPrice }} € </span>
            </p>
          </div>
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

        h3 {
          font-size: 1rem;
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
  }
}
</style>
