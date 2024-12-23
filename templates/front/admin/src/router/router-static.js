import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Board from '@/views/board'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import dianyingxinxi from '@/views/modules/dianyingxinxi/list'
    import aboutus from '@/views/modules/aboutus/list'
    import dianyingleixing from '@/views/modules/dianyingleixing/list'
    import mianfeidianying from '@/views/modules/mianfeidianying/list'
    import discussfufeidianying from '@/views/modules/discussfufeidianying/list'
    import forum from '@/views/modules/forum/list'
    import zhifudingdan from '@/views/modules/zhifudingdan/list'
    import discussdianyingxinxi from '@/views/modules/discussdianyingxinxi/list'
    import systemintro from '@/views/modules/systemintro/list'
    import chathelper from '@/views/modules/chathelper/list'
    import yonghu from '@/views/modules/yonghu/list'
    import fufeidianying from '@/views/modules/fufeidianying/list'
    import chat from '@/views/modules/chat/list'
    import discussmianfeidianying from '@/views/modules/discussmianfeidianying/list'
    import messages from '@/views/modules/messages/list'
    import dianyingbofang from '@/views/modules/dianyingbofang/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '电影资讯',
        component: news
      }
      ,{
	path: '/dianyingxinxi',
        name: '电影信息',
        component: dianyingxinxi
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/dianyingleixing',
        name: '电影类型',
        component: dianyingleixing
      }
      ,{
	path: '/mianfeidianying',
        name: '免费电影',
        component: mianfeidianying
      }
      ,{
	path: '/discussfufeidianying',
        name: '付费电影评论',
        component: discussfufeidianying
      }
      ,{
	path: '/forum',
        name: '在线论坛',
        component: forum
      }
      ,{
	path: '/zhifudingdan',
        name: '支付订单',
        component: zhifudingdan
      }
      ,{
	path: '/discussdianyingxinxi',
        name: '电影信息',
        component: discussdianyingxinxi
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/chathelper',
        name: '智能助手',
        component: chathelper
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/fufeidianying',
        name: '付费电影',
        component: fufeidianying
      }
      ,{
	path: '/chat',
        name: '智能客服',
        component: chat
      }
      ,{
	path: '/discussmianfeidianying',
        name: '免费电影评论',
        component: discussmianfeidianying
      }
      ,{
	path: '/messages',
        name: '留言反馈',
        component: messages
      }
      ,{
	path: '/dianyingbofang',
        name: '电影播放',
        component: dianyingbofang
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '电影资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/board',
    name: 'board',
    component: Board,
    meta: {icon:'', title:'board'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
