<template>
<div class="referal-program">
  <div class="referal-mode">
    <h3 class="text_size-xl">Спосіб 1</h3>
    <p>Скопіюйте посилання та відправте друзям</p>
    <input v-model="referal" readonly/>
    <i-button v-clipboard="message">Скопіювати</i-button>
  </div>
  <div class="referal-mode">
    <h3 class="text_size-xl">Спосіб 2</h3>
    <p>Відправити SMS-повідомлення із запрошенням</p>
    <input placeholder="Номер телефону" type="tel"/>
    <i-button>Відправити</i-button>
  </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";


export default {
  name: 'UserDetails',
  data: () => ({
    referal: 'https://yapomoga.com/ua/user/r',
  }),
  components: {
    IButton,
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .referal-program {
    width: 100%;
    display: flex;
    justify-content: center;

    .referal-mode {
      width: 266px;
      display: flex;
      flex-flow: column;
      margin: 0 60px;

      p {
        margin-top: 14px;
      }

      .i-button {
        width: 100%;
        margin-top: 30px;
        height: 38px;
        border: none;
        background-color: var(--main_first-color);
      }

      input {
        border-width: 0px 0px 1px;
        height: 36px;
        width: 100%;
        padding: 0 5px;
        margin-top: 40px;
      }
    }
  }
</style>