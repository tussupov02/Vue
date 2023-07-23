export default [
    {
      name: 'HomePage',
      path: '/',
      component: () => import('@/views/HomePage.vue')
    },
    {
      name: 'ContactPage',
      path: '/contact',
      component: () => import('@/views/ContactsPage.vue')
    },
    {
      name: 'GaleryPage',
      path: '/galery',
      component: () => import('@/views/GaleryPage.vue')
    },
  ]