<template>
<div class="user-photo" :style="{width: width, height: height}">
  <img src="~/assets/img/user-default.png" alt="">
</div>
</template>

<script>


export default {
  name: 'UserPhoto',
  data: () => ({
  }),
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
  },
  components: {
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.user-photo {

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>