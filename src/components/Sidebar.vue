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
      return this.isDarkMode ? 'Desativar modo escuro' : 'Ativar modo escuro'
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
header {
  background: #0d3b66;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  align-items: center;
}


button {
  width: fit-content;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }

}
</style>