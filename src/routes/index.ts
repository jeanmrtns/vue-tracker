import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TaskList from '@/views/TaskList.vue'
import Projects from '@/views/Projects.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Task list',
    component: TaskList
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})