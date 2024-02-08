<script>
export default {
  data() {
    return {
      navList: ["Donna", "Uomo", "Bambini"],
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li v-for="navItem in navList">{{ navItem }}</li>
        </ul>
      </nav>

      <div>
        <img src="../assets/img/boolean-logo.png" alt="" />
      </div>

      <nav>
        <ul>
          <li v-for="navItem in navList">{{ navItem }}</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ff6900;
  height: 60px;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    line-height: 100%;
    vertical-align: middle;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  div {
    height: 100%;
    padding: 9px 0;
  }
}
</style>
