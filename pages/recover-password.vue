<template>
  <div class="">
      <div v-if="$auth.loggedIn" style="margin: 300px 0 0 ;">
        {{ $auth.user.email }}
        <i-button>Logout</i-button>
      </div>

    <div class="recover" v-show="status === statuses.init">
      <form @submit.prevent="login">
          <h2 class="text_size-xxl">Відновити пароль</h2>
          <p>Ми надішлемо вам електронне повідомлення, щоб відновити пароль.</p>
          <label></label>
          <input required v-model="email" type="email" placeholder="Email або телефон"/>
          <div class="recover__button">
            <i-button v-on:click="status = statuses.newPass">Підтвердити</i-button>
            <i-button to="/login">Скасувати</i-button>
          </div>
      </form>
    </div>

    <div class="recover" v-show="status === statuses.newPass">
      <form @submit.prevent="login">
          <h2 class="text_size-xxl">Введіть новий пароль</h2>
          <label></label>
          <input required v-model="password" type="password" placeholder="Пароль"/>
          <label></label>
          <input required v-model="password" type="password" placeholder="Повторити пароль"/>
          <div class="recover__button">
            <i-button>Підтвердити</i-button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import IButton from "~/components/i-button.vue"
  const recoverStatus = {
    init: 0,
    newPass: 1,
    success: 2,
    fail: 3
  }

  export default {

    layout: 'user',
    data(){
      return {
        email : "",
        password : "",
        status: recoverStatus.init,
        statuses: recoverStatus,
      }
    },
    components: {
      IButton,
    },
    methods: {
      recoverPassword(logininfo) 
      {
        debugger
        alert(logininfo)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .recover {
    max-width: 480px;
    display: flex;
    flex-direction: column;
    margin: 150px auto 160px;

    h2 {
      margin-bottom: 18px;
    }
    
    input {
      border-width: 0px 0px 1px;
      height: 36px;
      width: 100%;
      margin: 40px auto 0;
      padding: 0 5px;
    }

    .login__button {
      width: 100%;
      height: 48px;
      border: none;
      background-color: var(--main_second-color);
      margin: 30px auto 14px;
    }

    .recover__button {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .i-button {
        width: 230px;
        line-height: 48px;
        border: 1px solid #000000;
        margin: 30px 0 0;

        &:nth-child(1) {
          background-color:var(--main_second-color);
        }

        &:nth-child(2) {
          background-color:#ffffff;
        }
      }
    }
  }
</style>