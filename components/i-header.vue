<template>
  <div>
    <header class="header" :class="[isLight ? 'header-light' : 'header-dark' ]" id="myNav" v-scroll="shrinkNav">
      <a href="/"> <div class="header-logo">
        <svg class="header-logo__img" width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M123.7 46.5C123.4 46.7 123.2 46.9 123 47.1C122.8 47.3 122.5 47.4 122.2 47.6C121.9 47.8 121.5 47.9 121.2 48C120.9 48.1 120.4 48.1 119.9 48.1C118.8 48.1 118 47.7 117.3 47C116.6 46.3 116.2 45.4 116.2 44.3C116.2 43.4 116.4 42.7 116.7 42.1C117.1 41.5 117.6 41.1 118.2 40.8C118.9 40.5 119.7 40.2 120.6 40.1C121.5 40 122.5 39.9 123.6 39.8V39.7C123.6 39 123.4 38.6 122.9 38.3C122.4 38 121.7 37.9 120.7 37.9C120.3 37.9 119.7 38 119.2 38.1C118.6 38.3 118 38.5 117.5 38.7H117.2V36C117.6 35.9 118.2 35.8 119 35.6C119.8 35.5 120.7 35.4 121.5 35.4C123.6 35.4 125.1 35.7 126 36.4C126.9 37.1 127.4 38.1 127.4 39.6V47.8H123.6V46.5H123.7ZM123.7 44.7V42.2C123.1 42.3 122.6 42.3 122.2 42.4C121.8 42.4 121.4 42.5 121.1 42.7C120.8 42.8 120.5 43 120.3 43.2C120.1 43.4 120 43.7 120 44.1C120 44.7 120.2 45.1 120.4 45.3C120.7 45.5 121.1 45.6 121.7 45.6C122 45.6 122.4 45.5 122.7 45.4C123.1 45.1 123.4 44.9 123.7 44.7ZM115.5 38.4H109.8V47.8H106V35.8H115.4V38.4H115.5ZM100.3 41.8C100.3 41.1 100.2 40.5 100.1 40C100 39.5 99.8 39.1 99.6 38.9C99.4 38.6 99.1 38.4 98.8 38.3C98.5 38.2 98.2 38.1 97.8 38.1C97.5 38.1 97.2 38.2 96.9 38.3C96.6 38.4 96.4 38.6 96.1 38.9C95.9 39.2 95.7 39.6 95.6 40C95.5 40.5 95.4 41.1 95.4 41.8C95.4 42.5 95.5 43.1 95.6 43.6C95.7 44.1 95.9 44.4 96.1 44.7C96.3 45 96.5 45.2 96.9 45.3C97.2 45.4 97.5 45.5 97.9 45.5C98.2 45.5 98.5 45.4 98.8 45.3C99.1 45.2 99.4 45 99.5 44.7C99.7 44.4 99.9 44 100 43.6C100.2 43.2 100.3 42.6 100.3 41.8ZM104.1 41.8C104.1 43.8 103.6 45.3 102.5 46.5C101.4 47.6 99.9 48.2 97.9 48.2C95.9 48.2 94.4 47.6 93.3 46.5C92.2 45.4 91.7 43.8 91.7 41.8C91.7 39.8 92.2 38.2 93.3 37.1C94.4 36 95.9 35.4 97.9 35.4C99.9 35.4 101.4 36 102.5 37.1C103.6 38.3 104.1 39.8 104.1 41.8ZM89.7 47.8H86V40.2L83.5 45.2H82L79.5 40.2V47.8H76V35.8H80L82.8 41.4L85.6 35.8H89.7V47.8ZM70.1 41.8C70.1 41.1 70 40.5 69.9 40C69.8 39.5 69.6 39.1 69.4 38.9C69.2 38.6 68.9 38.4 68.6 38.3C68.3 38.2 68 38.1 67.6 38.1C67.3 38.1 67 38.2 66.7 38.3C66.4 38.4 66.2 38.6 65.9 38.9C65.7 39.2 65.5 39.6 65.4 40C65.3 40.5 65.2 41.1 65.2 41.8C65.2 42.5 65.3 43.1 65.4 43.6C65.5 44.1 65.7 44.4 65.9 44.7C66.1 45 66.3 45.2 66.7 45.3C67 45.4 67.3 45.5 67.7 45.5C68 45.5 68.3 45.4 68.6 45.3C68.9 45.2 69.2 45 69.3 44.7C69.5 44.4 69.7 44 69.8 43.6C70.1 43.2 70.1 42.6 70.1 41.8ZM74 41.8C74 43.8 73.5 45.3 72.4 46.5C71.3 47.6 69.8 48.2 67.8 48.2C65.8 48.2 64.3 47.6 63.2 46.5C62.1 45.4 61.6 43.8 61.6 41.8C61.6 39.8 62.1 38.2 63.2 37.1C64.3 36 65.8 35.4 67.8 35.4C69.8 35.4 71.3 36 72.4 37.1C73.4 38.3 74 39.8 74 41.8ZM59.6 47.8H55.8V38.4H52V47.8H48.2V35.8H59.5V47.8H59.6Z"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1 29.8C42 25.6 45.1 23.6 47.3 23.3C48 23.2 48.7 23.2 49.5 23.3C51.4 23.8 51.7 24.6 51.1 25.6C49.7 27.2 48.3 29 47.2 30.9C46.5 32.1 45.8 33.8 45.6 37.3C45.5 40.9 43.9 43.6 41.1 45.8V29.8ZM35.7 48.5C33.3 49 31.1 48.9 29 48L33.6 40.9H35.6V48.5H35.7ZM24.5 45.2L28.1 39.9C26.8 39.3 25.7 38.5 25 37.4C24.3 36.3 23.9 34.9 23.9 33.2C23.9 32 24.1 31 24.6 30.2C25.1 29.3 25.7 28.6 26.5 28.1C27.2 27.6 28 27.3 28.9 27C29.8 26.8 30.9 26.7 32.2 26.7H37.4C37.3 26.2 37.2 25.6 37.2 25C36.6 21.3 35.5 16.7 34.6 11.1C34.1 8.3 30.1 7.9 30.1 11.3C30.1 12.7 30.4 14.1 30.6 15.4C30.9 17.5 30.9 19.7 30.7 22C30.1 24.4 27.4 19.4 27.2 18.9C25.5 16 24.2 12.4 22.3 11.3C20.8 10.6 18.9 11.8 19.3 14C19.4 14.8 21 17.5 22.6 20.6C23.4 22.2 24.2 24 24.9 25.5C25.2 26.5 24.8 26.6 24.2 26.4C21 24.5 18.5 21.7 15.1 18.8C13.5 17.4 10.7 20 12.1 21.9C14.6 25.1 17.8 27.3 20.5 29.9C22 31.3 21.3 32.4 19.1 32C16.4 31.4 13.8 30.1 11.1 28.8C10.7 28.6 10.3 28.6 9.90001 28.8C8.80001 29.2 8.70001 30.4 8.90001 31.6C9.10001 32.5 9.80001 33.1 10.7 33.5C12.6 34.3 14.4 34.9 16.3 36C17.7 36.8 19.5 38.4 20.3 39.7C21.3 41.4 22.1 43.1 23.3 44.3C23.9 44.6 24.2 44.9 24.5 45.2ZM35.7 36.9H34C33.2 36.9 32.5 36.9 32 36.8C31.5 36.7 31.1 36.5 30.7 36.2C30.4 35.9 30.1 35.6 29.9 35.2C29.7 34.8 29.6 34.3 29.6 33.8C29.6 33.3 29.7 32.8 29.9 32.4C30.1 32 30.3 31.7 30.7 31.4C31.1 31.1 31.6 30.9 32 30.8C32.5 30.7 33.1 30.7 34 30.7H35.8V36.9H35.7Z"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="140" height="70" fill="white"/>
        </clipPath>
        </defs>
        </svg>
      </div>
      </a>

      <NavLinks/>

      <user-nav v-if="logIn" ></user-nav>

      <div class="custom" v-else>
        <lang-switcher />
        <nuxt-link to="/login">
          <i-button class="enter__button text_size-m" >Вхід</i-button>
        </nuxt-link>
      </div>

      <div class="progress-container">
        <div class="progress-bar" id="myBar" v-scroll="scrollIndicator"></div>
      </div>
    </header>
  </div>
