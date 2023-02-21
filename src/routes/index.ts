import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import TaskList from '@/views/TaskList.vue'
import Projects from '@/views/Projects/index.vue'
import List from '@/views/Projects/List.vue'
import Form from '@/views/Projects/Form.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Task list',
    component: TaskList
  },
  {
    path: '/projects',
    component: Projects,
    children: [
      {
        path: '',
        name: 'Projects',
        component: List
      },
      {
        path: 'create',
        name: 'Create Project',
        component: Form
      },
      {
        path: ':id',
        name: 'Edit Projects',
        component: Form,
        props: true,
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})