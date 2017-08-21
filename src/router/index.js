import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../../pages/home/home'
import Audio from '../../pages/audio/shuyinying'
import Broadcast from '../../pages/broadcast/guangbo'
import Group from '../../pages/group/group'
import Mine from '../../pages/mine/mine'

import Movie from '../components/movie'
import Book from '../components/book'
import Tv from '../components/tv'
import City from '../components/city'
import Music from '../components/music'

import RouterA from '../components/router0'
import GengDuo from '../components/chakangengduo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shuyinying',
      name: 'Audio',
      component: Audio,
      children:[
        {path:'/',component:Movie},
        {path:'movie',component:Movie},
        {path:'book',component:Book},
        {path:'tv',component:Tv},
        {path:'city',component:City},
        {path:'music',component:Music},
      ]
    },
    {
      path: '/guangbo',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/router0',
      name: 'RouterA',
      component: RouterA
    },
    {
      path: '/chakangengduo',
      name: 'GengDuo',
      component: GengDuo
    },
   
  ]
})
