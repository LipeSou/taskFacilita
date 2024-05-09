export enum priority {
  URGENT = 'Urgente',
  IMPORTANT = 'Importante'
}

interface taskType {
  id: number
  description: string
  priority?: priority | null
  completed: boolean
}

export type { taskType }
