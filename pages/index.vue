<template>
  <div id="home-page" class="home-page">
    <section class="home-page-welcome paralax-effect center" :style="{backgroundImage: 'url(' + require('~/assets/svg/main-back.svg') + ')' }">
      <h2 class="home-page-welcome__title title1">{{ $t('hello') }}</h2>
      <p class="text_size-xl">Почни зараз</p>
      <a href="/cases"><i-button class="home-page-welcome__button">Подарувати добро</i-button></a>
    </section>

    <section>
      <mini-common-products-list-page :show="show"/>
    </section>

    <section>
      <i-timeline></i-timeline>
    </section>

    <section>
      <Partners/>
    </section>

    <section class="descr" id="descr" v-scroll="scrollShow">
      <h2 class="text_size-xxl">Що таке Япомога?</h2>
      <div class="descr__body" id="descrBlock">
        <div class="descr__content" id="descrItem">
            <div class="descr__item">
              <h3 class="text_size-xl">Япомога це</h3>
              <p class="text_size-m">Перша автоматизована онлайн
                платформа для обміну бонусів, знижок і кешбек
                на спільну благодійність.</p>
            </div>
            <div class="descr__item">
              <h3 class="text_size-xl">Наша місія</h3>
              <p class="text_size-m">Розвиток масової та корпоративної
                філантропії шляхом створення механізмів
                легких пожертвувань (easy giving) за допомогою бонусів,
                кешбек, знижок для учасників
                програм лояльності українських і міжнародних компаній.</p>
            </div>
            <div class="descr__item">
              <h3 class="text_size-xl">Чому ми?</h3>
              <p class="text_size-m">Ми перші пропонуємо Україні рішення легкої благодійності.
                Япомога - актуальна і важлива подія в українській благодійності, що сприяє
                її розвитку і зміцненню.</p>
            </div>
        </div>
        <div class="descr__video">
          <iframe width="560" height="300" src="https://www.youtube.com/embed/J3iJfjC669Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="about center" id="about">
      <h2 class="title">Як це працює?</h2>
      <div class="about__content">
        <div class="about__item">
          <h3 class="text_size-xl center">Крок 1</h3>
          <p class="text_size-m">Зареєструйтесь у наших парнерів.</p>
        </div>
        <div class="about__item">
          <h3 class="text_size-xl center">Крок 2</h3>
          <p class="text_size-m">Здійснюйте транзакції.</p>
        </div>
        <div class="about__item">
          <h3 class="text_size-xl center">Крок 1</h3>
          <p class="text_size-m">В особистому кабінеті у партнера Ви можете знайти віждет “Япомога” і перераховувати бонуси.</p>
        </div>
      </div>
    </section>

    <section>
      <organisations />
    </section>

    <section class="donate center">
      <h2 class="donate__title title1">Давайте змінювати світ разом!</h2>
      <a href="/cases"><i-button class="donate__button">Подарувати добро</i-button></a>
      <img class="donate_img" src="~/assets/svg/hand1.svg" alt="">
      <img class="donate_img" src="~/assets/svg/hand2.svg" alt="">
      <img class="donate_img" src="~/assets/svg/hand3.svg" alt="">
      <img class="donate_img" src="~/assets/svg/hand4.svg" alt="">
    </section>

    <section class="reviews">
       <div class="marquee">
        <span class="text_size-m">Строка отзывов</span>
      </div>
    </section>
  </div>
</template>

<script>
import Partners from '~/components/Partners.vue';
import IButton from '~/components/i-button.vue';
import ITimeline from '~/components/timeline/i-timeline.vue';
import MiniCommonProductsListPage from '~/components/products-list/MiniCommonProductsListPage.vue';
import Organisations from '~/components/Organizations.vue';

export default {
  layout: 'default',
  data: ()=>({
    show: false,
  }),
  components: {
    Partners,
    IButton,
    ITimeline,
    MiniCommonProductsListPage,
    Organisations,
  },
    methods: {
      scrollIndicator() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("done").style.width = scrolled + "%";
      },
      scrollShow() {
        var block = document.getElementById('descr')
        var show = document.getElementById('descrBlock')
          var height = block.offsetTop;
          if ( document.documentElement.scrollTop > (height - 500)) {
            show.classList.add('descr_shrink');
          }
      }
  },
};
</script>

