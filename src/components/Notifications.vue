<template>
    <div class="notifications">
        <article class="message" :class="context[notification.type]" v-for="notification in notifications" :key="notification.id">
            <div class="message-header">
                <p>{{ notification.title }}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ notification.content }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store';
import { NotificationType } from '@/types/INotification';
export default defineComponent({
    name: 'Notifications-Component',
    data() {
        return {
            context: {
                [NotificationType.SUCCESS]: 'is-success',
                [NotificationType.ATTENTION]: 'is-warning',
                [NotificationType.FAIL]: 'is-danger',
            }
        }
    },
    setup() {
        const store = useStore()

        return {
            notifications: computed(() => store.state.notifications)
        }
    }
})
</script>

<style scoped>.notifications {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 500px;
    z-index: 1;
}</style>