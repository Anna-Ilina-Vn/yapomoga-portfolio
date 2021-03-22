<template>
  <ul class="nav__list">
    <li class="nav__link"><a href="/categories/categorycurrents-Qxl6ywB">Кейси</a></li>
    <li class="nav__link"><a @click="scrollTo('descr')">Про нас</a></li>
    <li class="nav__link"><a @click="scrollTo('partners')">Партнери</a></li>
    <li class="nav__link"><a @click="scrollTo('organisations')">Організації</a></li>
    <li class="nav__link"><a href="/chavo">Чаво</a></li>
    <li class="nav__link"><a href="/cases">Звіти</a></li>
    <li class="nav__link"><a href="/">Япомогабокс</a></li>
    <li class="nav__link"><a @click="scrollTo('contacts')">Контакти</a></li>
  </ul>
</template>

<script>
export default {
  methods: {
    scrollTo: function(id) {
      var el = document.getElementById(id)
      document.documentElement.scrollTop = el.offsetTop - 80
    }
  }
}
</script>

<style lang="scss">
  .nav__link {
    margin: 10px;

    a:hover {
      cursor: pointer;
    }
  }
</style>
