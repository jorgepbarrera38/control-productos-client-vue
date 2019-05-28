import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login'
import Main from './components/Main'
import Product from './views/Product'

Vue.use(VueRouter)

const routes = [
    { path:'/login', name: 'login', component: Login },
    { path:'/', component: Main, children: [
        { path:'products', name: 'products', component: Product },
    ]}
]


export default new VueRouter({
    routes
})