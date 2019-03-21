import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from '../components/routers'
import routers1 from '../components/routers1'


Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        path: '/',
        component: routers
    },
    {
        path: '/hello',
        component: routers1
    }
    ]
});



