import { Project } from "./IProject"

export interface Task {
  taskTitle: string
  timePassed: number
  project: Project
}