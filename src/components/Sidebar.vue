<template>
  <aside>
    <header>
      <h1>
        <img src="../assets/logo.png" alt="">
      </h1>
      <button class="button" @click="changeTheme" id="button">
        {{ themeText }}
      </button>
    </header>

    <nav class="panel mt-5 ml-4 p-2 nav">
      <router-link to="/"><i class="fas fa-tasks"></i> Tasks</router-link>
      <router-link to="/projects">
        <i class="fas fa-project-diagram"></i>
        Projects</router-link>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'sidebar-component',
  emits: ['changeTheme'],
  data() {
    return {
      isDarkMode: false,
    }
  },
  computed: {
    themeText() {
      return this.isDarkMode ? 'Disable dark mode' : 'Enable dark mode'
    }
  },
  methods: {
    changeTheme() {
      this.isDarkMode = !this.isDarkMode
      this.$emit('changeTheme', this.isDarkMode)
    }
  }
})
</script>

<style scoped>
aside {
  height: 100vh;
  background: #0d3b66;
}

header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  align-items: center;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav a {
  color: #FFF;
  transition: filter 0.1s;
}

.nav a:hover {
  filter: brightness(0.8);
}

button {
  width: fit-content;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
  }
}
</style>