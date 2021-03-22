<template>
  <div class='common-list'>
    <products-list-filter v-show="show"/>
    <products-list :loading="productsLoading" :products="products" />
  </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
import ProductsListFilter from './ProductsListFilter.vue'
export default {
  name: 'CommonProductsListPage',
  components: { ProductsListFilter, ProductsList },
  props: {
    loadProducts: {
      type: Function,
      required: true
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      products: [],
      productsLoading: false
    }
  },
  async created () {
    this.productsLoading = true
    this.products = await this.loadProducts()
    this.productsLoading = false
    this.$emit('casesLength', this.products.length)
  },
}
</script>


<style lang="scss">
  .common-list {
    margin: 150px 80px 0;
    border: 2px solid #000000;
    overflow: hidden;
  }
</style>