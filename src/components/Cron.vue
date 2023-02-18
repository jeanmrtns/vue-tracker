<template>
  <section>
    <strong class="display">
      {{ timePassed }}
    </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cron-component',
  props: {
    timeInSeconds: {
      type: Number,
      default: 0
    }
  },
  computed: {
    timePassed(): string {
      return new Date(this.timeInSeconds * 1000).toISOString().substr(11, 8)
    }
  }
})
</script>

<style scoped>
.display {
  color: var(--text-primary);
}
</style>