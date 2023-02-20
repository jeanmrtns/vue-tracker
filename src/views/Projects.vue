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
import { Project } from '@/types/IProject';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'projects-page',
  data() {
    return {
      projectName: '',
      projects: [] as Project[]
    }
  },
  methods: {
    save() {
      const project: Project = {
        id: new Date().toISOString(),
        name: this.projectName
      }

      this.projects.push(project)
      this.clearFields()
    },
    clearFields() {
      this.projectName = ''
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 1rem;
}
</style>