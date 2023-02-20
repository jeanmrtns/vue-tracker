<template>
  <div class="box form">
    <form class="columns is-2 is-flex is-align-items-center is-justify-content-space-between"
      aria-label="Form to create a new task">
      <input type="text" class="input" placeholder="What task will you start?" v-model="taskTitle" />

      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option :value="project.id" v-for="project in projects" :key="project.id">{{ project.name }}</option>
          </select>
        </div>
      </div>

      <div class="column">
        <Counter @on-finish-counter="finishTask" />
      </div>
    </form>

  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import Counter from './Counter.vue'

export default defineComponent({
  name: 'form-component',
  data() {
    return {
      taskTitle: "",
      projectId: ""
    }
  },
  emits: [
    'saveTask'
  ],
  components: {
    Counter,
  },
  methods: {
    finishTask(timePassed: number) {
      this.$emit('saveTask', {
        taskTitle: this.taskTitle,
        timePassed,
        project: this.projects.find(p => p.id === this.projectId)
      })
      this.taskTitle = ""
    }
  },
  setup() {
    const store = useStore()

    return {
      projects: computed(() => store.state.projects)
    }
  }
})
</script>

<style>
.form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>