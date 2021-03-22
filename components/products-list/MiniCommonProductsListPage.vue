<template>
  <div  class="cases-list center">
      <h2 class="title">Кейси</h2>
      <div class="cases-list__body">
        <div class="cases-list__wrapper">
          <div class="cases-list__container" id="cont" :style='{left: sliderStep + "px"}'>
            <common-products-list-page :load-products="loadProducts" :show="show" v-on:casesLength="length($event)"/>
          </div>
        </div>
        <i-button v-on:click="addStep" class="cases-list__button button-left" :disabled="disabled"></i-button>
        <i-button v-on:click='subStep' class="cases-list__button button-right"></i-button>
      </div>
      <a href="/cases"><i-button class="cases__button">Переглянути інші кейси</i-button></a>
  </div>
</template>

<script>
import CommonProductsListPage from '~/components/products-list/CommonProductsListPage.vue';
import Product from '~/api/product.js';
import IButton from '~/components/i-button.vue'

export default {
  data:()=>({
    sliderStep: 0,
    containerWidth: 3,
  }),
  props:{
    show: {
      type: Boolean,
      default: false,
    },
    disabled: true,
  },
  components: {
    CommonProductsListPage,
    IButton,
  },
  methods: {
    async loadProducts () {
      return await Product.list()
    },
    length: function(data) {
      this.containerWidth = data
    },
    addStep: function () {
      if (this.sliderStep == 0) {
        this.sliderStep = 0
      }
        else {
          this.sliderStep += 400
        }
    },
    subStep: function() {
      (this.sliderStep <= this.containerWidth*(-400)/2) ? this.sliderStep = 0 : this.sliderStep -= 400
    }
  },
}
</script>


<style lang="scss">
  .common-list {
    border: none;
    margin: 0;
  }
  .products-list {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .product-card {
    margin: 10px 0px;
  }
</style>

<style lang="scss" scoped>
  .cases-list {
    width: 100%;
    padding: 0 120px;

    .title {
      margin: 70px auto;
    }
  }
  .cases-list__body {
    position: relative;
  }
  .cases-list__wrapper {
    width: 100%;
    height: 510px;
    overflow: hidden;
    position: relative;
  }
  .cases-list__container {
    height: 510px;
    position: absolute;
		transition: all .5s ease;
  }
  .cases-list__button {
    position: absolute;
    height: 44px;
    width: 44px;
    top: calc(50% - 22px);
    background-color: transparent;
    background-repeat: no-repeat;
    border: 1px solid #000000;
    border-radius: 50%;
    background-size: 24px 24px;
    background-position: center;

    &.button-left {
      left: -84px;
      background-image: url('../../assets/svg/left-arrow.svg');
    }

    &.button-right {
      right: -84px;
      background-image: url('../../assets/svg/right-arrow.svg');
    }

    &:hover {
      background-color: #FFBB27;
    }
  }
  .cases__button {
    line-height: 38px;
    width: 220px;
    background-color: transparent;
    border: 1px solid #000000;
    margin: 60px auto 90px;
    color: var(--main_second-color);

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
  }
</style>