<style lang="scss" scoped>
  .home-page {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .home-page-welcome {
    width: 100%;
    flex-basis: 100vh;
    background-color: var(--second-bgcolor);
    position: relative;
    color: #ffffff;

    svg {
      position: fixed;
      bottom: 90px;
      right: 35px;
      z-index: 10;
    }
  }
  .home-page-welcome__title {
    margin: 37vh 0 33px;
    padding: 30px 0;
    color: #ffffff;
  }
  .home-page-welcome__button {
    width: 220px;
    line-height: 48px;
    margin-top: 50px;
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  .descr {
    width: 100%;
    background-color: var(--third-bgcolor);
    padding: 70px 0 170px;
    position: relative;

    h2 {
      margin-left: 140px;
    }

    &__body {
      display: flex;
      flex-flow: row wrap;
      height: 400px;
      margin-top: 100px;
      padding: 170px 140px 0 170px;

      overflow-y: scroll;
      transition: all 5s ease;
    }

    .descr_shrink {
      .descr__item:not(:first-of-type) {
        opacity: 1;
      }
    }
  }
  .descr__content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    position: relative;
    top: -170px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: -10px;
      height: 100%;
      width: 1px;
      margin: 30px 0;
      background-color: black;
    }
  }
  .descr__item {
    width: 300px;
    margin: 0 30px 60px;
    position: relative;

    &:not(:first-of-type) {
      transition: all 10s ease;
      opacity: 0.2;
    }

    .text_size-xl {
      margin-bottom: 24px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 60px;
      height: 40px;
      background-color: transparent;
      background-image: url('../assets/svg/pic_yapomoga.svg');
      background-size: 60px 40px;
      background-repeat: no-repeat;
      top: 0px;
      left: -70px;
    }

  }
  .descr__video {
    height: 400px;
    position: absolute;
    right: 140px;
    top: 210px;
  }
  .about {
    width: 100%;
    padding: 70px 140px 35px;
    background-color: var(--first-bgcolor);
  }
  .about__content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 80px;
    text-align: left;
  }
  .about__item {
    max-width: 360px;
  }
  .done {
    width: 100%;
    line-height: 128px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background:
      repeating-linear-gradient(
        transparent, transparent 50px, #000000 52px
      ),
      repeating-linear-gradient(
        90deg, transparent, transparent 50px, #000000 52px
      );

    .done__text {
      /*font-family: Hisqaida 2018;*/
      font-style: normal;
      font-weight: bold;
      font-size: 96px;
      color: var(--text_color);
    }
  }
  .donate {
    width: 100%;
    height: 470px;
    background-color: var(--main_first-color);
    padding: 165px 0 0;
    position: relative;
  }
  .donate__title {
    position: relative;
    z-index: 10;
  }
  .donate__button {
    height: 48px;
    width: 220px;
    margin-top: 82px;
    border: 1px solid black;
    background-color: transparent;
  }
  .donate_img {
    position: absolute;
    z-index: 0;
  }
  .donate_img:nth-of-type(1) {
    top: -15px;
    left: 60px;
  }
  .donate_img:nth-of-type(2) {
    top: -35px;
    right: 380px;
  }
  .donate_img:nth-of-type(3) {
    bottom: 0px;
    left: 0px;
    transform: rotate(1deg);
  }
  .donate_img:nth-of-type(4) {
    bottom: 0px;
    right: 0px;
  }
  .reviews {
    box-sizing: border-box;
    line-height: 100px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-family: Hisqaida;
  }
  .done__line {
    margin: 0;
    width: 0%;
    white-space: nowrap;
    overflow: hidden;
    float: right;
    transition: width 0.2s;
  }
  .marquee {
    width: 100%;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;

    span {
      display: inline-block;
      padding-left: 100%;
      animation: marquee 20s infinite linear;
    }

    .text_size-m {
      font-weight: bold;
    }
  }
  @-webkit-keyframes marquee {
    0%{-webkit-transform: translate(0, 0);}
    100%{-webkit-transform: translate(-100%, 0);}
  }
  @keyframes marquee {
    0%{transform: translate(0, 0);}
    100%{transform: translate(-100%, 0)}
  }
  .home-page-welcome p,  .home-page-welcome h2,
  .home-page-welcome__button {
    position: relative;
    z-index: 5;
  }
  .home-page-welcome__button {
    background-color: var(--main_second-color);
    color: #000000;
    border-color: #000000;
  }
  .home-page-welcome__button:hover {
    background-color: transparent;
    color: #ffffff;
    border-color: #ffffff;
  }
</style>