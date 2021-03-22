<template>
  <footer class="footer-contacts">
    <div id="contacts" class="contacts">
      <div class="contacts__item contacts__nav">
        <NavLinks class="contacts__nav-links"/>
      </div>

      <div class="contacts__item contacts__links">
        <label class="contacts__link">
          <img class="contacts__icon" src="~/assets/svg/icons/phone.svg" alt="">
          <a href="tel:0 800 60 11 60">0 800 60 11 60</a>
          <p class="text_size-s">Безкоштовно з мобільних</p>
        </label>

        <label class="contacts__link">
          <img class="contacts__icon" src="~/assets/svg/icons/phone.svg" alt="">
          <a href="tel:+38 044 502 11 60">+38 044 502 11 60</a>
          <p class="text_size-s">Для міжнародних дзвінків</p>
        </label>

        <label class="contacts__link">
          <img class="contacts__icon" src="~/assets/svg/icons/phone.svg" alt="">
          <a href="mailto:support@yapomoga.com">support@yapomoga.com</a>
        </label>
      </div>

      <form class="contacts__item contacts__subsc" action="POST">
        <fieldset>
          <legend class="text_size-m center">Підписатися на розсилку</legend>
          <input type="email" placeholder="Ваш email">
          <i-button>Підписатися</i-button>
        </fieldset>
      </form>
    </div>

    <div class="footer">
      <p class="footer__item text_size-s">2018 Япомога. Всі права захищені</p>

      <div class="footer__item social">
        <img src="~/assets/svg/icons/facebook.svg" alt="">
        <img src="~/assets/svg/icons/instagram.svg" alt="">
        <img src="~/assets/svg/icons/youtube.svg" alt="">
        <img src="~/assets/svg/icons/telegram.svg" alt="">
      </div>

      <img class="footer__item" style="height: 46px;" src="~/assets/svg/footer.svg" alt="">
    </div>
  </footer>
</template>

<script>
import IButton from './i-button.vue';
import NavLinks from './Nav-links.vue';

export default {
  name: 'i-footer',
  components: {
    IButton,
    NavLinks,
  },
};
</script>

<style>
.contacts, .contacts a {
  color: #000000;
}

.contacts__nav-links .nav__link {
  margin-right: 100px;
}
</style>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 0 130px;
}
.contacts__item {
  flex: 0 1 0;
  margin: 120px 10px 70px;
}
.contacts__nav-links {
  display: flex;
  flex-flow: column wrap;
  height: 200px;
  margin-right: 100px;
}
.contacts__links {
  flex: 0 1 220px;

  .text_size-s {
    margin-left: 28px;
  }

  .contacts__icon {
    margin: 0 10px 0 0;
  }
}
.contacts__link:not(:last-child) {
  display: block;
  margin-bottom: 20px;
}
.contacts__subsc {

  input {
    width: 260px;
    height: 40px;
    border: 1px solid #000000;
    border-radius: 30px;
    padding: 8px 20px;
    margin-bottom: 10px;

    &::placeholder {
      color: lightgrey;
    }
  }
  
  legend {
    margin-bottom: 30px;
  }

  .i-button {
    width: 260px;
    line-height: 40px;
    padding: 0;
    background-color: var(--main_second-color);
    border: none;
  }
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
  padding: 20px 10px;

  .text_size-s {
    color: lightgrey;
  }

  .footer__item {
    flex: 0 1 250px;
  }
}
.social {
  display: flex;
  justify-content: space-around;

  img:not(:last-child) {
    margin-right: 40px;
  }
}
</style>
