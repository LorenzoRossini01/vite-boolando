<script>
export default {
  props: {
    navList: Array,
    navIcons: Array,
  },
};
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <ul>
          <li v-for="navItem in navList">
            <a :href="navItem.href">{{ navItem.title }}</a>
          </li>
        </ul>
      </nav>

      <div>
        <img src="../assets/img/boolean-logo.png" alt="" />
      </div>

      <nav>
        <ul>
          <li v-for="icon in navIcons">
            <a href="#"><i :class="icon"></i></a>
          </li>
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
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  div {
    height: 100%;
    padding: 9px 0;
  }
}
</style>
