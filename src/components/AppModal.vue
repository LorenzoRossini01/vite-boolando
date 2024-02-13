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
  },
};
</script>

<template>
  <div class="layover">
    <div class="modal">
      <div class="modal-left">
        <img src="../assets/img/1.webp" alt="" />
      </div>
      <div class="modal-right">
        <div class="modal-top">
          <h1>modale</h1>
          <i class="fa-solid fa-xmark fa-xl" @click="closeModal()"></i>
        </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
          excepturi illum in aspernatur consectetur eveniet suscipit ab beatae
          expedita voluptatibus? Laborum similique autem praesentium. Ullam
          error nesciunt aut iure minima?
        </p>
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

      .modal-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
