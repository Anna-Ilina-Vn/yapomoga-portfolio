<template>
<div class="product-details">
  <div class="product-details__wrapper">
    <div class="product-gallery">
      <picture>
        <img :src="product.images" :alt="product.title">
      </picture>
    </div>
    <div v-show="status === statuses.init" class="product-details__content">
      <h2 class="text_size-xxl">Ура, зустрічайте {{ product.title }}</h2>
      <div class="product-card__description">
        {{ product.full_description }}
      </div>

      <i-button v-if="this.product.amount == this.product.collected">Подивитися звіт</i-button>

      <div  v-else class="product-details__button">
        <i-button @click="payDonation('bonus')">Подаруй добро бонусами</i-button>
        <i-button @click="payDonation('money')">Подаруй добро грошима</i-button>
      </div>
    </div>

    <div  v-show="status === statuses.type.bonus || status === statuses.type.money" class="pay-details__content">
      <h2 class="text_size-xxl">Допоможи разом з iPay.ua і Япомога!</h2>

      <div v-show="status === statuses.type.bonus">
        <input type="text" v-model="donation" id="sumBonus">
        <label for="sumBonus">
          <p class="currency">бонусів</p>
          Доступно 122 бонусів
        </label>
      </div>

      <div v-show="status === statuses.type.money">
        <input type="text" v-model="donation" id="sumMoney">
        <label for="sumMoney">
          <p class="currency">грн</p>
          Введіть власну суму
        </label>
      </div>

      <i-button class="pay-details__button" v-on:click="status = statuses.creation">Перерахувати</i-button>
      <i-button class="pay-details__button" v-on:click="failDonation">Скасувати</i-button>
    </div>


    <div  v-show="status === statuses.creation" class="pay-details__content_success">
      <h2 class="text_size-xxl">Дякуємо за Добру Справу!</h2>

      <p>Ви перевели <span style="color: var(--main_second-color); font-size: 24px">{{donation}}</span> {{donated}}.</p>
      <p>Бажаєте поділитися цим у <a style="color: #405993">facebook</a> або <a style="color: #E2504A">instagram</a>?</p>

      <i-button class="pay-details__button" v-on:click="transferDonation">Допомагати кожного місяця</i-button>
    </div>
  </div>

    <div class="progress-bar__container">
      <div class="progress-bar__line">
        <div class="progress-bar" :style='{width: (this.product.collected*100/this.product.amount) + "%"}'></div>
      </div>

      <div v-if="this.product.amount == this.product.collected" class="center">
        <p>Проект завершено, зібрано {{this.product.amount}}!</p>
      </div>

      <div  v-else class="progress-bar__value">
        <p>Зібрано {{this.product.collected}}</p>
        <p class="text_size-xs">1 Бонус Добра = 10 коп.</p>
        <p>Потрібно {{this.product.amount}}</p>
      </div>
    </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";

  const payStatus = {
    init: 0,
    type: {
      money: 1,
      bonus: 2,
    },
    creation: 3,
    success: 4,
    fail: 5
  }

export default {
  name: 'ProductDetails',

  data:() => ({
    payDetails: false,
    status: payStatus.init,
    statuses: payStatus,
    initDonate: '100',
    donation: '',
    donated: ''
  }),
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  components: {
    IButton,
  },
  mounted: function() {
    this.donation = this.initDonate
  },
  methods: {
    payDonation: function(value) {
      if (value=="bonus") {
        this.status = payStatus.type.bonus
        this.donated = ' Бонусів Добра'
      }
      else {
        this.status = payStatus.type.money
        this.donated = ' Гривень Добра'
      }
    },
    failDonation: function() {
      this.status = payStatus.init
      this.donation = this.initDonate
    },
    transferDonation: function() {
      this.status = payStatus.init
      this.donation = this.initDonate
    }
  },
}
</script>

<style scoped lang="scss">
.product-details {
    padding: 20px 240px 0 140px;
    width: 100vw;

  .product-details__wrapper {
    display: flex;
    justify-content: space-between;
    min-height: 520px;
  }

.product-gallery {

  img {
    width: 360px;
  }
}

.product-details__content {
    margin: 35px 0;

    .i-button {
      width: 220px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #000000;
      
      &:hover {
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .product-card__description {
    width: 550px;
    margin: 60px 0 80px;
  }

  .product-details__button {
    display: flex;

    .i-button {
      margin: 0 20px;

      &:first-child:hover {
        background-color: var(--main_second-color);
      }

      &:last-child:hover {
        background-color: #63D483;
      }
    }
  }
}

.progress-bar__container {
  width: 100%;
  margin: 40px auto;

  .progress-bar__line {
    width: 100%;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    margin: 10px auto;
  }

  .progress-bar {
    height: 100%;
    background-color: #63D483;
    border-radius: 30px;
  }

  .progress-bar__value {
    display: flex;
    justify-content: space-between;
  }
}

  .pay-details__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 35px 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 85px;
    }

    input {
      width: 220px;
      height: 38px;
      border-radius: 10px;
      background-color: transparent;
      border: 1px solid #000000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      padding: 0 55% 0 20px;
      text-align: right;
      position: relative;
    }

    label {
      font-size: 14px;
      position: relative;
      }

      .currency {
        position: absolute;
        left: 63px;
        top: -31px;
      }
    }

  .pay-details__button {
    width: 260px;
    height: 48px;
    border-radius: 12px;
    background-color: transparent;
    border: 1px solid #000000;
    margin-top: 24px;

    &:hover {
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    }

    &:first-of-type {
      background-color: var(--main_first-color);
    }
  }

  .pay-details__content_success {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 85px;

      h2  {
        margin-bottom: 40px;
      }
      
      .pay-details__button {
        border-radius: 26px;
        margin-top: 80px;
      }
  }
</style>