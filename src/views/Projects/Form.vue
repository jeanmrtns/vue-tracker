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
import { EDIT_PROJECT } from '@/store/mutations-types';
import { NotificationType } from '@/types/INotification';
import { useNotification } from '@/hooks/useNotification';

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
        this.notificate(NotificationType.FAIL, 'Save project failed', "You can't save a project without a title",)
        return
      }

      if (this.id) {
        this.store.commit(EDIT_PROJECT, {
          id: this.id,
          name: this.projectName
        })
        this.notificate(NotificationType.ATTENTION, 'Project edited', 'Your project was edited',)
      } else {
        this.store.commit('CREATE_PROJECT', this.projectName)
        this.notificate(NotificationType.SUCCESS, 'A new project was created', 'Yeeeay. Your project is ready')
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
    const { notificate } = useNotification()

    return {
      store,
      notificate
    }
  }
})
</script>

<style scoped>
.projects {
  padding: 1rem;
}
</style>