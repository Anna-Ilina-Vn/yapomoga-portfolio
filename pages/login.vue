<template>
  <div class="">
      <div v-if="$auth.loggedIn" style="margin: 300px 0 0 ;">
        {{ $auth.user.email }}
        <i-button>Logout</i-button>
      </div>

      <div v-else class="login">
        <form>
          <h2 class="text_size-xxl">Раді Вас знову бачити!</h2>
          <p>Будь ласка, заповніть дані, щоб продовжити.</p>
          <label></label>
          <input required v-model="email" type="email" placeholder="Email або телефон"/>
          <label></label>
          <input required v-model="password" type="password" placeholder="Пароль"/>
          <i-button class="login__button" v-on:click="loginUser">Увійти</i-button>
          <a href="/recover-password" class="underline">Забули пароль?</a>
        </form>

          <div class="login__footer">
            <p>або</p>
            <div class="login__button_social">
              <i-button>Увійти через Facebook</i-button>
              <i-button style="background-color:#E2504A;">Увійти через Gmail</i-button>
            </div>
            <p>Ще не маєте акаунту?
              <a href="/register">Реєструйтеся!</a>
            </p>
          </div>
      </div>
  </div>
</template>

<script>
import IButton from "~/components/i-button.vue";
import Product from '~/api/product.js';

  export default {

    layout: 'user',
    data(){
      return {
        email : "",
        password : "",
      }
    },
    components: {
      IButton,
    },
    methods: {
      loginUser(loginInfo) {
        this.$auth.loginWith('local', {
          data: loginInfo
        })
      },
      loginFacebook(loginInfo) {
        this.$auth.loginWith('facebook')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    max-width: 460px;
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
  }

  .underline {
    &:hover {
      text-decoration: underline;
    }

    text-decoration: none;
    font-size: 14px;
    float: right;
  }

  .login__footer {
    p {
      text-align: center;

      &:nth-of-type(1) {
        color: #999999;
        margin: 14px auto 0;
      }

      &:nth-of-type(2) {
        color: #999999;
        margin: 30px auto 0;
      }
    }

    a {
      color: var(--main_second-color);
    }

    .login__button_social {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .i-button {
        width: 220px;
        line-height: 48px;
        border: none;
        color: #ffffff;
        margin: 14px 0 0;

          &:first-child {
            background-color: #405993;
          }
        }
      }
  }
</style>