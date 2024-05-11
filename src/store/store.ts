import { priority, type taskType } from '@/types/tasks'
import { createStore } from 'vuex'
import { localStoragePlugin } from './plugin'

export interface State {
  todos: taskType[] // lista de tarefas
  todosQuantity: number // quantidade de tarefas
  todosQuantityUrgent: number // quantidade de tarefas urgentes
  todosQuantityImportant: number // quantidade de tarefas importantes
  categorieActive: string // a categoria que esta ativa, começa com Todas
}

const allTodos = JSON.parse(localStorage.getItem('todos') || '[]')

export const store = createStore<State>({
  plugins: [localStoragePlugin], // plugin para salvar automaticamente no local storage
  state: {
    todos: allTodos,
    todosQuantity: allTodos.length,
    todosQuantityUrgent: allTodos.filter((todo: taskType) => todo.priority === priority.URGENT)
      .length,
    todosQuantityImportant: allTodos.filter(
      (todo: taskType) => todo.priority === priority.IMPORTANT
    ).length,
    categorieActive: 'Todas'
  },
  actions: {
    addTodo: ({ commit }, payload) => commit('addTodo', payload),
    deleteTodo: ({ commit }, payload) => commit('deleteTodo', payload),
    checkedTodo: ({ commit }, payload) => commit('checkedTodo', payload),
    changeCategory: ({ commit }, payload) => commit('changeCategory', payload)
  },
  getters: {
    // método que filtra as tarefas conforme o filtro
    filteredTodos: (state) => {
      switch (state.categorieActive) {
        case 'Urgentes':
          return state.todos.filter((todo) => todo.priority === priority.URGENT)
        case 'Importantes':
          return state.todos.filter((todo) => todo.priority === priority.IMPORTANT)
        case 'Finalizadas':
          return state.todos.filter((todo) => todo.completed === true)
        case 'Outras':
          return state.todos.filter(
            (todo) =>
              todo.priority !== priority.URGENT &&
              todo.priority !== priority.IMPORTANT &&
              todo.completed === false
          )
        case 'Todas':
        default:
          // Ordena primeiro por 'Urgente', depois 'Importante', e todos os outros depois
          return state.todos.slice().sort((a, b) => {
            if (a.priority === priority.URGENT && b.priority !== priority.URGENT) return -1
            if (b.priority === priority.URGENT && a.priority !== priority.URGENT) return 1
            if (a.priority === priority.IMPORTANT && b.priority !== priority.IMPORTANT) return -1
            if (b.priority === priority.IMPORTANT && a.priority !== priority.IMPORTANT) return 1
            return 0
          })
      }
    }
  },
  mutations: {
    addTodo(state, payload: taskType) {
      state.todos = [...state.todos, payload]
      localStorage.setItem('todos', JSON.stringify(state.todos))
      //  apos adicionar os todos ele verifica a quantidade de todos,
      // de todos urgentes e todos importantes
      state.todosQuantity = state.todos.length
      state.todosQuantityUrgent = state.todos.filter(
        (todo) => todo.priority === priority.URGENT
      ).length
      state.todosQuantityImportant = state.todos.filter(
        (todo) => todo.priority === priority.IMPORTANT
      ).length
    },
    checkedTodo(state, payload: { id: number; completed: boolean }) {
      const todo = state.todos.find((todo) => todo.id === payload.id)
      if (todo) {
        todo.completed = payload.completed
      }
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((c, i) => i !== payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
      //  apos deletar os todos ele verifica a quantidade de todos,
      // de todos urgentes e todos importantes
      state.todosQuantity = state.todos.length
      state.todosQuantityUrgent = state.todos.filter(
        (todo) => todo.priority === priority.URGENT
      ).length
      state.todosQuantityImportant = state.todos.filter(
        (todo) => todo.priority === priority.IMPORTANT
      ).length
    },
    changeCategory(state, payload) {
      state.categorieActive = payload
    }
  }
})
