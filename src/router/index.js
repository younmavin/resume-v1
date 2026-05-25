import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Project01 from '@/views/Project01.vue'
import Project02 from '@/views/Project02.vue'
import Project03 from '@/views/Project03.vue'
import Project04 from '@/views/Project04.vue'
import Project05 from '@/views/Project05.vue'
import Project06 from '@/views/Project06.vue'
import Project07 from '@/views/Project07.vue'
import Project08 from '@/views/Project08.vue'
import Project09 from '@/views/Project09.vue'
import Project10 from '@/views/Project10.vue'
import Project11 from '@/views/Project11.vue'
import Project12 from '@/views/Project12.vue'
import Project13 from '@/views/Project13.vue'
import Project14 from '@/views/Project14.vue'
import Project15 from '@/views/Project15.vue'
import Project16 from '@/views/Project16.vue'
import Project17 from '@/views/Project17.vue'
import Project18 from '@/views/Project18.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/project01',
    name: 'Project01',
    component: Project01,
  },
  {
    path: '/project02',
    name: 'Project02',
    component: Project02,
  },
  {
    path: '/project03',
    name: 'Project03',
    component: Project03,
  },
  {
    path: '/project04',
    name: 'Project04',
    component: Project04,
  },
  {
    path: '/project05',
    name: 'Project05',
    component: Project05,
  },
  {
    path: '/project06',
    name: 'Project06',
    component: Project06,
  },
  {
    path: '/project07',
    name: 'Project07',
    component: Project07,
  },
  {
    path: '/project08',
    name: 'Project08',
    component: Project08,
  },
  {
    path: '/project09',
    name: 'Project09',
    component: Project09,
  },
  {
    path: '/project10',
    name: 'Project10',
    component: Project10,
  },
  {
    path: '/project11',
    name: 'Project11',
    component: Project11,
  },
  {
    path: '/project12',
    name: 'Project12',
    component: Project12,
  },
  {
    path: '/project13',
    name: 'Project13',
    component: Project13,
  },
  {
    path: '/project14',
    name: 'Project14',
    component: Project14,
  },
  {
    path: '/project15',
    name: 'Project15',
    component: Project15,
  },
  {
    path: '/project16',
    name: 'Project16',
    component: Project16,
  },
  {
    path: '/project17',
    name: 'Project17',
    component: Project17,
  },
  {
    path: '/project18',
    name: 'Project18',
    component: Project18,
  },
]

const router = createRouter({
  history: createWebHashHistory(),

  routes,

  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: 'instant',
    }
  },
})

// 페이지 이동 시 항상 맨 위
router.afterEach(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant',
  })
})

export default router
