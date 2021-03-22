<template>
  <div>
    <i-header :isLight="true" />
    <main>
      <nuxt />
    </main>
    
    <i-footer />
  </div>
</template>

<script>
import NavLinks from '~/components/Nav-links.vue';
import LangSwitcher from '~/components/lang-switcher.vue'
import IHeader from '~/components/i-header.vue';
import IFooter from '~/components/i-footer.vue';
import IButton from '~/components/i-button.vue'

export default {
  components: {
    NavLinks,
    LangSwitcher,
    IHeader,
    IFooter,
    IButton,
  },
  computed: {
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    },
  },
}
</script>