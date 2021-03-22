<template>
<div class="user-history">
  <div class="user-history__result">
    <div>
      <img src="~/assets/svg/icon-1.svg"/>
      <p>Віддано бонусів на добрі справи</p>
      <span>30</span>
    </div>

    <div>
      <img src="~/assets/svg/icon-2.svg"/>
      <p>Запрошено друзів</p>
      <span>100</span>
    </div>

    <div>
      <img src="~/assets/svg/icon-3.svg"/>
      <p>Відкрито нашивок</p>
      <span>12</span>
    </div>
  </div>

  <div class="result-table">
    <div class="row text_size-l">
      <div>Назва</div>
      <div>Дата</div>
      <div>Бонусів добра</div>
      <div>Повторити добро</div>
    </div>
    <div class="row" v-for="(result, index) in results" :key="index">
      <div>{{result.title}}</div>
      <div>{{result.date}}</div>
      <div>{{result.sum}}</div>
      <div><a>Подарувати добро</a></div>
    </div>
    <div class="row">
    </div>
    <div class="row">
    </div>
  </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";


export default {
  name: 'UserDetails',
  data: () => ({
    results: [{
      title: 'Старенькі',
      date: '10.02.21',
      sum: '100'
    },
    {
      title: 'Старенькі',
      date: '10.02.21',
      sum: '200'
    },
    ]
  }),
  components: {
    IButton,
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .user-history {

    .user-history__result {
      display: flex;
      justify-content: space-between;
      align-content: center;

      div {
        width: 260px;
        height: 130px;

        display: flex;
        flex-flow: row wrap;

        p {
          width: 140px;
          align-self: center;
          margin: 10px 17px;
        }

        span {
          flex: 0 0 260px;
          text-align: center;
          font-size: 48px;
          color: var(--main_second-color);
        }
      }
    }

    .result-table {
      width: 100%;
      margin-top: 85px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        margin: 20px 0;
        border-bottom: 1px solid black;

        &:not(:first-child) {
          font-size: 14px;
        }

        div:not(:last-child) {
          width: 230px;
        }

        a {
          color: var(--main_second-color)
        }
      }
    }
  }
</style>