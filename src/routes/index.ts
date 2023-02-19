import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TaskList from '@/views/TaskList.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Task list',
    component: TaskList
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})