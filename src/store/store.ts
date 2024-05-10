import type { taskType } from '@/types/tasks'
import { createStore } from 'vuex'

export interface State {
  todos: taskType[]
}

export const store = createStore<State>({
  state: {
    todos: []
  },
  actions: {
    addTodo: ({ commit }, payload) => commit('addTodo', payload),
    deleteTodo: ({ commit }, payload) => commit('deleteTodo', payload)
  },
  mutations: {
    addTodo(state, payload: taskType) {
      state.todos = [...state.todos, payload]
    },
    deleteTodo(state, payload) {
      state.todos.filter((c, i) => i !== payload)
    }
  }
})
