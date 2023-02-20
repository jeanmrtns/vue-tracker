import { Project } from "@/types/IProject";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
  projects: Project[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [{
      id: new Date().toISOString(),
      name: 'VueJS'
    }]
  }
})