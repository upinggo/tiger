import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/firstpage/index'
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
Vue.use(Router)

export default new Router({
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
              name:'video',
              component:video,
          }]
      },
      {
          path:'/notice',
          name:'notice',
          component:notice
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
  ]
})
