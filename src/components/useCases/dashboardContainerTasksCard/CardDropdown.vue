<script setup lang="ts">
import { ref } from 'vue'
import DropdownIcon from '@/assets/images/DropdownIcon.vue'
import ModalFacilita from '@/components/common/ModalFacilita.vue'
import AddTasksModal from '../modalBodies/AddTasksModal.vue'
import type { taskType } from '@/types/tasks'

interface CardDropdownProps {
  todo: taskType
}

const { todo } = defineProps<CardDropdownProps>()

const menuVisible = ref(false)
const menuRef = ref(null)
const showModalTaskEdit = ref<boolean>(false)

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}

function openModalCadaster() {
  toggleMenu()
  showModalTaskEdit.value = true
}

function closeModalCadaster() {
  showModalTaskEdit.value = false
}
</script>

<template>
  <ModalFacilita
    :title="'Editar Tarefa'"
    :showDialog="showModalTaskEdit"
    @on-close="closeModalCadaster"
  >
    <AddTasksModal v-if="showModalTaskEdit" :todo="todo" :isEditTodo="true" />
  </ModalFacilita>
  <div class="icon-container">
    <DropdownIcon class="icon" @click.stop="toggleMenu" />
    <ul class="menu" v-show="menuVisible" ref="menuRef">
      <div class="icon-menu">
        <DropdownIcon class="icon" fill="#2693FF" @click.stop="toggleMenu" />
      </div>
      <li class="options" @click="openModalCadaster">
        <div class="circle"></div>
        Editar
      </li>
      <li class="options">
        <div class="circle"></div>
        Deletar
      </li>
    </ul>
  </div>
</template>

<style scoped lang="stylus">
.icon-container
  position: relative

.icon
  cursor: pointer

.menu
  width: 109px
  height: 74px
  border-radius: 5px
  background: #FFF
  box-shadow: 0px 0px 8px 2px rgba(49, 81, 113, 0.10)
  position: absolute
  top : -15px
  right: -10px

.icon-menu
  position: absolute
  top: 10px
  right: 10px


.options
  list-style-type: none
  cursor: pointer
  display: flex
  gap: 5px
  margin-left: 12px
  align-items: center
  margin-top: 10px
  width : 63%
  &:hover
    .circle
      background-color: $secondary-color


.circle
  width: 9px
  height: 9px
  border-radius: 50%
  background-color: #D6E6EF
</style>
