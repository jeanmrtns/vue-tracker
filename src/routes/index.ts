import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TaskList from '@/views/TaskList.vue'
import Projects from '@/views/Projects/index.vue'
import Form from '@/views/Projects/Form.vue'

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
  },
  {
    path: '/projects/create',
    name: 'Create Project',
    component: Form
  },
  {
    path: '/projects/:id',
    name: 'Edit Projects',
    component: Form,
    props: true,
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})