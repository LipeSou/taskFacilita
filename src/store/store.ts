import { priority, type taskType } from '@/types/tasks'
import { createStore } from 'vuex'

export interface State {
  todos: taskType[]
  todosQuantity: number
  todosQuantityUrgent: number
  todosQuantityImportant: number
  categorieActive: string
}

export const store = createStore<State>({
  state: {
    todos: [],
    todosQuantity: 0,
    todosQuantityUrgent: 0,
    todosQuantityImportant: 0,
    categorieActive: 'Todas'
  },
  actions: {
    addTodo: ({ commit }, payload) => commit('addTodo', payload),
    deleteTodo: ({ commit }, payload) => commit('deleteTodo', payload),
    checkedTodo: ({ commit }, payload) => commit('checkedTodo', payload),
    changeCategory: ({ commit }, payload) => commit('changeCategory', payload)
  },
  mutations: {
    addTodo(state, payload: taskType) {
      state.todos = [...state.todos, payload]
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
    },
    deleteTodo(state, payload) {
      state.todos.filter((c, i) => i !== payload)
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
    changeCategory(state, payload) {
      state.categorieActive = payload
    }
  }
})
