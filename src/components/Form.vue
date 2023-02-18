<template>
  <div class="box form">
    <form class="columns is-2 is-flex is-align-items-center is-justify-content-space-between"
      aria-label="Form to create a new task">
      <input type="text" class="input" placeholder="What task will you start?" v-model="taskTitle" />

      <div class="column">
        <Counter @on-finish-counter="finishTask" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Task } from '@/types/ITask'
import { defineComponent } from 'vue'
import Counter from './Counter.vue'

export default defineComponent({
  name: 'form-component',
  data() {
    return {
      taskTitle: ""
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
      const task: Task = {
        taskTitle: this.taskTitle,
        timePassed
      }
      this.$emit('saveTask', task)
      this.taskTitle = ""
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