<template>
  <div class="filters">
    <div class="filter">
      <ul class="filter__list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="filter__item text_size-xl"
          :class="{ 'filter__item-active': $route.params.category === `${category.slug}-${category.id}` }"
        >
          <nuxt-link
            :to="`/categories/category`+`${category.slug}-${category.id}`"
          >
            {{ category.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductsListFilter',
  data: () => ({
    sslug: 'currents',
  }),
  computed: {
    ...mapState({
      categories: state => state.filters.categories
    })
  },
  created () {
    if (!this.categories) {
      this.$store.dispatch('filters/fetchCategories')
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  &__list {
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
  }

  &__item {
    margin: 50px 54px 10px;
  }

  .filter__item{
    .nuxt-link-active {
      opacity: 0.5;
    }
  }
}
</style>