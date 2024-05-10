<script setup lang="ts">
import { type taskType } from '@/types/tasks'
import Card from './dashboardContainerTasksCard'
import ModalFacilita from '@/components/common/ModalFacilita.vue'
import ButtonAddTasks from '../buttonAddTasks/buttonAddTasks.vue'
import { computed, ref } from 'vue'
import AddTasksModal from '../modalBodies/AddTasksModal.vue'
import InputFacilita from '@/components/common/InputFacilita.vue'
import { useStore } from 'vuex'

const store = useStore()

const allTasks = computed<taskType[]>(() => store.state.todos)

const showModalTaskCadaster = ref<boolean>(false)

function openModalCadaster() {
  showModalTaskCadaster.value = true
}

function closeModalCadaster() {
  console.log('Fechando modal')
  showModalTaskCadaster.value = false
}
</script>
<template>
  <div class="tasks-container">
    <div>
      <h2 class="my-tasks">Minhas tarefas</h2>
      <!-- Verifica se possui ou nao tasks -->
      <p v-if="allTasks.length > 0" class="description">
        Olá <span class="description-bold">Eduardo Pereira</span>, você tem
        <span class="description-bold">4 tarefas</span> pendentes.
      </p>
      <p v-else class="description">
        Olá <span class="description-bold">Eduardo Pereira</span>, você<span
          class="description-bold"
        >
          não possui tarefas</span
        >
        pendentes. Adicione uma tarefa para aparecer para você.
      </p>
      <!-- Input de busca / Utiliza o input reutilizável -->
      <div v-if="allTasks.length > 0" class="search-container">
        <InputFacilita placeholder="Buscar tarefas" :isSeachComponent="true" />
      </div>

      <!-- Cards das tasks -->
      <div class="taks" v-for="task in allTasks" :key="task.id">
        <!-- Componente Card utilizando o Pattern Composition que permite deixar o componente bem mais maleável e com menos props dividindo em vários sub componentes -->
        <Card.CardContainer :completed="task.completed">
          <Card.CardCheckboxContainer>
            <Card.CardCheckbox :completed="task.completed" />
            <Card.CardDescription :completed="task.completed" :description="task.title" />
          </Card.CardCheckboxContainer>
          <Card.CardCheckboxContainer>
            <Card.CardTag v-if="task?.priority" :tag="task?.priority" />
          </Card.CardCheckboxContainer>
        </Card.CardContainer>
      </div>
    </div>
    <!-- botao e modal de cadastro de tarefas -->
    <ButtonAddTasks :onClick="openModalCadaster" />
    <ModalFacilita
      :title="'Cadastrar Tarefa'"
      :showDialog="showModalTaskCadaster"
      @on-close="closeModalCadaster"
    >
      <AddTasksModal />
    </ModalFacilita>
  </div>
</template>

<style scoped lang="stylus">
.tasks-container
  padding-top: 118px
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  height: calc(100vh - 100px)
  overflow-y: auto

.search-container
  margin-bottom: 30px
  margin-top: 30px

.description
  margin-top: 4px
  color: #77899E
  font-weight: 600
  font-size: 17px

.description-bold
  color: $primary-color
  font-size: 17px
  font-weight: 600
</style>
