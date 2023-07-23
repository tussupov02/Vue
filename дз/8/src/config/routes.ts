export default [
  {
    name: 'MainPage',
    path: '/',
    component: () => import('@/views/MainPage.vue')
  },
  {
    name:'PhotoPage',
    path:'/photo',
    component:()=>import('@/views/PhotoPage.vue'),
    redirect:()=>{
      return{name:'PhotoList'}
    },
    children:[
      {
        name:'PhotoList',
        path:'',
        component:()=>import('@/views/PhotoList.vue')
      },
      {
        name:'ArticlePage',
        path:':id',
        props: true,
        component:()=>import('@/views/ArticlePage.vue')
      }
    ]
  }
]