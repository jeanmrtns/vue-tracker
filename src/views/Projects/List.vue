<template>
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
              <button class="button ml-2">
                <span class="icon is-small">
                  <i class="fas fa-pencil"></i>
                </span>
              </button>
            </router-link>
            <button class="button ml-2 is-danger" @click="deleteProject(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store'
import { DELETE_PROJECT } from '@/store/mutations-types';
import { NotificationType } from '@/types/INotification';
import { useNotification } from '@/hooks/useNotification';

export default defineComponent({
  name: 'List-Projects',
  setup() {
    const store = useStore()
    const { notificate } = useNotification()

    return {
      projects: computed(() => store.state.projects),
      store,
      notificate
    }
  },
  methods: {
    deleteProject(id: string) {
      this.store.commit(DELETE_PROJECT, id)
      this.notificate(NotificationType.SUCCESS, 'Project deleted', 'Your project was successfully removed')
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