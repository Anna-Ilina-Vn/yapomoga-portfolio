<template>
  <ol class="accordion-group">
    <slot/>
  </ol>
</template>

<script>

export default {
  name: "i-accordion",
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    };
  },
  provide() {
    return { Accordion: this.Accordion };
  }
}
</script>

<style lang="scss" scoped>
.accordion-group {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>