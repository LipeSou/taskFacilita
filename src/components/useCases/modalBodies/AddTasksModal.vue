<script setup lang="ts">
import ButtonFacilita from '@/components/common/ButtonFacilita.vue'
import InputFacilita from '@/components/common/InputFacilita.vue'
import type { taskType } from '@/types/tasks'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const title = ref('')
const description = ref('')

// vuex para adicionar todo
const store = useStore()
const allTodos = computed<taskType[]>(() => store.state.todos)
const addTodo = (payload: taskType) => store.dispatch('addTodo', payload)

function onAddTodo() {
  if (!title.value) return
  const id = allTodos.value.length + 1
  const todo: taskType = {
    id,
    completed: false,
    title: title.value,
    description: description.value,
    priority: null
  }
  addTodo(todo)
}
</script>

<template>
  <form @submit.prevent="onAddTodo">
    <div class="input-title">
      <InputFacilita :label="'Título:'" type="text" :width="'578px'" v-model="title" />
    </div>

    <InputFacilita
      :label="'Descrição:'"
      :isTextArea="true"
      type="text"
      :width="'578px'"
      :height="'183px'"
      v-model="description"
    />
    <!-- <ButtonFacilita
      :additionalStyles="{
        'margin-bottom': '36px'
      }"
      class="button"
      backgroundColor="#16D08D"
      @click="onDeleteTodo"
    >
      Deletar
    </ButtonFacilita> -->
    <ButtonFacilita
      :additionalStyles="{
        'margin-bottom': '36px'
      }"
      class="button"
      backgroundColor="#16D08D"
    >
      Adicionar
    </ButtonFacilita>
  </form>
</template>

<style scoped lang="stylus">
.input-title
  margin-top:40px
  margin-bottom: 15px
</style>
