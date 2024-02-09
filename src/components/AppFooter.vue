<script>
export default {
  props: {
    links: Array,
    icons: Array,
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-left">
        <h3>Boolando s.r.l</h3>
        <ul>
          <li v-for="link in links">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-right">
        <p>Trovaci anche su</p>
        <ul>
          <li v-for="icon in icons">
            <a href="#">
              <i :class="icon" class="fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 1.4rem 0;
  background-color: #1a1a1a;
  color: white;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: 1rem;
    }
    ul {
      display: flex;
      gap: 10px;
      font-size: 0.7rem;
      margin-top: 0.6rem;
    }
    li {
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
