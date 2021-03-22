<template>
  <div id="partners" class="partners center" v-scroll="scrollShow">
    <div class="our-partners" id="our-partners">
      <h2 class="title">Наші партнери</h2>
      <div class="partners-list">
        <a v-for="(bank, index) in banks" :key="index" :href="bank.href">
          <img :src="bank.img" :alt="bank.alt" class="partners-item"/>
        </a>
      </div>
    </div>
    <div class="talk-about-us" id="talk-about-us">
      <h2 class="title">Про нас говорять</h2>
      <div class="partners-list">
        <a v-for="(channel, index) in channels" :key="index" :href="channel.href">
          <img :src="channel.img" :alt="channel.alt" class="partners-item"/>
        </a>
      </div>
    </div>
    <div class="write-about-us" id="write-about-us">
      <h2 class="title">Про нас пишуть</h2>
      <div class="partners-list">
        <a v-for="(writer, index) in writers" :key="index" :href="writer.href">
          <img :src="writer.img" :alt="writer.alt" class="partners-item"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IButton from '~/components/i-button.vue'

export default {
  components: {
    IButton,
  },
  data: () => ({
    banks: [
      {
        img: require('~/assets/svg/partners/partners/ipayua.svg'),
        href: 'https://www.ipay.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/mastercard.svg'),
        href: 'https://www.mastercard.ua/uk-ua/personal/rewards.html',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/globus.svg'),
        href: 'https://globusbonus.globusbank.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/kredobank.svg'),
        href: 'https://kredobank.com.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/reiffeisenbank.svg'),
        href: 'https://www.aval.ua/ru',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/pivdennyibank.svg'),
        href: 'https://bank.com.ua/ru',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/otpbank.svg'),
        href: 'https://ru.otpbank.com.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/partners/themarket.svg'),
        href: 'https://themarket.ua',
        alt: ''
      },
    ],
    channels: [
      {
        img: require('~/assets/svg/partners/talk-about-us/stb.svg'),
        href: 'https://www.stb.ua/ru/',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/di.svg'),
        href: 'https://d1.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/item.svg'),
        href: 'https://4channel.com.ua/',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/1plus1.svg'),
        href: 'https://1plus1.ua/ru/1plus1video',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/2plus2.svg'),
        href: 'https://2plus2.ua/1plus1video',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/inter.svg'),
        href: 'https://inter.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/kyiv.svg'),
        href: 'https://tv.kyiv.media',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/24.svg'),
        href: 'https://innovation.24tv.ua/ru/',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/dw.svg'),
        href: 'https://www.dw.com/de/themen/s-9077',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/syogodni.svg'),
        href: 'https://ukraine.segodnya.ua',
        alt: ''
      },
    ],
    writers: [
      {
        img: require('~/assets/svg/partners/write-about-us/thevillage.svg'),
        href: 'https://www.the-village.com.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/write-about-us/mctoday.svg'),
        href: 'https://mc.today',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/write-about-us/liganet.svg'),
        href: 'https://www.liga.net',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/write-about-us/bj.svg'),
        href: 'https://bzh.life',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/write-about-us/hb.svg'),
        href: 'https://nv.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/write-about-us/nashkyiv.svg'),
        href: 'https://nashkiev.ua',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/write-about-us/ukrnet.svg'),
        href: '',
        alt: ''
      },
      {
        img: require('~/assets/svg/partners/talk-about-us/dw.svg'),
        href: '',
        alt: ''
      },
    ],
  }),
  methods: {
      scrollShow() {
        var blocks = [document.getElementById('our-partners'), document.getElementById('talk-about-us'), document.getElementById('write-about-us')]
        for (let i in blocks) {
          var height = blocks[i].offsetTop;
          if ( document.documentElement.scrollTop > (height - 500)) {
            blocks[i].classList.add('item_visible');
          }
          
        }
      },
  }
}
</script>

<style scoped lang="scss">
.partners {
  box-sizing: border-box;
  padding: 80px 110px;
}
.partners-list {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 50px auto 60px;

  .partners-item {
    margin: 50px 40px;
    opacity: 0;
  }

  a:nth-of-type(n + 1):nth-of-type(-n + 4) {
    .partners-item {
      transition: all 2s ease;
    }
  }

    a:nth-of-type(n + 5) {
    .partners-item {
      transition: all 3s ease;
    }
  }
}
.write-about-us {

  .partners-list {
    margin-bottom: 0px;
  }
}


.item_visible {
    .partners-item {
      opacity: 1;
      transform: translateY(-40px)
    }
}
</style>
