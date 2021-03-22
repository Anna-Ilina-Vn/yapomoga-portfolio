<script>
export default {
  name: 'i-button',

  props: {
    type: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() {
      return this.$attrs.to ? 'nuxt-link' : 'button';
    },
  },
};
</script>

<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :disabled="disabled"
    class="i-button text_size-m center"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.i-button {
  border-radius: 33px;
  min-width: 40px;
  font-weight: 500;
  outline: none;
  text-decoration: none;
  display: inline-block;
  font-family: "Rubik", sans-serif;
  cursor: pointer;

  &:disabled, &.disabled {
    background-color: rgba(51, 51, 51, .2);
    border-color: rgba(51, 51, 51, .01);
    color: var(--white);
    cursor: no-drop;
    pointer-events: none;
  }
}
</style>
