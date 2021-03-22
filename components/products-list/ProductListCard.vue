<template>
  <div class="product-card-wrapper" id="flipper" :class="{ 'flip-front': side, 'flip-back': side2 }">
      <div class="product-card">
        <nuxt-link
          :to="`/products/product`+`${product.slug}-${product.id}`"
        >
          <div class="product-card-content">
            <div class="product-card__title">
              {{ product.title }}
            </div>
              <div class="product-card__image">
              <picture>
                <img :src="product.images[0]" :alt="product.title">
              </picture>
            </div>
          </div>
        </nuxt-link>
        <i-button 
          class="product-card__button"
          :to='`/products/product`+`${product.slug}-${product.id}`'
          :class="{disabled : product.category === 'NxKpYov'}">
          Подарувати добро
        </i-button>
        <a @click="flipCard">Детальніше</a>
      </div>

        <div class="product-card product-back-card">
        <div class="product-card-content">
          <div class="product-card__title">
            {{ product.title }}
          </div>
          <div class="product-card__description">{{ product.description }}</div>
        </div>
        <i-button class="product-card__button"
          :to='`/products/product`+`${product.slug}-${product.id}`'
          :class="{disabled : product.category === 'NxKpYov'}">
          Подарувати добро
        </i-button>
        <a @click="flipCard">Назад</a>
      </div>
  </div>
</template>

<script>
import IButton from '~/components/i-button.vue';

export default {
  name: 'ProductsListCard',
  data:() => ({
    side: false,
    side2: true,
  }),
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    IButton,
  },
  methods: {
    flipCard: function() {
      this.side = !this.side
      this.side2 = !this.side2
    }
  }
}
</script>

<style lang="scss">
.product-card-wrapper {
  position: relative;
  width: 360px;
  height: 484px;
  margin: 0 20px 74px;

  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform-origin: right center;
}

.product-card {
  border: 1px solid black;
  border-radius: 26px;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  text-align: center;

  &__title {
    margin-bottom: 35px;
  }

  &__image {
    height: 273px;
    
    img {
      height: 100%;
    }
  }

  &__image:hover {
    transition: 2s;
    opacity: 0.6;
  }

  a:hover {
    text-shadow: 0 2px 2px lightgrey;
  }

  &__description {
    text-align: left;
  }
}
.product-back-card {
  position: absolute;
}
.product-card__button {
  width: 220px;
  line-height: 48px;
  margin: 0 auto;
  background-color: transparent;
  border: 1px solid #000000;

  &:hover {
    background-color: var(--main_first-color);
  }

  &.disabled {
    background-color: rgba(51, 51, 51, .2);
    border-color: rgba(51, 51, 51, .01);
    color: var(--white);
    cursor: no-drop;
    pointer-events: none;
  }
}

.flip-front {
  transform: translateX(-100%) rotateY(-180deg);
}

.product-card, .product-back-card {
  position: absolute;
  backface-visibility: hidden;
  }

  .product-back-card {
  transform: rotateY( -180deg );
}

.flip-back {
  transform: translateX(0%) rotateY(0deg);
}

</style>