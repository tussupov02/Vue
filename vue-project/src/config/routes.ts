export default [
    {
      name: 'HomePage',
      path: '/',
      component: () => import('@/views/HomePage.vue')
    },
    {
      name: 'UserPage',
      path: '/users',
      component: () => import('@/views/UserPage.vue'),
      redirect: () => {
        return { name: 'UserList' }
      },
      children: [
        {
          name: 'UserList',
          path: '',
          component: () => import('@/views/UserList.vue')
        },
        {
          name: 'UserAdd',
          path: 'add',
          component: () => import('@/views/UserAdd.vue')
        },
        {
          name:'UserId',
          path:':id',
          props: true,
          component:()=>import('@/views/UserIdPage.vue')
        }
      ]
    },{
      name: 'LessonPage',
      path: '/lessons',
      component: () => import('@/views/LessonPage.vue'),
      redirect: () => {
        return { name: 'LessonList' }
      },
      children: [
        {
          name: 'LessonList',
          path: '',
          component: () => import('@/views/LessonList.vue')
        },
        {
          name: 'LessonAdd',
          path: 'add',
          component: () => import('@/views/LessonAdd.vue')
        },
        {
          name:'LessonId',
          path:':id',
          props: true,
          component:()=>import('@/views/LessonIdPage.vue')
        }
      ]
    },
  ]