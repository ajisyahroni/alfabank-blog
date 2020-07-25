import Vue from 'vue'
import VueRouter from 'vue-router'

// landing page component
import Blog from '../views/Blog.vue'
import DetailBlog from '../views/DetailBlog.vue'

import Login from '../views/Login.vue'
import Dashboard from '../views/panel/Dashboard.vue'


import DashboardBlog from '../views/panel/DashboardBlog.vue'
import DashboardDetailBlog from '../views/panel/DashboardDetailBlog.vue'
import DashboardWriteBlog from '../views/panel/DashboardWriteBlog.vue'

// goto vuetify config
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Blog
  },
  {
    path: '/detail-blog/:id',
    name: 'DetailBlog',
    component: DetailBlog
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'dashboard-blog',
        name: 'DashboardBlog',
        component: DashboardBlog
      },
      {
        path: 'dashboard-write-blog',
        name: 'DashboardWriteBlog',
        component: DashboardWriteBlog
      },
      {
        path: 'dashboard-detail-blog/:id',
        name: 'DashboardDetailBlog',
        component: DashboardDetailBlog
      },

    ]
  },


]

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },

  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
