<script setup lang="ts">
import { type taskType } from '@/types/tasks'
import Card from '../dashboardContainerTasksCard'
import ModalFacilita from '@/components/common/ModalFacilita.vue'
import ButtonAddTasks from '../buttonAddTasks/buttonAddTasks.vue'
import { computed, ref } from 'vue'
import AddTasksModal from '../modalBodies/AddTasksModal.vue'
import InputFacilita from '@/components/common/InputFacilita.vue'
import { useStore } from 'vuex'

const store = useStore()

const allTasks = computed<taskType[]>(() => store.getters.filteredTodos)
const todosQuantity = computed<number>(() => store.state.todosQuantity)
const searchTerm = ref('')
// filtra de acordo com o termo da busca
const filteredTasks = computed(() => {
  return allTasks.value.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
const showModalTaskCadaster = ref<boolean>(false)

function openModalCadaster() {
  showModalTaskCadaster.value = true
}

function closeModalCadaster() {
  showModalTaskCadaster.value = false
}
</script>
<template>
  <div class="tasks-container">
    <div>
      <h2>Minhas tarefas</h2>
      <!-- Verifica se possui ou nao tasks e mostra a descriçao de quantas tasks-->
      <p v-if="todosQuantity > 0" class="description">
        Olá <span class="description-bold">Eduardo Pereira</span>, você tem
        <span class="description-bold">{{ todosQuantity }} tarefas</span> pendentes.
      </p>
      <p v-else class="description">
        Olá <span class="description-bold">Eduardo Pereira</span>, você<span
          class="description-bold"
        >
          não possui tarefas</span
        >
        pendentes. <br />
        Adicione uma tarefa para aparecer para você.
      </p>
      <!-- Input de busca / Utiliza o input reutilizável -->
      <div v-if="todosQuantity > 0" class="search-container">
        <InputFacilita placeholder="Buscar tarefas" v-model="searchTerm" :isSeachComponent="true" />
      </div>

      <!-- Cards das tasks -->
      <div v-for="task in filteredTasks" :key="task.id">
        <!-- Componente Card utilizando o Pattern Composition que permite deixar o componente bem mais maleável e com menos props dividindo em vários sub componentes -->
        <Card.CardContainer :completed="task.completed">
          <Card.CardCheckboxContainer>
            <Card.CardCheckbox :id="task.id" :completed="task.completed" />
            <Card.CardDescription :completed="task.completed" :description="task.title" />
          </Card.CardCheckboxContainer>
          <Card.CardCheckboxContainer>
            <Card.CardTag v-if="task?.priority" :tag="task?.priority" />
            <Card.CardDropdown :todo="task" />
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
      <AddTasksModal @on-close="closeModalCadaster" />
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
  @media (max-width: 530px)
    padding-top: 40px

.search-container
  margin-bottom: 30px
  margin-top: 30px
  width: 633px
  @media (max-width: 968px)
    width 400px
  @media (max-width: 768px)
    width: 300px

.description
  margin-top: 4px
  color: #77899E
  font-weight: 600
  font-size: 17px
  @media (max-width: 768px)
    width: 300px

.description-bold
  color: $primary-color
  font-size: 17px
  font-weight: 600
</style>
