<template>
  <div class="cases-page">
    <div class="cases-container">
      <common-products-list-page :load-products="loadProducts" />
    </div>
  </div>
</template>

<script>
import CommonProductsListPage from '~/components/products-list/CommonProductsListPage.vue'
import Product from '~/api/product.js'
export default {
  layout: 'cases-layout',
  components: { CommonProductsListPage },
  methods: {
    async loadProducts () {
      return await Product.list()
    }
  }
}
</script>

<style lang="scss">
</style>