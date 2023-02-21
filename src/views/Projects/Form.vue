<template>
  <form @submit.prevent="save">
    <div class="field">
      <label for="projectName" class="label">Project Name</label>
      <input type="text" class="input" id="projectName" v-model="projectName" />
    </div>

    <div class="field">
      <button class="button">Save</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store'
import { EDIT_PROJECT, NOTIFICATE } from '@/store/mutations-types';
import { NotificationType } from '@/types/INotification';

export default defineComponent({
  name: 'form-page',
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      projectName: ''
    }
  },
  methods: {
    save() {

      if (!this.projectName) {
        this.store.commit(NOTIFICATE, {
          title: 'Save project failed',
          content: "You can't save a project without a title",
          type: NotificationType.FAIL
        })
        return
      }

      if (this.id) {
        this.store.commit(EDIT_PROJECT, {
          id: this.id,
          name: this.projectName
        })
        this.store.commit(NOTIFICATE, {
          title: 'Project edited',
          content: 'Your project was edited',
          type: NotificationType.ATTENTION
        })
      } else {
        this.store.commit('CREATE_PROJECT', this.projectName)
        this.store.commit(NOTIFICATE, {
          title: 'A new project was created',
          content: 'Yeeeay. Your project is ready',
          type: NotificationType.SUCCESS
        })
      }

      this.clearFields()
      this.$router.push('/projects')
    },
    clearFields() {
      this.projectName = ''
    }
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(p => p.id === String(this.id))
      this.projectName = project?.name || ''
    }
  },
  setup() {
    const store = useStore()

    return {
      store
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 1rem;
}
</style>