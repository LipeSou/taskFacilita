export enum priority {
  URGENT = 'Urgente',
  IMPORTANT = 'Importante'
}

interface taskType {
  id: number
  title: string
  description?: string
  priority?: priority | null
  completed: boolean
}

export type { taskType }
