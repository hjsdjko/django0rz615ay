import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import dianyingleixingList from '../pages/dianyingleixing/list'
import dianyingleixingDetail from '../pages/dianyingleixing/detail'
import dianyingleixingAdd from '../pages/dianyingleixing/add'
import mianfeidianyingList from '../pages/mianfeidianying/list'
import mianfeidianyingDetail from '../pages/mianfeidianying/detail'
import mianfeidianyingAdd from '../pages/mianfeidianying/add'
import fufeidianyingList from '../pages/fufeidianying/list'
import fufeidianyingDetail from '../pages/fufeidianying/detail'
import fufeidianyingAdd from '../pages/fufeidianying/add'
import zhifudingdanList from '../pages/zhifudingdan/list'
import zhifudingdanDetail from '../pages/zhifudingdan/detail'
import zhifudingdanAdd from '../pages/zhifudingdan/add'
import dianyingbofangList from '../pages/dianyingbofang/list'
import dianyingbofangDetail from '../pages/dianyingbofang/detail'
import dianyingbofangAdd from '../pages/dianyingbofang/add'
import dianyingxinxiList from '../pages/dianyingxinxi/list'
import dianyingxinxiDetail from '../pages/dianyingxinxi/detail'
import dianyingxinxiAdd from '../pages/dianyingxinxi/add'
import chathelperList from '../pages/chathelper/list'
import chathelperDetail from '../pages/chathelper/detail'
import chathelperAdd from '../pages/chathelper/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussmianfeidianyingList from '../pages/discussmianfeidianying/list'
import discussmianfeidianyingDetail from '../pages/discussmianfeidianying/detail'
import discussmianfeidianyingAdd from '../pages/discussmianfeidianying/add'
import discussfufeidianyingList from '../pages/discussfufeidianying/list'
import discussfufeidianyingDetail from '../pages/discussfufeidianying/detail'
import discussfufeidianyingAdd from '../pages/discussfufeidianying/add'
import discussdianyingxinxiList from '../pages/discussdianyingxinxi/list'
import discussdianyingxinxiDetail from '../pages/discussdianyingxinxi/detail'
import discussdianyingxinxiAdd from '../pages/discussdianyingxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'dianyingleixing',
					component: dianyingleixingList
				},
				{
					path: 'dianyingleixingDetail',
					component: dianyingleixingDetail
				},
				{
					path: 'dianyingleixingAdd',
					component: dianyingleixingAdd
				},
				{
					path: 'mianfeidianying',
					component: mianfeidianyingList
				},
				{
					path: 'mianfeidianyingDetail',
					component: mianfeidianyingDetail
				},
				{
					path: 'mianfeidianyingAdd',
					component: mianfeidianyingAdd
				},
				{
					path: 'fufeidianying',
					component: fufeidianyingList
				},
				{
					path: 'fufeidianyingDetail',
					component: fufeidianyingDetail
				},
				{
					path: 'fufeidianyingAdd',
					component: fufeidianyingAdd
				},
				{
					path: 'zhifudingdan',
					component: zhifudingdanList
				},
				{
					path: 'zhifudingdanDetail',
					component: zhifudingdanDetail
				},
				{
					path: 'zhifudingdanAdd',
					component: zhifudingdanAdd
				},
				{
					path: 'dianyingbofang',
					component: dianyingbofangList
				},
				{
					path: 'dianyingbofangDetail',
					component: dianyingbofangDetail
				},
				{
					path: 'dianyingbofangAdd',
					component: dianyingbofangAdd
				},
				{
					path: 'dianyingxinxi',
					component: dianyingxinxiList
				},
				{
					path: 'dianyingxinxiDetail',
					component: dianyingxinxiDetail
				},
				{
					path: 'dianyingxinxiAdd',
					component: dianyingxinxiAdd
				},
				{
					path: 'chathelper',
					component: chathelperList
				},
				{
					path: 'chathelperDetail',
					component: chathelperDetail
				},
				{
					path: 'chathelperAdd',
					component: chathelperAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussmianfeidianying',
					component: discussmianfeidianyingList
				},
				{
					path: 'discussmianfeidianyingDetail',
					component: discussmianfeidianyingDetail
				},
				{
					path: 'discussmianfeidianyingAdd',
					component: discussmianfeidianyingAdd
				},
				{
					path: 'discussfufeidianying',
					component: discussfufeidianyingList
				},
				{
					path: 'discussfufeidianyingDetail',
					component: discussfufeidianyingDetail
				},
				{
					path: 'discussfufeidianyingAdd',
					component: discussfufeidianyingAdd
				},
				{
					path: 'discussdianyingxinxi',
					component: discussdianyingxinxiList
				},
				{
					path: 'discussdianyingxinxiDetail',
					component: discussdianyingxinxiDetail
				},
				{
					path: 'discussdianyingxinxiAdd',
					component: discussdianyingxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
