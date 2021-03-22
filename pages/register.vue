<template>
  <div class="">
    <div class="">

    <div v-if="$auth.loggedIn">
      {{ $auth.user.email }}
      <i-button>Logout</i-button>
    </div>

      <div v-else class="register">
        <form @submit.prevent="login">
          <h2 class="text_size-xxl">Вітаємо у нашій команді, добродію!</h2>
          <p>Створивши обліковий запис у нашому магазині, ви зможете швидше пройти процес оформлення замовлення під час наступних відвідувань, переглядати та відстежувати свої замовлення у своєму обліковому записі та час від часу отримувати наші оновлення новин.</p>
          <input required v-model="firstName" type="text" placeholder="Ім’я"/>
          <input required v-model="lastName" type="text" placeholder="Прізвіще"/>
          <input required v-model="email" type="email" placeholder="Email або телефон"/>
          <input required v-model="password" type="password" placeholder="Пароль"/>
          <input required v-model="password" type="password" placeholder="Повтор пароля"/>
          <i-button class="login__button">Зареєструватися</i-button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import IButton from "~/components/i-button.vue"

  export default {

    layout: 'user',
    data(){
      return {
        firstName: "",
        lastName: "",
        email : "",
        password : ""
      }
    },
    components: {
      IButton,
    }
  }
</script>

<style lang="scss">
.register {
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
      margin: 30px auto 0;
    }
  }
</style>