export default [
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/views/PostMain.vue'),
    redirect: () => {
      return { name: 'PostList' }
    },
    children: [
      {
        name: 'PostList',
        path: '',
        component: () => import('@/views/PostsPage.vue')
      },
      {
        name: 'PostId',
        path: ':id',
        props: true,
        component: () => import('@/views/CurrentPost.vue')
      }
    ]
  }
]