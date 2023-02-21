<template>
  <section class="projects">
    <h1>Projects</h1>

    <router-view></router-view>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent({
  name: 'Projects-Page',
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
</style>