<script setup lang="ts">
import type { categoriesType } from '@/types/categories'
import RightArrow from '@/assets/images/RightArrow.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const activeCategory = computed(() => store.state.categorieActive)
const todosQuantityUrgent = computed(() => store.state.todosQuantityUrgent)
const todosQuantityImportant = computed(() => store.state.todosQuantityImportant)
const changeCategory = (payload: string) => store.dispatch('changeCategory', payload)

// objeto que vai construir as opcoes do menu
const allCategories = computed<categoriesType[]>(() => [
  {
    name: 'Todas',
    quantity: null,
    color: null
  },
  {
    name: 'Urgentes',
    quantity: todosQuantityUrgent.value,
    color: 'error'
  },
  {
    name: 'Importantes',
    quantity: todosQuantityImportant.value,
    color: 'alert'
  },
  {
    name: 'Outras',
    quantity: null,
    color: null
  },
  {
    name: 'Finalizadas',
    quantity: null,
    color: null
  }
])
// funçao para alterar categoria
function onChangeCategory(category: string) {
  console.log('category', category)
  changeCategory(category)
}
</script>
<template>
  <div class="container-lateral">
    <h2 class="categories-text">Categorias</h2>
    <div class="categories" v-for="categories in allCategories" :key="categories.name">
      <RightArrow
        class="right-arrow-active"
        :color="activeCategory === categories.name ? '#2693FF' : '#283848'"
      />
      <p
        @click="onChangeCategory(categories.name)"
        :class="activeCategory === categories.name ? 'categories-name-active' : 'categories-name'"
      >
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
  height: calc(100vh - 83px)
  background: #F4FBFF
  box-shadow: 0px 1px 10px 0px rgba(40, 56, 72, 0.06)
  display: flex
  flex-direction: column
  justify-content: center
  padding-left: 41px
  @media (max-width: 768px)
    width: 180px
    padding-left: 8px
  @media (max-width: 530px)
    display: none

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
