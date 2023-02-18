<template>
  <Box>
    <ul>
      <li v-for="task in tasks" :key="task.taskTitle" class="columns">
        <span class="column is-11">{{ task.taskTitle || 'Task without description' }}</span>
        <span class="column">
          <Cron :timeInSeconds="task.timePassed" />
        </span>
      </li>
    </ul>
  </Box>
</template>

<script lang="ts">
import Cron from './Cron.vue'
import Box from './Box.vue'
import { Task } from '@/types/ITask';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'tasks-list',
  props: {
    tasks: Object as PropType<Task[]>
  },
  components: {
    Box,
    Cron
  }
})
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

li {
  padding: 0.25rem;
}
</style>