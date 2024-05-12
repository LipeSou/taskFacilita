<script setup lang="ts">
import DeleteIcon from '@/assets/images/DeleteIcon.vue'
import ButtonFacilita from '@/components/common/ButtonFacilita.vue'
import { useStore } from 'vuex'

interface DeleteTaskModalProps {
  todoId: number
}

const { todoId } = defineProps<DeleteTaskModalProps>()
const emit = defineEmits(['on-close'])

// vuex para deletar todo
const store = useStore()
const deleteTodo = (payload: number) => store.dispatch('deleteTodo', payload)

function onDeleteTodo() {
  emit('on-close')
  deleteTodo(todoId)
}
</script>

<template>
  <div class="container">
    <div class="circle-icon">
      <DeleteIcon />
    </div>
    <p class="title">Tem certeza que deseja <span class="emphasis">excluir</span> esta tarefa?</p>
    <p class="sub-title">Esta ação não poderá ser desfeita.</p>
    <div class="footer">
      <ButtonFacilita
        :additionalStyles="{
          'margin-bottom': '42px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center'
        }"
        backgroundColor="#1AD18F"
        :width="'188px'"
        :height="'41px'"
        @click="$emit('on-close')"
        >Cancelar</ButtonFacilita
      >
      <ButtonFacilita
        :additionalStyles="{
          'margin-bottom': '42px',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center'
        }"
        backgroundColor="#FF4874"
        @click="onDeleteTodo"
        :width="'188px'"
        :height="'41px'"
        >Confirmar</ButtonFacilita
      >
    </div>
  </div>
</template>

<style scoped lang="stylus">
.container
  width: 477px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  @media (max-width: 530px)
    width: 280px

.circle-icon
  width: 136px
  height: 136px
  background-color: rgba(237, 246, 252, 1)
  display: flex
  align-items: center
  justify-content: center
  border-radius: 50%
  margin-top: 18px
  margin-bottom: 12px

.title
  color: $text-bold;
  font-size: 20px
  font-weight: 700
  @media (max-width: 530px)
    text-align: center

.sub-title
  color: #475E78
  font-size: 15px
  font-weight: 600
  margin-bottom: 20px

.emphasis
  color: $error
  font-size: 20px
  font-weight: 700


.footer
  display: flex
  justify-content: center
  gap: 12px
  @media (max-width: 530px)
    flex-direction: column
    gap: 0px
</style>
