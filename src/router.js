import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login'
import Main from './components/Main'
import Product from './views/Product'

Vue.use(VueRouter)

const routes = [
    { path:'/login', name: 'login', component: Login },
    { path:'/', name: 'dashboard', component: Main, children: [
        { path:'products', name: 'products', component: Product },
    ]}
]


const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name == 'login' && localStorage.getItem('access_token')) {
        next({ name: 'dashboard' })
    } else if (!to.name == 'login' && !localStorage.getItem('access_token')) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router