<script setup>

import ButtonPrimary from "@/components/ButtonPrimary.vue";
import ArrawIcon from "@/components/icons/ArrawIcon.vue";

import {onMounted, onUnmounted, ref} from "vue";
import PopUp from "@/components/PopUp.vue";
import {useRoute} from "vue-router";

const showHeader = ref(null)

const locate = useRoute().path
console.log(locate)
const isOpen = ref(false)
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const toggleShowHeader = () => {
  const myPath = locate.split("/")[1]
  if (myPath === "projects") {
    showHeader.value = false
  } else {
    showHeader.value = true
  }
}

onMounted(() => {
  toggleShowHeader()
})

const props = defineProps({
  scrollFunc: undefined,
  arrayRefs: undefined
});


</script>

<template>
  <header class="header center">
    <div v-if="showHeader">

    </div>
    <nav class="nav" v-if="showHeader">
      <button @click="props.scrollFunc(props.arrayRefs[0])">Начало</button>
      <button @click="props.scrollFunc(props.arrayRefs[1])">Обо мне</button>
      <button @click="props.scrollFunc(props.arrayRefs[2])">Навыки</button>
      <div @click="toggleOpen" style="position: relative; cursor: pointer">Работы
        <arraw-icon/>
        <pop-up v-if="isOpen"/>
      </div>
    </nav>
    <router-link to="/" v-else class="go-home">
      Вернуться на главную
    </router-link>
    <a href="https://t.me/ostych">
      <button-primary>Связаться</button-primary>
    </a>
  </header>
</template>

<style scoped>

.header {
  min-height: 95px;
  padding-bottom: 27px;
  padding-top: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: black 2px solid;
}

.nav {
  display: flex;
  gap: 45px;
}

.nav a {
  color: #000000;
  transition: 0.3s;
}

.nav a:hover {
  opacity: 0.6;
}

.go-home{
  color: black;
  transition: 0.3s;
}

.go-home:hover {
  opacity: 0.6;
}

</style>