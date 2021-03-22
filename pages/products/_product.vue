<template>
  <div>
    <div v-show="loading" class="preloader preloader--fullpage" />
    <div class="product" :class="{ 'loading': loading }">
      <div class="product-info">
        <product-details :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Product from '~/api/product.js'
import ProductDetails from '~/components/product-details/ProductDetails.vue'

export default {
  components: { ProductDetails },
  layout: 'cases-layout',
  data () {
    return {
      product: {},
      loading: false,
    }
  },
  computed: {
    productId () {
      return this.$route.params.product.split('-').slice(-1).pop()
    },
  },
  created () {
    this.loadProduct()
  },
  methods: {
    async loadProduct () {
      this.loading = true
      this.product = await Product.get(this.productId)
      this.loading = false
    },
  },
  head () {
    return {
      title: `${this.product.title}`
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
}
.product-loading {
    opacity: 0.3;
    pointer-events: none;
}
</style>
