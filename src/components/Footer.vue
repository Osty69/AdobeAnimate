<script setup>

</script>

<template>

  <footer class="footer">
    <nav class="nav">
      <router-link to="/">Design by @osty</router-link>
      <div class="navbox">
        <a href="https://t.me/ostych">
          <p>Telegram @ostych</p>
        </a>
        <a href="mailto:ostys.com@gmail.com">
          <p>Gmail ostys.com@gmail.com</p>
        </a>
      </div>
    </nav>
  </footer>

</template>

<style scoped>

.footer {
  margin: 0 100px;
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  border-top: black 2px solid;
}

.nav {
  width: 100%;
  justify-content: space-between;
  display: flex;
  gap: 300px;
  padding-top: 41px;
  font-size: 24px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 36px;
}

.nav a {
  color: #000000;
  transition: 0.3s;
}

.nav a:hover {
  opacity: 0.6;
}

.navbox{
display: flex;
  gap: 67px;
}


</style>