<script setup lang="ts">
import type { categoriesType } from '@/types/categories'
import RightArrow from '@/assets/images/RightArrow.vue'
const allCategories: categoriesType[] = [
  {
    name: 'Todas',
    quantity: null,
    color: null,
    active: true
  },
  {
    name: 'Urgentes',
    quantity: 1,
    color: 'error',
    active: false
  },
  {
    name: 'Importantes',
    quantity: 2,
    color: 'alert',
    active: false
  },
  {
    name: 'Outras',
    quantity: null,
    color: null,
    active: false
  },
  {
    name: 'Finalizadas',
    quantity: null,
    color: null,
    active: false
  }
]
</script>
<template>
  <div class="container-lateral">
    <h2 class="categories-text">Categorias</h2>
    <div class="categories" v-for="categories in allCategories" :key="categories.name">
      <RightArrow class="right-arrow-active" :color="categories?.active ? '#2693FF' : '#283848'" />
      <p :class="categories.active ? 'categories-name-active' : 'categories-name'">
        {{ categories.name }}
      </p>
      <div
        :class="['quantity-circle', categories.color + '-color']"
        v-if="categories?.quantity || (categories?.quantity as number) > 0"
      >
        {{ categories?.quantity }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.container-lateral
  width: 227px
  height: 100%
  background: #F4FBFF
  box-shadow: 0px 1px 10px 0px rgba(40, 56, 72, 0.06)
  display: flex
  flex-direction: column
  justify-content: center
  padding-left: 41px

.categories-text
  color: #4E5F70
  font-size: 17px
  font-weight: 700
  margin-bottom: 52px

.categories
  display: flex
  align-items: center
  gap: 10px
  margin-bottom: 15px

.right-arrow-active
  color: $primary-color

.categories-name
  color: $text-bold
  font-size: 15px
  font-weight: 600
  cursor: pointer
  &:hover
    color: $primary-color
    font-weight: 700

.categories-name-active
  color: $primary-color
  font-size: 15px
  font-weight: 700
  cursor: pointer


.quantity-circle
  width: 20px
  height: 20px
  border-radius: 100%
  display: flex
  align-items: center
  justify-content: center
  color: white
  font-size: 11px
  font-weight: 700
</style>
