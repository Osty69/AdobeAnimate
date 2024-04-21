<script setup>

</script>

<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style scoped>
.button{
  color: #000000;
  padding: 20px;
  border: black 2px solid;
  transition: 0.3s;
}
.button:hover{
  opacity: 0.6;
}
</style>