import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/firstpage/index'
//全部采用懒加载的方式（其他模式可以查看app.js中采用的路由挂载模式）
// const awards = resolve=>System.import('@/components/firstpage/awards');//路由懒加载
// const photo = resolve=>System.import('@/components/firstpage/photo');
// const article = resolve=>System.import('@/components/firstpage/article');
// const video = resolve=>System.import('@/components/firstpage/video');
// const album = resolve=>System.import('@/components/firstpage/album');
// const notice = resolve=>System.import('@/components/firstpage/notice');
// const works = resolve=>System.import('@/components/firstpage/works');
// const albumdetail = resolve=>System.import('@/components/secondpage/albumdetail');
// const videodetail = resolve=>System.import('@/components/secondpage/videodetail');
// const articledetail = resolve=>System.import('@/components/secondpage/articledetail');
import awards from '@/components/firstpage/awards'
import photo from '@/components/firstpage/photo'
import article from '@/components/firstpage/article'
import video from '@/components/firstpage/video'
import album from '@/components/firstpage/album'
import notice from '@/components/firstpage/notice'
import works from '@/components/firstpage/works'
import albumdetail from '@/components/secondpage/albumdetail'
import videodetail from '@/components/secondpage/videodetail'
import articledetail from '@/components/secondpage/articledetail'
//单页组件
// import  trip from '@/components/single/trip'
// import  givemeachance from '@/components/single/givemeachance'
Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

      {
    path:'/awards',
          name:'awards',
          component:awards
      },{
    path:'/album',
          name:'album',
          component:album,
          children:[]
      },{
          path:'/photo',
          name:'photo',
          component:photo
      },{
          path:'/article',
          name:'article',
          component:article
      },
      {
          path:'/video',
          name:'video',
          component:video,
          children:[{
              path:'/video/:type',
              name:'videotype',
              component:video,
          }]
      },
      {
          path:'/notice',
          name:'notice',
          component:notice,
          children:[{
              path:'/notice/:year',
              name:'noticeyear',
              component:notice,
              children:[{
                  path:'/notice/:year/:month',
                  name:'noticeyearmonth',
                  component:notice,
              }]
          }]
      },
      {
          path:'/works/:name',
          name:'works',
          component:works
      },
      {
          path:'/album/:id',
          name:'album_detail',
          component:albumdetail
      },
      {
          path:'/videodetail/:id',
          name:'video_detail',
          component:videodetail
      },
      {
          path:'/articledetail/:id',
          name:'article_detail',
          component:articledetail
      },
      // { path: '*', component: NotFoundComponent },
      // {
      //     path:'/trip',
      //     name:'trip',
      //     component:trip
      // },
      // {
      //     path:'/givemeachance',
      //     name:'givemeachance',
      //     component:givemeachance
      // }
  ]
})
