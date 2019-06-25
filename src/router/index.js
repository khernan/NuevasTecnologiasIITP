import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestObjeto from '@/components/LatestObjeto'
import Objeto from '@/components/Objeto'
import SearchObjeto from '@/components/SearchObjeto'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'LatestObjeto',
      component: LatestObjeto
    },
    {
      path: '/Objeto/:id',
      name: 'Objeto',
      props: true,
      component: Objeto
    },
    {
      path: '/search/:object',
      name: 'SearchObjeto',
      props: true,
      component: SearchObjeto
    }
  ],
  mode: 'history'
})
