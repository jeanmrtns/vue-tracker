import { Project } from "@/types/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projects: Project[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: []
  },
  mutations: {
    'CREATE_PROJECT'(state, projectName: string) {
      const project: Project = {
        id: new Date().toISOString(),
        name: projectName
      }

      state.projects.push(project)
    },

    'EDIT_PROJECT'(state, project: Project) {
      const projectIndex = state.projects.findIndex(p => p.id === project.id)

      state.projects[projectIndex] = project
    }
  }
})

export function useStore(): Store<State> {
  const store = vuexUseStore(key)

  return store
}