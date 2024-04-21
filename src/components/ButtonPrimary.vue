<script setup>

</script>

<template>
<button class="button">
  <slot/>
</button>
</template>

<style scoped>
.button{
  color: white;
  padding: 20px;
  background: #000;
  transition: 0.3s;
}
.button:hover{
  opacity: 0.6;
}
</style>