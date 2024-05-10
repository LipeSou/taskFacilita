<script setup lang="ts">
import CheckedIcon from '@/assets/images/CheckedIcon.vue'
import { useStore } from 'vuex'

const props = defineProps<{
  id: number
  completed: Boolean
}>()

const store = useStore()

const checkedTodo = (payload: { id: number; completed: boolean }) =>
  store.dispatch('checkedTodo', payload)

function checkedTask() {
  checkedTodo({
    id: props.id,
    completed: !props.completed
  })
}
</script>

<template>
  <div @click="checkedTask" :class="completed ? 'checkbox-completed' : 'checkbox'">
    <CheckedIcon v-if="completed" />
  </div>
</template>

<style scoped lang="stylus">
.checkbox
  width: 33px
  height: 32px
  border-radius: 3px
  background: #E2EEF5
  cursor: pointer

.checkbox-completed
  width: 33px
  height: 32px
  border-radius: 3px
  background-color: rgba(14, 217, 132, 0.5)
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
</style>
