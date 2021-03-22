<template>
  <li class="accordion__item">
    <div 
      class="accordion__trigger"
      :class="{'accordion__trigger_active': visible}"
      @click="open">
      <slot name="accordionTrigger"></slot>
    </div>
    <transition name='fade' mode="out-in">
    <div class="accordion__content"
      v-show="visible">
        <ul>
          <slot name="accordionContent"></slot>
        </ul>
    </div>
    </transition>
  </li>
</template>

<script>
export default {
  name: "i-accordion-item",
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
 
}
</script>

<style lang="scss" scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  transition: all .3s ease;
}
.fade-enter-active {
  transition: opacity .8s;
}
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>