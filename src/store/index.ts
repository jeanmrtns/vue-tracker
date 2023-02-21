import { Notification } from "@/types/INotification";
import { Project } from "@/types/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { CREATE_PROJECT, DELETE_PROJECT, EDIT_PROJECT, NOTIFICATE } from "./mutations-types";

interface State {
  projects: Project[]
  notifications: Notification[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: []
  },
  mutations: {
    [CREATE_PROJECT](state, projectName: string) {
      const project: Project = {
        id: new Date().toISOString(),
        name: projectName
      }

      state.projects.push(project)
    },

    [EDIT_PROJECT](state, project: Project) {
      const projectIndex = state.projects.findIndex(p => p.id === project.id)

      state.projects[projectIndex] = project
    },
    [DELETE_PROJECT](state, projectId: string) {
      state.projects = state.projects.filter(p => p.id !== projectId)
    },
    [NOTIFICATE](state, notification: Notification) {
      notification.id = new Date().getTime()
      state.notifications.push(notification)

      setTimeout(() => {
        state.notifications = state.notifications.filter(n => n.id !== notification.id)
      }, 3000)

    }
  }
})

export function useStore(): Store<State> {
  const store = vuexUseStore(key)

  return store
}