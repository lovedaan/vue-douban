import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import inTheaters from '@/components/inTheaters'
import comingSoon from '@/components/comingSoon'
import Top250 from '@/components/Top250'
import Detail from '@/components/Detail'
import Search from '@/components/Search'
import searchList from '@/components/searchList'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    },
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/in_theaters',
        component: inTheaters
    }, {
        path: '/coming_soon',
        component: comingSoon
    }, {
        path: '/top250',
        component: Top250
    }, {
        path: '/search',
        component: Search
    }, {
        path: '/searchList',
        component: searchList
    }, {
        path: '/my',
        component: My
    }, {
        path: '/subject/:id',
        component: Detail
    }, {
        path: '*',
        redirect: '/home'
    }]
})