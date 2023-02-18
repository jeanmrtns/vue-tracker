<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cron :timeInSeconds="timeInSeconds" />

    <CounterButton :disabled="isTiming" @click="startCounter" icon="fa-play" title="play" />
    <CounterButton :disabled="!isTiming" @click="stopCounter" icon="fa-stop" title="stop" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cron from './Cron.vue'
import CounterButton from './CounterButton.vue'

export default defineComponent({
  name: 'counter-component',
  emits: ['onFinishCounter'],
  data() {
    return {
      isTiming: false,
      timeInSeconds: 0,
      timer: 0
    }
  },
  methods: {
    startCounter() {
      this.isTiming = true
      this.timer = setInterval(() => {
        this.timeInSeconds++
      }, 1000)
    },
    stopCounter() {
      clearInterval(this.timer)
      this.isTiming = false
      this.$emit('onFinishCounter', this.timeInSeconds)
      this.timeInSeconds = 0
    },
  },
  components: {
    Cron,
    CounterButton
  }
})
</script>

<style scoped>
button {
  margin-left: 1rem;
}
</style>