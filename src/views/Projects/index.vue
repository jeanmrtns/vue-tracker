<template>
  <section class="projects">
    <h1>Projects</h1>

    <router-link to="/projects/create">
      <span class="button">
        <i class="fas fa-plus"></i>
        <span class="ml-2">New Project</span>
      </span>
    </router-link>

    <table class="table is-fullwidth mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td class="actions">
            <router-link :to="`/projects/${project.id}`">
              <span>
                <i class="fas fa-pencil"></i>
              </span>
            </router-link>
          </td>
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
  setup() {
    const store = useStore()

    return {
      projects: computed(() => store.state.projects)
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 1rem;
}

.actions {
  display: flex;
  align-items: center;
}
</style>