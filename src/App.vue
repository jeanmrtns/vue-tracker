<template>
  <main class="columns is-gapless is-multiline" :class="{ dark: isDarkMode }">
    <div class="column is-one-quarter">
      <Sidebar :onChangeTheme="changeTheme" />
    </div>

    <div class="column is-three-quarter content">
      <Form @saveTask="saveTask" />

      <div class="list">
        <Box v-if="isTasksListEmpty">
          <span>You are not so active today ☹️</span>
        </Box>
        <TasksList v-else :tasks="tasks" />
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue'
import Box from './components/Box.vue'
import Form from './components/Form.vue'
import TasksList from './components/TasksList.vue'
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
    Sidebar,
    Form,
    TasksList,
    Box
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
