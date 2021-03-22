<template>
<div class="user-details">
  <!--  <div v-if="$auth.loggedIn">
    {{ $auth.user.email }}
    <i-button>Logout</i-button>
    <h1>Account</h1>
    Name: {{user.name}}<br>
    Email: {{user.email}}<br>
    <hr>
  </div>-->
  <div class="user-details__content">
    <div class="user-details__title">
      <span>
        <h3 class="text_size-xl">Історія добрих справ</h3>
       <a href="#user-details">
       <i-button v-on:click="open = openCard.history"/>
       </a>
      </span>
      <span>
        <h3 class="text_size-xl">Рейтинг Япомога</h3>
        <a href="#user-details">
        <i-button v-on:click="open = openCard.rate"/>
        </a>
      </span>
      <span>
        <h3 class="text_size-xl">Реферальна програма</h3>
        <a href="#user-details">
        <i-button v-on:click="open = openCard.referal"/>
        </a>
      </span>
    </div>
    <div class="user-details__body" id="user-details">
      <user-history v-if="open === openCard.history"></user-history>
      
      <rate-list v-if="open === openCard.rate"></rate-list>

      <referal-program v-if="open === openCard.referal"></referal-program>
    </div>

  </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";
import IAccordion from '~/components/accordion/i-accordion.vue';
import IAccordionItem from '~/components/accordion/i-accordion-item.vue';
import UserHistory from '~/components/user-details/UserHistory.vue';
import RateList from '~/components/user-details/RateList.vue';
import ReferalProgram from '~/components/user-details/ReferalProgram.vue';

  const card = {
    init: 0,
    history: 1,
    rate: 2,
    referal: 3,
  }

export default {
  layout: 'user',
  name: 'UserDetails',
  data: () => ({
    open: card.init,
    openCard: card,
  }),
  components: {
    IButton,
    IAccordion,
    IAccordionItem,
    UserHistory,
    RateList,
    ReferalProgram
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.user-details {
  width: 100%;
  padding: 230px 140px;

  .user-details__title {
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      width: 360px;
      height: 273px;
      border: 1px solid black;
      box-shadow: 6px 6px 4px 0px rgba(0, 0, 0, 0.15);
      text-align: center;
      padding: 40px 0;
      
      &:nth-of-type(1) {
        background-color: #C1E5FC;
      }

      &:nth-of-type(2) {
        background-color: #F3EFE3;
      }

      &:nth-of-type(3) {
        background-color: #FCE972;
      }

      .i-button {
        width: 75px;
        height: 75px;
        border: 1px solid black;
        background-color: transparent;
        background-repeat: no-repeat;
        border-radius: 50%;
        background-size: 40px 40px;
        background-position: center;
        background-image: url('../../assets/svg/down-arrow.svg');
      }
    }
  }

  .user-details__body {
    padding-top: 200px;
    width: 100%;
  }
}

</style>