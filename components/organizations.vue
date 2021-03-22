<template>
  <div class="organisations" id="organisations">
    <h2 class="title center">Організації</h2>

    <div class="organisations-content">
    	<div class='slider slider__img js-slider'>
    		<div class="slider__body" v-bind:style='{left: sliderOffsetLeft + "px"}'>
    			<a class="slider__slide js-slide" v-for='(slide,id) in sliderList' :key="id"
            v-bind:style='"background-image: url(" + slide.img + ")"'
            :href="slide.href"/>
    		</div>
    	</div>

    	<div class='slider js-slider'>
        <transition name="slide">
      	  <i-button class="slider__button button-left" v-on:click='prevSlide' v-show="showP"/>
        </transition>
        <transition name="slide">
      	  <i-button class="slider__button button-right" v-on:click='nextSlide' v-show="showN"/>
        </transition>

        <div class="slider__body" v-bind:style='{left: sliderOffsetLeft + "px"}'>
      		<div class="slider__slide js-slide" v-for='(slide,id) in sliderList' :key="id">{{slide.content}}</div>
      	</div>
    	</div>
    </div>
  </div>
</template>

<script>
import IButton from '~/components/i-button.vue'

export default {
  components: {
    IButton,
  },
  data: () => ({
    sliderAllCount: 0,
      // Номер активного слайда
      sliderActive: 1,
      // Отступ тела со слайдами в контейнере
      sliderOffsetLeft: 0,
      // Шаг одного слайда = его длина
      sliderOffsetStep: 0,
      // Список изображений
      sliderList: [
        {
          img: require('../assets/svg/organisations/serdcebuttya.png'),
          content: 'Тут будут отзывы от компаний, Тут будут отзывы от компаний , Тут будут отзывы от компаний  Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний',
          href: 'http://www.heart.in.ua'
        },
        {
          img: require('~/assets/svg/organisations/gizznelub.png'),
          content: 'Тут будут отзывы от компаний, Тут будут отзывы от компаний , Тут будут отзывы от компаний  Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний',
          href: 'https://happyold.com.ua/ua'
        },
        {
          img: require('~/assets/svg/organisations/vidchyi.png'),
          content: 'Тут будут отзывы от компаний, Тут будут отзывы от компаний , Тут будут отзывы от компаний  Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний',
          href: 'https://vidchui.org'
        },
        {
          img: require('~/assets/svg/organisations/yapomoga.png'),
          content: 'Тут будут отзывы от компаний, Тут будут отзывы от компаний , Тут будут отзывы от компаний  Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний',
          href: ''
        },
        {
          img: require('~/assets/svg/organisations/starenki.png'),
          content: 'Тут будут отзывы от компаний, Тут будут отзывы от компаний , Тут будут отзывы от компаний  Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний',
          href: 'https://starenki.com.ua/ru/glavnaya/'
        },
        {
          img: require('~/assets/svg/organisations/osoblivi.png'),
          content: 'Тут будут отзывы от компаний, Тут будут отзывы от компаний , Тут будут отзывы от компаний  Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний Тут будут отзывы от компаний',
          href: 'https://www.facebook.com/ГОМи-особливі-мБіла-Церква-Київської-області-112843620197493/'
        },
      ],
      showP: false,
      showN: true,
  }),
	methods: {
    // Иницилизация слайдера
    initSlider: function () {
			// Получаем элементы сладера и его слайдов
      let sliderBody = this.$el.querySelector('.js-slider')
      let sliderSlidies = sliderBody.querySelectorAll('.js-slide')
			// Записываем длину одного слайда для перелистывания
      this.sliderOffsetStep = sliderBody.clientWidth
			// Общее количество слайдов для стопов
      this.sliderAllCount = sliderSlidies.length
    },

		// Открыть слайд по номеру
    openSlide: function (id) {
      if (id > 0 && id <= this.sliderAllCount) {
        this.sliderActive = id
        // Сдвигаем элемент со слайдами
        this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)

        if (this.sliderActive <= 1) {this.showP = false} else {this.showP = true}
        if (this.sliderActive >= this.sliderAllCount) {this.showN = false} else {this.showN = true}
      }
    },

    // Следующий слайд
    nextSlide: function () {
      if (this.sliderActive < this.sliderAllCount) {
        this.sliderActive += 1
        this.openSlide(this.sliderActive)
      }
    },

    // Предыдущий слайд
    prevSlide: function () {
      if (this.sliderActive > 1) {
        this.sliderActive -= 1
        this.openSlide(this.sliderActive)
      }
    }
  },

  mounted () {
    this.initSlider()

    // Перенастройка слайдера при ресайзе окна
    window.addEventListener('resize', () => {
      this.initSlider()
      this.openSlide(this.sliderActive)
    })
  }
}
</script>

<style scoped lang="scss">
  .organisations {
    height: 712px;
    width: 100%;
    border-width: 1px 0 1px;
    border-color: #000000;
    border-style: solid;
    padding: 70px 140px 190px 140px;
    background-color: #F3EFE3;

    &-content {
      display: flex;

      .slider__button {
        position: absolute;
        height: 90px;
        width: 90px;
        bottom: 20px;
        background-color: #ffffff;
        background-repeat: no-repeat;
        border: 1px solid #000000;
        border-radius: 50%;
        background-size: 44px 44px;
        background-position: center;
        z-index: 10;

        &.button-left {
          left: 30%;
          background-image: url('../assets/svg/left-arrow.svg');
        }

        &.button-right {
          right: 30%;
          background-image: url('../assets/svg/right-arrow.svg');
        }

        &:hover {
          box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);
        }
      }
    }

  }

  .slider {
  	width: 557px;
  	height: 328px;
  	position: relative;
  	overflow: hidden;
    margin-top: 100px;
  	
    &__img {
      border: 1px solid #000000;
      margin-right: 40px;

      .slider__slide {
        background-color: #ffffff;
      }
    }

  	&__body {
  		min-width: 100%;
  		height: 100%;
  		display: flex;
  		position: relative;
  		align-items: stretch;
  		transition: all .5s ease;
  	}
  	
  	&__slide {
      display: block;
  		min-width: 100%;
  		height: 100%;
  		background-size: 200px auto;
      background-repeat: no-repeat;
  		background-position: center;
  		flex: 1 100%;
      padding: 0 20px;
    }
}
.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
