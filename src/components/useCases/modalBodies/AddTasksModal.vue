<script setup lang="ts">
import ButtonFacilita from '@/components/common/ButtonFacilita.vue'
import InputFacilita from '@/components/common/InputFacilita.vue'
import { type taskType, type priority } from '@/types/tasks'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

interface AddTaskModalProps {
  todo?: taskType
  isEditTodo?: boolean
}

const { todo, isEditTodo } = defineProps<AddTaskModalProps>()

const title = ref(isEditTodo ? todo?.title : '')
const description = ref(todo?.description ? todo?.description : '')
const priorityCheck = ref<priority | ''>(todo?.priority ? todo?.priority : '')

// funçao para atualizar a prioridade conforme clica no checkbox
function updatePriority(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    priorityCheck.value = target.value as priority
  } else {
    // Se desmarcar, limpar o valor
    if (priorityCheck.value === target.value) {
      priorityCheck.value = ''
    }
  }
}

// vuex para adicionar todo
const store = useStore()
const allTodos = computed<taskType[]>(() => store.state.todos)
const addTodo = (payload: taskType) => store.dispatch('addTodo', payload)
const editTodo = (payload: taskType) => store.dispatch('editTodo', payload)

function onAddTodo() {
  if (!title.value) return

  const id = allTodos.value.length + 1
  const todoData: taskType = {
    id: isEditTodo ? (todo?.id as number) : id,
    title: title.value,
    description: description.value,
    priority: priorityCheck?.value ? priorityCheck.value : null,
    completed: isEditTodo && todo?.completed ? todo?.completed : false
  }
  isEditTodo ? editTodo(todoData) : addTodo(todoData)
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
    <div class="footer">
      <!-- checkbo prioridade -->
      <div class="checkbox-container">
        <label class="custom-checkbox">
          <input
            type="checkbox"
            value="Urgente"
            @change="updatePriority"
            :checked="priorityCheck === 'Urgente'"
          />
          <span class="checkbox-circle"></span>
          <span class="checkbox-label">Urgente</span>
        </label>

        <label class="custom-checkbox">
          <input
            type="checkbox"
            value="Importante"
            @change="updatePriority"
            :checked="priorityCheck === 'Importante'"
          />
          <span class="checkbox-circle"></span>
          <span class="checkbox-label">Importante</span>
        </label>
      </div>
      <!-- botao de criar task  -->
      <ButtonFacilita
        :additionalStyles="{
          'margin-bottom': '36px'
        }"
        class="button"
        :width="'118px'"
        backgroundColor="#16D08D"
        :disabled="title?.trim().length === 0"
      >
        {{ isEditTodo ? 'Editar' : 'Adicionar' }}
      </ButtonFacilita>
    </div>
  </form>
</template>

<style scoped lang="stylus">
.input-title
  margin-top:40px
  margin-bottom: 15px

.checkbox-container
  margin-top: 18px

.custom-checkbox
  display: inline-flex
  align-items: center
  cursor: pointer


.custom-checkbox input[type="checkbox"]
  display: none


.custom-checkbox .checkbox-circle
  width: 20px
  height: 20px
  border-radius: 50%
  margin-right: 10px
  background: #FFFFFF
  border: 2px solid #BFDAEB
  position: relative


.custom-checkbox input[type="checkbox"]:checked + .checkbox-circle
  background: #2693FF


.custom-checkbox .checkbox-circle:after
  content: ""
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 10px
  height: 10px
  border-radius: 50%
  background: #2693FF
  border: 2px solid #BFDAEB

  opacity: 0
  transition: opacity 0.2s


.custom-checkbox input[type="checkbox"]:checked + .checkbox-circle:after
  opacity: 1


.custom-checkbox .checkbox-label
  color: $text
  font-size: 14px
  font-weight: 600
  margin-right: 12px

.footer
  display: flex
  justify-content: space-between
</style>
