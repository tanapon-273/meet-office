import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register'
import Login from './views/Login'
import EquipmentList from './views/equipment/EquipmentList'
import EquipmentForm from './views/equipment/EquipmentForm'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {auth: true}
    },
    {
      path: '/equipment',
      name: 'equipment-list',
      component: EquipmentList,
      meta: {auth: true}
    },
    {
      path: '/equipment/form',
      name: 'equipment-form',
      component: EquipmentForm,
      meta: {auth: true}
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

//ตรวจสอบสิทธ์การเข้าถึงหน้า 
router.beforeEach((to, from, next) => {
  if (!to.meta.auth) return next()
      router.app.$store.dispatch('get_user_login')
      .then(() => next())
      .catch(() => next({ name: 'login'}))
  
})

export default router