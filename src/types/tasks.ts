export enum priority {
  URGENT = 'urgent',
  IMPORTANT = 'important'
}

interface taskType {
  id: number
  description: string
  priority?: priority | null
  completed: boolean
}

export type { taskType }
