<template>
  <main class="columns is-gapless is-multiline" :class="{ dark: isDarkMode }">
    <div class="column is-one-quarter">
      <Sidebar :onChangeTheme="changeTheme" />
    </div>

    <div class="column is-three-quarter content">
      <Notifications />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue'
import Notifications from './components/Notifications.vue'
import { Task } from '@/types/ITask'

export default defineComponent({
  name: 'App',
  data() {
    return {
      isDarkMode: false,
      tasks: [] as Task[]
    }
  },
  computed: {
    isTasksListEmpty(): boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask(task: Task) {
      this.tasks.push(task)
    },
    changeTheme(darkMode: boolean) {
      this.isDarkMode = darkMode
    }
  },
  components: {
    Notifications,
    Sidebar
  }
});
</script>

<style>
main {
  --bg-primary: #FFF;
  --text-primary: #000;
}

main.dark {
  --bg-primary: #2B2D42;
  --text-primary: #DDD;
}

.content {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.content ul {
  margin: 0;
  padding: 0;
}

.list {
  padding: 0.5rem;
}
</style>
