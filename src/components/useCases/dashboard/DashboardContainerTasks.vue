<script setup lang="ts">
import { priority, type taskType } from '@/types/tasks'
import Card from './dashboardContainerTasksCard'

const allTasks: taskType[] = [
  {
    id: 1,
    description: 'Planejar desenvolvimento do app TodoList',
    completed: true,
    priority: priority.URGENT
  },
  {
    id: 2,
    description: 'Criar projeto Vue.js',
    completed: false,
    priority: priority.IMPORTANT
  },
  {
    id: 3,
    description: 'Montar telas HTML/CSS',
    completed: false,
    priority: null
  },
  {
    id: 4,
    description: 'Separar componentes ',
    completed: false,
    priority: null
  },
  {
    id: 5,
    description: 'Programar componentes',
    completed: false,
    priority: null
  }
]
</script>
<template>
  <div class="tasks-container">
    <div>
      <h2 class="my-tasks">Minhas tarefas</h2>
      <p class="description">
        Olá <span class="description-bold">Eduardo Pereira</span>, você tem
        <span class="description-bold">4 tarefas</span> pendentes.
      </p>
      <div class="taks" v-for="task in allTasks" :key="task.id">
        <Card.CardContainer :completed="task.completed">
          <Card.CardCheckboxContainer>
            <Card.CardCheckbox :completed="task.completed" />
            <Card.CardDescription :completed="task.completed" :description="task.description" />
          </Card.CardCheckboxContainer>
          <Card.CardCheckboxContainer>
            <Card.CardTag v-if="task?.priority" :tag="task?.priority" />
          </Card.CardCheckboxContainer>
        </Card.CardContainer>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.tasks-container
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%

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
