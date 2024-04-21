<script setup>

</script>

<template>

  <div class="popup">
    <router-link to="/projects/1">
      1 работа
    </router-link>
    <router-link to="/projects/2">
      2 работа
    </router-link>
    <router-link to="/projects/3">
      3 работа
    </router-link>
    <router-link to="/projects/4">
      4 работа
    </router-link>
    <router-link to="/projects/5">
      5 работа
    </router-link>
    <router-link to="/projects/6">
      6 работа
    </router-link>
    <router-link to="/projects/7">
      7 работа
    </router-link>
    <router-link to="/projects/8">
      8 работа
    </router-link>
  </div>

</template>

<style scoped>

.popup{
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  top: 44px;
  right: -35px;
  gap: 10px;
  width: 200px;
  background: white;
  border: 1px black solid;
  border-radius: 20px;
  padding: 20px;
}

.popup a{
  color: black;
  transition: 0.3s;
}

.popup a:hover {
  opacity: 0.6;
}

</style>