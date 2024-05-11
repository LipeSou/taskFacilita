import type { taskType } from '@/types/tasks'

// plugin que automaticamente salva as tarefas no local storage
export function localStoragePlugin(store: {
  subscribe: (arg0: (mutation: any, state: { todos: taskType[] }) => void) => void
}) {
  store.subscribe((mutation: any, state: { todos: taskType[] }) => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  })
}
