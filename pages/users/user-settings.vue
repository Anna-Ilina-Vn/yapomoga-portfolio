<template>
<div class="user-profile">
  <h3 class="text_size-xl">Мій профіль</h3>
  <div class="user-profile__content">
    <div class="profile-photo">
      <user-photo />
      <i-button>Змінити фото</i-button>
      <i-button>Видалити фото</i-button>
    </div>
    <form class="profile">
      <input required v-model="firstName" type="text" placeholder="Ім’я"/>
      <input required v-model="lastName" type="text" placeholder="Прізвіще"/>
      <input required v-model="bDate" type="date" placeholder="День народження"/>
      <input required v-model="town" type="text" placeholder="Місто"/>
      <input required v-model="email" type="email" placeholder="Email або телефон"/>
      <p><a href="/recover-password" class="underline">Змінити пароль</a></p>
      <i-button>Зберегти</i-button>
    </form>
  </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";
import UserPhoto from '~/components/user-details/UserPhoto.vue'

export default {
  layout: 'user',
  name: 'UserDetails',
  data: () => ({
    firstName: "",
    lastName: "",
    bDate: "",
    town: "",
    email : "",
    password : ""
  }),
  components: {
    IButton,
    UserPhoto,
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.user-profile {
  width: 100%;
  padding: 200px 140px;

    .user-profile__content {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 50px;
    }

    .profile {
      display: flex;
      flex-direction: column;
      width: 460px;

      input {
        border-width: 0px 0px 1px;
        height: 36px;
        width: 100%;
        margin: 10px auto 20px;
        padding: 0 5px;
      }

      p {
        font-size: 14px;
      }

      .i-button {
        width: 100%;
        height: 48px;
        border: none;
        background-color: var(--main_second-color);
        margin: 30px auto 14px;
      }
    }

    .profile-photo {
      display: flex;
      flex-direction: column;
      width: 200px;
      margin-right: 100px;

      .user-photo {
        margin-bottom: 22px;
      }

      .i-button {
        border: 0;
        background-color: transparent;
        margin-bottom: 6px;
      }
    }

    .underline {
      &:hover {
        text-decoration: underline;
      }
    }
}

</style>