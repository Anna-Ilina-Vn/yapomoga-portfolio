<template>
  <div>
    <div class="products-list">
    <div v-show="loading" class="preloader preloader--relative" />
      <products-list-card
        v-for="(product, id) in products"
        :key="id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductsListCard from './ProductListCard.vue'
export default {
  name: 'ProductsList',
  components: { ProductsListCard},
  props: {
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style lang="scss">
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 1180px;
  overflow-y: scroll;
}
</style>