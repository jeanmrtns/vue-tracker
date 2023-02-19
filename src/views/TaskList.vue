<template>
  <Form @saveTask="saveTask" />

  <div class="list">
    <Box v-if="isTasksListEmpty">
      <span>You are not so active today ☹️</span>
    </Box>
    <TasksList v-else :tasks="tasks" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Box from '@/components/Box.vue'
import Form from '@/components/Form.vue'
import TasksList from '@/components/TasksList.vue'
import { Task } from '@/types/ITask'

export default defineComponent({
  name: 'TaskList',
  data() {
    return {
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
    }
  },
  components: {
    Form,
    TasksList,
    Box
  }
});
</script>

<style>
.list {
  padding: 0.5rem;
}
</style>
