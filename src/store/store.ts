import type { taskType } from '@/types/tasks'
import { createStore } from 'vuex'

export interface State {
  todos: taskType[]
  todosQuantity: number
}

export const store = createStore<State>({
  state: {
    todos: [],
    todosQuantity: 0
  },
  actions: {
    addTodo: ({ commit }, payload) => commit('addTodo', payload),
    deleteTodo: ({ commit }, payload) => commit('deleteTodo', payload)
  },
  mutations: {
    addTodo(state, payload: taskType) {
      state.todos = [...state.todos, payload]
      state.todosQuantity = state.todos.length
    },
    deleteTodo(state, payload) {
      state.todos.filter((c, i) => i !== payload)
      state.todosQuantity = state.todos.length
    }
  }
})
