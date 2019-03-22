import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'


Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
        path: '/',
        name:'index',
        component: Index
    },
    {
        path: '/course',
        name:'course',
        component: Course
    }
]
});



