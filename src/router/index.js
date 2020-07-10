import Vue from 'vue'
import VueRouter from 'vue-router'
// component
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import DetailBlog from '../views/DetailBlog.vue'
import DashboardBlog from '../views/DashboardBlog.vue'
import DashboardWriteBlog from '../views/DashboardWriteBlog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blog',
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
        path: '/dashboard-blog',
        name: 'DashboardBlog',
        component: DashboardBlog
      },
      {
        path: '/dashboard-write-blog',
        name: 'DashboardWriteBlog',
        component: DashboardWriteBlog
      },
      
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
