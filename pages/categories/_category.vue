<template>
  <common-products-list-page :load-products="loadProducts" />
</template>

<script>
import CommonProductsListPage from '~/components/products-list/CommonProductsListPage.vue';
import Product from '~/api/product.js';

export default {
  layout: 'cases-layout',
  components: { CommonProductsListPage },
  computed: {
    categoryId () {
      return this.$route.params.category.split('-').slice(-1).pop()
    }
  },
  methods: {
    async loadProducts () {
      const filter = {
        category: this.categoryId
      }
      return await Product.list(filter)
    }
  }
}
</script>