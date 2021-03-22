<template>
  <div>
    <nuxt-link
      v-if="$i18n.locale !== 'ua'"
      :to="switchLocalePath('ua')"
    >
      RU
    </nuxt-link>

    <nuxt-link
      v-if="$i18n.locale !== 'ru'"
      :to="switchLocalePath('ru')"
    >
      UA
    </nuxt-link>
  </div>
</template>