</template>

<script>
import NavLinks from '~/components/Nav-links.vue';
import LangSwitcher from '~/components/lang-switcher.vue'
import IButton from '~/components/i-button.vue'
import UserNav from '~/components/user-details/UserNav.vue'

export default {
  components: {
    NavLinks,
    LangSwitcher,
    IButton,
    UserNav,
  },
  data: () => ({
    logIn: true,
  }),
  props: {
    isLight: false,
  },
  methods: {
      shrinkNav() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
        var nav = document.getElementById('myNav')
        if(scrollPosition >= 100) {
          nav.classList.add('shrink');
        } else {
          nav.classList.remove('shrink');
        }
      },

      scrollIndicator() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
      }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  z-index: 15;

  transition: all 1s;
}
.header-logo {
  width: 150px;
  background-color: transparent;
}
.progress-container {
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: transparent;
}
.progress-bar {
  height: 2px;
  background: #000000;
  width: 0;
}
.custom {
  width: 200px;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.enter__button {
  width: 132px;
  line-height: 36px;
  padding: 0;
  background-color: var(--main_first-color);
  border: none;
}
</style>
<style lang="scss">
.header-dark {
    a {
      color: #ffffff;
    }
    background-color: transparent;

  .header-logo {
    path {
      fill: #ffffff;
    }
  }
}

.shrink {
    background-color: #ffffff;

    a {
      color: #000000;
    }

    .header-logo {
      path {
        fill: var(--main_second-color);
      }
  }
}

.header-light {
  background-color: #ffffff;

  a {
    color: #000000;
  }

  .header-logo {
    path {
      fill: var(--main_second-color);
    }
  }

}
</style>
