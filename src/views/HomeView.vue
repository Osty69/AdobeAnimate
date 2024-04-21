<script setup xmlns="http://www.w3.org/1999/html">
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import ButtonDefault from "@/components/ButtonDefault.vue";
import photoBig from "@/assets/img/photo1.png"
import photo2 from "@/assets/img/photo2.png"
import ButtonLink from "@/components/ButtonLink.vue";
import Circle from "@/components/Circle.vue";
import PopUp from "@/components/PopUp.vue";

import {ref} from 'vue';
import Header from "@/components/Header.vue";

const about = ref(null);
const creative = ref(null);
const dots = ref(null);

const arrayRefs = [about, creative, dots]

const scrollToElement = (section) => {
  if (section.value) {
    section.value.scrollIntoView({behavior: 'smooth'});
  }
};

</script>

<template>
  <Header :scroll-func="scrollToElement" :array-refs="arrayRefs"/>
  <section class="intro center">
    <h1 class="title">Демонстрация работ Adobe Animate по дисциплине
      Web-Design</h1>
    <div class="btm-box">
      <router-link to="/projects/1">
        <button-primary>Изучить работы</button-primary>
      </router-link>
      <a href="https://t.me/ostych">
        <button-default>Связаться</button-default>
      </a>
    </div>
  </section>
  <img class="photo-big" :src="photoBig" alt="photo1"/>
  <section class="about center">
    <div class="left-content">
      <span ref="about">Тяжелый путь</span>
      <h2>Погружение
        в мир анимации
        и первые трудности</h2>
      <p>Добро пожаловать в мое портфолио демонстрирующее
        достаточно тяжелую работу проделанную с использованием Adobe Animate.<br>
        Набираясь опыта и мощи в отрасли анимации, я воплотил свои идеи в жизнь, несмотря
        на тяжкое восприятие новой программы, и
        считаю что большинство из них сделаны на славу.
      </p>
      <div class="btm-box">
        <router-link to="/projects/1">
          <button-default>Изучить работы</button-default>
        </router-link>
        <a href="https://t.me/ostych">
          <button-link>Связаться</button-link>
        </a>
      </div>
    </div>
    <div class="right-content">
      <img class="photo2" :src="photo2" alt="photo2">
    </div>
  </section>
  <section class="creative center">
    <div class="left-content2">
      <span>Креатив</span>
      <h2>Раскрываю свой
        творческий потенциал
        с помощью Adobe Animate</h2>
    </div>
    <pop-up v-if="isOpen"/>
    <div class="right-content2" ref="creative">
      <p>Пора бы познакомиться! Я Даня, и я стремлюсь к тому, чтобы все, чем бы я не занимался, оставалось в сердцах
        людей. Моя
        страсть к графическому дизайну мотивирует меня создавать уникальные и вдохновляющие проекты. В школе меня начала
        привлекать разработка игр, поэтому я решил выбрать именно это направление в учебе. С тех пор я ещ е не создал ни
        одну игру, но в скором времени я к этому все таки приду. А пока я развиваюсь в разных направлениях. Здесь я хочу
        поделиться с вами своим путем, своими навыками и опытом.
      </p>
    </div>
  </section>

  <section class="circles center" ref="dots">
    <div class="left-content3">
      <Circle/>
      <h2>
        Фотографии
      </h2>
      <p>Больше года назад я купил камеру на которую наснимал большое количество контента и сделал несколько фотокниг.
      </p>
    </div>

    <div class="center-content3">
      <Circle/>
      <h2>
        Видео контент
      </h2>
      <p>
        Так же достаточно давно я увлекаюсь монтажем видео. Создавал игровые нарезки и красивые, атмосферные видео.
      </p>
    </div>

    <div class="right-content3">
      <Circle/>
      <h2>
        3D Моделирование
      </h2>
      <p>
        Сейчас в учебной программе появилось 3D моделирование и в будущем я создам свою игру, о которой мечтаю со
        средней школы.
      </p>
    </div>

    <div class="btm-box">
      <router-link to="/projects/1">
        <button-default>Изучить работы</button-default>
      </router-link>
      <a href="https://t.me/ostych">
        <button-link>Связаться</button-link>
      </a>
    </div>

  </section>

</template>

<style scoped>
.intro {
  padding-bottom: 100px;
}

.title {
  padding-top: 100px;
  padding-bottom: 44px;
  font-size: 64px;
  width: 800px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 70px;
}

.btm-box {
  display: flex;
  gap: 20px;
}

.photo-big {
  width: 100vw;
}

.photo-garage img {
  width: 100%;
}

.about {
  display: flex;
  padding-top: 78px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.left-content {
  padding-top: 96px;
  width: 793px;
  padding-bottom: 54px;
}

.left-content span {
  padding-bottom: 26px;
  font-size: 24px;
  line-height: 70px;
}

.left-content h2 {
  padding-bottom: 44px;
  font-size: 64px;
  width: 611px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 70px;
}

.left-content p {
  font-size: 24px;
  padding-bottom: 57px;
  line-height: 36px;
}

.right-content {
  width: 793px;
  height: 796px;
}

.photo2 {
  width: 100%;
  height: 100%;
}

.creative {
  display: flex;
  padding-top: 78px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.left-content2 {
  padding-top: 70px;
  width: 793px;
  padding-bottom: 54px;
}

.left-content2 span {
  padding-bottom: 26px;
  font-size: 24px;
  line-height: 70px;
}

.left-content2 h2 {
  padding-bottom: 44px;
  font-size: 64px;
  width: 720px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 70px;
}

.right-content2 {
  padding-top: 140px;
  width: 793px;
  padding-bottom: 54px;
}

.right-content2 p {
  line-height: 36px;
}

.circles {
  display: flex;
  padding-top: 78px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 200px;
}

.left-content3 h2 {
  padding-top: 38px;
  font-size: 48px;
  width: 385px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 59px;
}

.left-content3 p {
  padding-top: 23px;
  padding-bottom: 55px;
  width: 544px;
  line-height: 36px;
}

.center-content3 h2 {
  padding-top: 38px;
  font-size: 48px;
  width: 336px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 59px;
}

.center-content3 p {
  padding-top: 23px;
  padding-bottom: 55px;
  width: 495px;
  line-height: 36px;
}

.right-content3 h2 {
  padding-top: 38px;
  font-size: 48px;
  width: 503px;
  font-family: "Old Standard TT", sans-serif;
  line-height: 59px;
}

.right-content3 p {
  padding-top: 23px;
  padding-bottom: 55px;
  width: 525px;
  line-height: 36px;
}

</style>