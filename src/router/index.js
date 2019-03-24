import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Master from '@/components/master'
import Java from '@/components/courseJava'
import Python from '@/components/coursePython'


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
        component: Course,
        redirect:'/course/python',
        children: [
            { path: 'java', component: Java },
            { path: 'python', component: Python },]
    },    
    {
        path: '/master/:count',
        name:'master',
        component: Master
    }
]
});



