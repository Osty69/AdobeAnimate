<script setup>
import {onMounted, ref} from "vue";
import ButtonDefault from "@/components/ButtonDefault.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import {projects} from "@/components/projects.js";
import {useRoute} from "vue-router";
import Header from "@/components/Header.vue";

const route = useRoute()
const thisIndex = ref(0)
onMounted(() => {
  thisIndex.value = +(route.params.id) - 1
})
console.log(route.params)
const changeRef = (id) => {
  thisIndex.value = id - 1
}
const incrimentRef = () => {
  if (thisIndex.value < projects.length - 1) {
    thisIndex.value = thisIndex.value + 1
  } else {
    thisIndex.value = 0
  }
}

const decrimentRef = () => {
  if (thisIndex.value > 0) {
    thisIndex.value = thisIndex.value - 1
  } else {
    thisIndex.value = projects.length - 1
  }
}

</script>

<template>
  <Header :scroll-func="scrollToElement"/>
  <iframe class="anim" :src="projects[thisIndex].imgUrl"/>
  <div class="info center">
    <div class="left-content">
      <p>Анимация {{ projects[thisIndex].name }}</p>
    </div>
    <div class="right-content">
      <p>{{ projects[thisIndex].description }}</p>
      <div class="btm-box">
        <button class="circle-btm" @click="changeRef(project.id)" :class="{active:thisIndex === project.id-1}"
                v-for="project in projects">
          {{ project.id }}
        </button>
      </div>
      <div class="btm-box">
        <button-default @click="decrimentRef">Предыдущая</button-default>
        <button-primary @click="incrimentRef">Следущая</button-primary>
      </div>
    </div>
  </div>

</template>

<style scoped>

.btm-box {
  display: flex;
  gap: 34px;
}

.circle-btm {
  font-family: "Old Standard TT", sans-serif;
  font-size: 32px;
  margin-top: 50px;
  margin-bottom: 59px;
  border-radius: 50%;
  padding: 10px 20px;
}

.active {
  border: black 1px solid;
}

.anim {
  padding-top: 40px;
  width: 100vw;
  height: 680px;
}

.info {
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  gap: 239px;
}

.left-content {
  width: 685px;
  font-size: 64px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 70px;
}

.right-content {
  width: 793px;
  padding-bottom: 150px;
}

</style>