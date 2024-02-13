<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    closeModal() {
      store.modal.show = false;
    },

    getImgUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal">
      <div class="modal-left">
        <img :src="getImgUrl(store.modal.sprites.firstImg)" alt="" />
      </div>
      <div class="modal-right">
        <div class="modal-top">
          <h3>{{ store.modal.title }}</h3>
          <i class="fa-solid fa-xmark fa-xl" @click="closeModal()"></i>
        </div>
        <div class="modal-bottom">
          <div class="badges">
            <div v-show="store.modal.bagde.discountValue > 0" class="discount">
              -{{ store.modal.bagde.discountValue }}%
            </div>
            <div v-show="store.modal.bagde.sostenibility" class="sostenibility">
              Sostenibilità
            </div>
          </div>
          <div>
            <b>Brand:</b>
            <p>{{ store.modal.brand }}</p>
          </div>
          <div class="price">
            <b>Prezzo:</b>
            <p>{{ store.modal.descountedPrice }} €</p>
            <span v-show="store.modal.bagde.discountValue > 0">
              {{ store.modal.originalPrice }} €
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layover {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background-color: aliceblue;
    width: 80%;
    max-width: 960px;
    display: flex;

    .modal-left {
      width: 40%;
      img {
        width: 100%;
      }
    }
    .modal-right {
      width: 60%;
      padding: 1rem;
      position: relative;

      .modal-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #333;

        h3 {
          font-size: 1.5rem;
          text-transform: uppercase;
        }
      }

      .modal-bottom {
        padding-top: 1rem;

        div {
          padding: 0.5rem 0;
        }

        p {
          text-transform: capitalize;
          display: inline;
          margin-left: 0.5rem;
        }

        .badges {
          bottom: 2rem;
          display: flex;
          position: absolute;
          bottom: 10px;
          gap: 5px;
          div {
            padding: 3px 7px;
            background-color: aliceblue;
            color: white;
            font-weight: 600;
            font-size: 1rem;
            &.sostenibility {
              background-color: green;
            }
            &.discount {
              background-color: red;
            }
          }
        }

        .price {
          p {
            font-size: 1.5rem;
            color: red;
            font-weight: 600;
            display: inline;
            margin: 0 0.5rem;
          }
          span {
            font-size: 1rem;
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
