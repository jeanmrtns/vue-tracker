<template>
  <section class="projects">
    <h1>Projects</h1>

    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName" class="label">Project Name</label>
        <input type="text" class="input" id="projectName" v-model="projectName" />
      </div>

      <div class="field">
        <button class="button">Save</button>
      </div>
    </form>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent({
  name: 'projects-page',
  data() {
    return {
      projectName: '',
    }
  },
  methods: {
    save() {
      this.store.commit('CREATE_PROJECT', this.projectName)
      this.clearFields()
    },
    clearFields() {
      this.projectName = ''
    }
  },
  setup() {
    const store = useStore()

    return {
      store,
      projects: computed(() => store.state.projects)
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 1rem;
}
</style>