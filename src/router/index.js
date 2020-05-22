import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Recommend from '@/views/Recommend.vue'
import Rank from '@/views/Rank.vue'
import Singer from '@/views/Singer.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [{
                path: '/recommend',
                component: Recommend
            },
            {
                path: '/rank',
                component: Rank
            },
            {
                path: '/search',
                component: Singer
            }

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router