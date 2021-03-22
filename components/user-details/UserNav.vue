<template>
<div class="user-nav">
  <div>
    <i-button v-on:click="isActive = !isActive">
      <div class="user-nav__burger" :class="{ 'active': isActive}">
        <span></span>
      </div>
      <p>123</p>
      <user-photo width="30px" height="30px"/>
    </i-button>
    <transition name="menu">
    <div class="user-nav__menu" v-if="isActive" :class="{ 'hidden': !isActive}">
      <ul class="nav__list">
        <li class="nav__link"><a href="/users/user-details">Профіль</a></li>
        <li class="nav__link"><a href="/users/user-settings">Змінити налаштування</a></li>
        <li class="nav__link logout"><a href="/login" @click="logout">Вихід</a></li>
      </ul>
    </div>
    </transition>
  </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";
import UserPhoto from '~/components/user-details/UserPhoto.vue'


export default {
  name: 'UserNav',
  data: () => ({
    isActive: false,
  }),
  components: {
    IButton,
    UserPhoto,
  },
  methods: {
    logout: function() {
      this.$emit('logout')
    }
  }
}
</script>

<style scoped lang="scss">
  .user-nav {
  position: relative;
  z-index: 10;

    .i-button {
      width: 132px;
      height: 36px;
      background-color: #F5E769;
      border: none;
      padding: 0 14px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-nav__burger {
        position: relative;
        width: 30px;

        span,
        span::before,
        span::after {
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          top: -6px;
          background-color: #000000;

          transition: width 0.8s;
        }

        span::before {
          content: '';
          top: 6px;
          width: 22px;
        }

        span::after {
          content: '';
          top: 12px;
          width: 14px;
        }

        &.active {
          span {width: 14px;}
          span::before {width: 22px;}
          span::after {width: 30px;}
        }
      }
    }

    .user-nav__menu {
      position: absolute;
      min-width: 233px;
      padding: 30px 20px;
      top: 46px;
      right: 0;
      background-color: #ffffff;
      border-radius: 20px;
      box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.15);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

      .nav__list {
        display: flex;
        flex-flow: column nowrap;

        a {
          color: #000000;
        }

        .logout a {
          color: #E43122;
        }
      }
    }
      .menu-enter-active, .menu-leave-active {
        transition: all 0.2s;
        opacity: 1;
      }
      .menu-enter, .menu-leave-to {
        opacity: 0;
      }
  }
</style>