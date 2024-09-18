<template>
	<div class="main-containers">
		<div class="body-containers" :style='{"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"#fafafa"}'>
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"12px 7%","borderColor":"#eee","alignItems":"center","color":"#999","textAlign":"right","display":"flex","justifyContent":"flex-end","top":"0","left":"0","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"14px","position":"relative","borderStyle":"solid","height":"80px","zIndex":"1002"}'>
			<!-- info -->
			<div :style='{"margin":"0","position":"absolute","top":"22px","float":"left","left":"7%","display":"inline-block"}'>
			  <span :style='{"padding":"0px","lineHeight":"32px","fontSize":"28px","color":"#012339","fontWeight":"500"}'>基于Hadoop 的国产电影数据分析与可视化</span>
			</div>
			
			<div v-if="false" :style='{"margin":"0 10px","fontSize":"inherit","color":"inherit","display":"inline-block"}'></div>
			<el-button v-if="Token" class="btn-service" @click.native="goChat">
				<span class="icon iconfont icon-touxiang09" :style='{"color":"inherit","fontSize":"inherit","display":"none"}'></span>
					智能客服
			</el-button>
			
			<img v-if="headportrait&&Token" :style='{"width":"36px","margin":"0px","borderRadius":"50%","height":"36px"}' :src="headportrait?baseUrl + headportrait:require('@/assets/avator.png')">
			<div v-if="Token" :style='{"padding":"0 10px","fontSize":"inherit","lineHeight":"24px","color":"inherit","display":"inline-block","height":"24px"}'>{{username}}</div>
			<div v-if="Token && notAdmin" :style='{"cursor":"pointer","padding":"0 12px","color":"inherit","display":"inline-block","fontSize":"inherit","lineHeight":"24px","height":"24px"}' @click="goMenu('/index/center')">个人中心</div>
			<el-button v-if="!Token" @click="toLogin()" :style='{"border":"0","padding":"0 40px","margin":"0 10px 0 0","color":"#f4f4f5","borderRadius":"0 0 4px 4px","background":"#1e3c4f","display":"inline-block","fontSize":"14px","lineHeight":"40px","height":"40px"}'>登录/注册</el-button>
			<el-button v-if="Token" @click="logout" :style='{"border":"0px solid #666","padding":"0 40px","margin":"0","color":"#fff","borderRadius":"0 0 4px 4px","background":"#1c6a6d","display":"inline-block","fontSize":"14px","lineHeight":"40px","height":"40px"}'>退出</el-button>
		</div>


			<div class="menu-preview" :style='{"padding":"0","borderColor":"#efefef","margin":"0 auto","top":"80px","background":"none","borderWidth":"0 0 0px 0","width":"100%","position":"absolute","borderStyle":"solid","height":"auto","zIndex":"1002"}'>
			<el-scrollbar wrap-class="scrollbar-wrapper-horizontal">
				<el-menu class="el-menu-horizontal-demo" :style='{"border":"0","padding":"0px 40px","listStyle":"none","margin":"0 auto","alignItems":"flex-start","borderRadius":"0 0 30px 30px","background":"rgba(226,234,240,.98)","display":"flex","width":"86%","justifyContent":"space-between"}' :default-active="activeMenu" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<div class="userinfo" :style='{"width":"84px","padding":"6px 10px 0","display":"none","height":"auto"}'>
					  <el-image :style='{"width":"100%","objectFit":"cover","borderRadius":"20px","display":"block","height":"32px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					  <div :style='{"fontSize":"12px","lineHeight":"1.5","color":"#333","textAlign":"center"}'>nickname</div>
					</div>
					<el-menu-item class="home" index="/index/home" @click.native="goMenu('/index/home')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"16px","height":"auto"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>首页</span>
					</el-menu-item>
					<el-menu-item class="item" v-for="(menu, index) in menuList" :index="menu.url" :key="index" @click.native="goMenu(menu.url)">
						<i :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"16px","lineHeight":"auto","fontSize":"16px","height":"auto"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item class="service" @click="goChat">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"16px","height":"auto"}' class="icon iconfont icon-touxiang09"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>
							智能客服
						</span>
					</el-menu-item>
					<el-menu-item class="user" index="/index/center" v-if="Token && notAdmin" @click.native="goMenu('/index/center')">
						<span :style='{"padding":"0 10px","margin":"0","color":"inherit","display":"none","width":"14px","lineHeight":"auto","fontSize":"14px","height":"auto"}' class="icon iconfont icon-shouye-zhihui"></span>
						<span :style='{"padding":"0 10px","lineHeight":"auto","fontSize":"16px","color":"inherit","height":"auto"}'>个人信息</span>
					</el-menu-item>
				</el-menu>
			</el-scrollbar>
			</div>




			<div class="swiper3" :style='{"width":"100%","padding":"0","margin":"0px auto 0","height":"auto"}'>
			  <div class="swiper-container mySwiper3">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
			        <div :style='{"width":"100%","height":"auto"}'>
			          <el-image @click="carouselClick(item.url)" :style='{"objectFit":"cover","width":"100%","height":"520px"}' :src="baseUrl + item.value" fit="cover"></el-image>
			        </div>
			      </div>
			    </div>
			    <!-- Add Pagination -->
			    <div class="swiper-pagination" :style='{"width":"100%","left":"0","bottom":"110px"}'></div>
			    <!-- Add Arrows -->
			    <div class="swiper-button-next" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou18" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			    <div class="swiper-button-prev" :style='{"width":"24px","margin":"-12px 0 0","top":"50%","display":"none","height":"24px"}'>
			      <span class="icon iconfont icon-jiantou39" :style='{"width":"24px","fontSize":"24px","color":"#fff","height":"24px"}'></span>
			    </div>
			  </div>
			</div>
			<router-view id="scrollView"></router-view>
			
			<div class="bottom-preview" :style='{"width":"100%","height":"auto"}'>
				<div :style='{"minHeight":"100px","padding":"20px 7%","overflow":"hidden","color":"#fff","textAlign":"center","background":"#000a2f","width":"100%","fontSize":"14px","height":"auto"}'><div v-html="bottomContent"></div></div>
			</div>
		</div>
		
        <el-dialog title="智能客服" :visible.sync="chatFormVisible" width="600px" :before-close="chatClose">
            <div class="chat-content" id="chat-content">
                <div v-bind:key="item.id" v-for="item in chatList">
                    <div v-if="item.ask" class="right-content">
                        <el-alert v-if="!item.img" class="text-content" :title="item.ask" :closable="false"
                            type="warning"></el-alert>
                        <el-image v-if="item.img" :src="baseUrl + item.img" style="width: 120px;margin: 10px;"
                            fit="scale-down" :preview-src-list="[baseUrl + item.img]"></el-image>
                    </div>
                    <div v-else class="left-content">
                        <el-alert v-if="!item.img" class="text-content" :title="item.reply" :closable="false"
                            type="success"></el-alert>
                        <el-image v-if="item.img" :src="baseUrl + item.img" style="width: 120px;margin: 10px;"
                            fit="scale-down" :preview-src-list="[baseUrl + item.img]"></el-image>
                    </div>
                    <div class="clear-float"></div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <div v-if="askShow"
                    style="padding-bottom: 10px;display: flex;align-items: center;justify-content: center;">
                    <el-upload class="upload-demo" :action="uploadUrl" :on-success="uploadSuccess" 
                        :show-file-list="false">
                        <el-button type="success">上传图片</el-button>
                    </el-upload>

                    <el-button type="primary" style="margin-left: 20px;" @click="askChange">
                        转{{askType==1?'人工服务':'智能回复'}}</el-button>
                </div>
                <div style="width: 100%;display: flex;align-items: center;justify-content: space-between;">
                    <img style="width: 30px;cursor: pointer;" @click="askShow = !askShow" src="../assets/jiahao.png">
                    <el-input v-model="form.ask" placeholder="请输入内容" style="width: calc(100% - 110px);">
                    </el-input>
                    <el-button type="primary" @click="addChat(null)">发送</el-button>
                </div>

                <!-- <el-input v-model="form.ask" placeholder="请输入内容" style="width: calc(100% - 80px);float: left;">
                </el-input>
                <el-button type="primary" @click="addChat">发送</el-button> -->
            </div>
        </el-dialog>
	</div>
</template>

<script>
import Vue from 'vue'
import Swiper from "swiper";
import axios from 'axios'

export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"电影类型","menuJump":"列表","tableName":"dianyingleixing"}],"menu":"电影类型管理"},{"child":[{"allButtons":["新增","查看","修改","删除","查看评论"],"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除","查看评论"],"menu":"免费电影","menuJump":"列表","tableName":"mianfeidianying"}],"menu":"免费电影管理"},{"child":[{"allButtons":["新增","查看","修改","删除","查看评论","购买支付"],"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除","查看评论"],"menu":"付费电影","menuJump":"列表","tableName":"fufeidianying"}],"menu":"付费电影管理"},{"child":[{"allButtons":["新增","查看","修改","删除","支付","发送电影"],"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除","电影播放","发送电影"],"menu":"支付订单","menuJump":"列表","tableName":"zhifudingdan"}],"menu":"支付订单管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-clothes","buttons":["查看","修改","删除"],"menu":"电影播放","menuJump":"列表","tableName":"dianyingbofang"}],"menu":"电影播放管理"},{"child":[{"allButtons":["新增","查看","修改","删除","名称","评分统计","类型分析","地区统计","演员分析","查看评论","首页总数","首页统计","爬取数据"],"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","爬取数据"],"menu":"电影信息","menuJump":"列表","tableName":"dianyingxinxi"}],"menu":"电影信息管理"},{"child":[{"allButtons":["查看","修改","回复","删除"],"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言反馈","tableName":"messages"}],"menu":"留言反馈"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-group","buttons":["查看","修改","删除"],"menu":"在线论坛","tableName":"forum"}],"menu":"在线论坛"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"电影资讯","tableName":"news"},{"allButtons":["查看","修改"],"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"电影资讯分类","tableName":"newstype"},{"allButtons":["查看","修改"],"appFrontIcon":"cuIcon-copy","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-service","buttons":["查看","修改","删除"],"menu":"智能客服","tableName":"chat"},{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除"],"menu":"智能助手","tableName":"chathelper"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","查看评论"],"appFrontIcon":"cuIcon-present","buttons":["查看评论","查看"],"menu":"免费电影列表","menuJump":"列表","tableName":"mianfeidianying"}],"menu":"免费电影模块"},{"child":[{"allButtons":["新增","查看","修改","删除","查看评论","购买支付"],"appFrontIcon":"cuIcon-keyboard","buttons":["查看评论","查看","购买支付"],"menu":"付费电影列表","menuJump":"列表","tableName":"fufeidianying"}],"menu":"付费电影模块"},{"child":[{"allButtons":["新增","查看","修改","删除","名称","评分统计","类型分析","地区统计","演员分析","查看评论","首页总数","首页统计","爬取数据"],"appFrontIcon":"cuIcon-keyboard","buttons":["查看","查看评论"],"menu":"电影信息","menuJump":"列表","tableName":"dianyingxinxi"}],"menu":"电影信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","支付","发送电影"],"appFrontIcon":"cuIcon-shop","buttons":["查看","支付"],"menu":"支付订单","menuJump":"列表","tableName":"zhifudingdan"}],"menu":"支付订单管理"},{"child":[{"allButtons":["新增","查看","修改","删除"],"appFrontIcon":"cuIcon-clothes","buttons":["查看"],"menu":"电影播放","menuJump":"列表","tableName":"dianyingbofang"}],"menu":"电影播放管理"}],"frontMenu":[{"child":[{"allButtons":["新增","查看","修改","删除","查看评论"],"appFrontIcon":"cuIcon-present","buttons":["查看评论","查看"],"menu":"免费电影列表","menuJump":"列表","tableName":"mianfeidianying"}],"menu":"免费电影模块"},{"child":[{"allButtons":["新增","查看","修改","删除","查看评论","购买支付"],"appFrontIcon":"cuIcon-keyboard","buttons":["查看评论","查看","购买支付"],"menu":"付费电影列表","menuJump":"列表","tableName":"fufeidianying"}],"menu":"付费电影模块"},{"child":[{"allButtons":["新增","查看","修改","删除","名称","评分统计","类型分析","地区统计","演员分析","查看评论","首页总数","首页统计","爬取数据"],"appFrontIcon":"cuIcon-keyboard","buttons":["查看","查看评论"],"menu":"电影信息","menuJump":"列表","tableName":"dianyingxinxi"}],"menu":"电影信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			chatFormVisible: false,
			chatList: [],
            askType: 1, //1为智能回复 2为人工服务
            uploadUrl: this.$config.baseUrl + 'file/upload',
            headers: {
                Token: localStorage.getItem('frontToken')
            },
            askShow: false,
			form: {
				ask: '',
				userid: localStorage.getItem('frontUserid')
			},
			headportrait: localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'',
			Token: localStorage.getItem('frontToken'),
            username: localStorage.getItem('username'),
            notAdmin: localStorage.getItem('frontSessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],
			bottomContent: '',
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
        if(localStorage.getItem('frontToken') && localStorage.getItem('frontToken')!=null) {
			this.getSession()
            this.saveChathelper('主人，我是您的智能助手小搏，请问有什么可以帮您！');
            this.getChatList();
        }
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';


		// banner
		setTimeout(()=>{
			new Swiper(".mySwiper3", {"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"autoplay":{"delay":2500,"disableOnInteraction":false},"pagination":{"el":".swiper-pagination","clickable":true}})
		}, 500)

    },
    computed: {
		activeMenu() {
			const route = this.$route
			const {
				meta,
				path
			} = route
			// if st path, the sidebar will highlight the path you sete
			if (meta.activeMenu) {
				return meta.activeMenu
			}
			return path
		},
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('frontToken')
            if(arr[1]!='/index/home'){
            	var element = document.getElementById('scrollView');
            	var distance = element.offsetTop;
            	window.scrollTo( 0, distance )
            }else{
            	window.scrollTo( 0, 0 )
            }
        },
		headportrait(){
			this.$forceUpdate()
		},
    },
    methods: {

		async getSession() {
			await this.$http.get(`${localStorage.getItem('UserTableName')}/session`, {emulateJSON: true}).then(async res => {
				if (res.data.code == 0) {
					localStorage.setItem('sessionForm',JSON.stringify(res.data.data))
					localStorage.setItem('frontUserid', res.data.data.id);
					if(res.data.data.vip) {
						localStorage.setItem('vip', res.data.data.vip);
					}
					if(res.data.data.touxiang) {
						this.headportrait = res.data.data.touxiang
						localStorage.setItem('frontHeadportrait', res.data.data.touxiang);
					} else if(res.data.data.headportrait) {
						this.headportrait = res.data.data.headportrait
						localStorage.setItem('frontHeadportrait', res.data.data.headportrait);
					}
				}
			});
		},
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		// 轮播图跳转
		carouselClick(url) {
			if (url) {
				if (url.indexOf('https') != -1) {
					window.open(url)
				} else {
					this.$router.push(url)
				}
			}
		},
		goBackend() {
			localStorage.setItem('Token', localStorage.getItem('frontToken'));
			localStorage.setItem('role', localStorage.getItem('frontRole'));
			localStorage.setItem('sessionTable', localStorage.getItem('frontSessionTable'));
			localStorage.setItem('headportrait', localStorage.getItem('frontHeadportrait'));
			localStorage.setItem('userid', localStorage.getItem('frontUserid'));
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		getChatList() {
			this.$http.get('chat/list', {params: { userid: localStorage.getItem('frontUserid'), sort: 'addtime', order: 'asc',limit: 1000 }}).then(res => {
				if (res.data.code == 0) {
                    for (let x in res.data.data.list) {
                        if (res.data.data.list[x].ask) {
                            if (res.data.data.list[x].ask.split('/').length > 1) {
                                res.data.data.list[x].img = res.data.data.list[x].ask
                            }
                        }
                        if (res.data.data.list[x].reply) {
                            if (res.data.data.list[x].reply.split('/').length > 1) {
                                res.data.data.list[x].img = res.data.data.list[x].reply
                            }
                        }
                    }
					this.chatList = res.data.data.list;
                    let div = document.getElementsByClassName('chat-content')[0]
                    setTimeout(() => {
                        if (div)
                            div.scrollTop = div.scrollHeight
                    }, 0)
				}
			});
		},
        addChat(ask = null) {
            this.$http.post('chat/add', ask ? {
                ask: ask,
                userid: localStorage.getItem('frontUserid')
            } : {
				ask: this.form.ask,
				userid: localStorage.getItem('frontUserid')
			}).then(res => {
                if (res.data.code == 0) {
                    if (this.askType == 1 && ask == null) {
                        let ask = JSON.parse(JSON.stringify(this.form.ask))
                        this.$nextTick(function() {
                            setTimeout(() => {
                                this.getChathelper(ask)
                            }, 1000) // 要加点延迟, 不然有可能不生效
                        })
                    }
                    this.form.ask = '';
                    this.getChatList();
                }
            });
        },
        getChathelper(ask) {
            this.$http.get('chathelper/page', {
                params: {
                    ask: ask,
                    limit: 1
                }
            }).then(res => {
                if (res.data.code == 0) {
                    if (res.data.data.list.length) {
                        this.saveChathelper(res.data.data.list[0].reply)
                    } else {
                        this.saveChathelper('主人，小搏还不够聪明，无法理解您的意思！')
                    }
                }
            });
        },
        saveChathelper(reply) {
            this.$http.post('chat/save', {
                reply: reply,
                userid: localStorage.getItem('frontUserid')
            }).then(res => {
                if (res.data.code == 0) {
                    this.form.ask = '';
                    this.getChatList();
                }
            });
        },
        askChange() {
            this.askShow = !this.askShow;
            this.askType = this.askType == 1 ? 2 : 1
            if(this.askType==1) {
                this.saveChathelper('主人，我是您的智能助手小搏，请问有什么可以帮您！');
            } else if(this.askType==2){
                this.saveChathelper('您好，在线客服很高兴为您服务！');
            }
        },
        uploadSuccess(res) {
            if (res.code == 0) {
                this.askShow = !this.askShow;
                this.addChat('upload/' + res.file)
            }
        },
		chatClose() {
			clearInterval(this.timer);
			this.chatFormVisible = false;
		},
		goChat() {
            if(!localStorage.getItem('frontToken')) {
                this.toLogin();
                return;
            }
			this.chatFormVisible = true;
			this.timer = setInterval(this.getChatList, 2000);
		},
		goMenu(path) {
            this.$router.push(path);
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	  
	    & /deep/ .scrollbar-wrapper-vertical {
	      overflow-x: hidden;
	    }
	  
	    & /deep/ .scrollbar-wrapper-horizontal {
	      overflow-y: hidden;
	  
	      .el-scrollbar__view {
	        white-space: nowrap;
	      }
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				margin: 0;
				color: #333;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				line-height: 66px;
				background: none;
				justify-content: center;
				align-items: center;
				position: relative;
				list-style: none;
				min-width: 100px;
				height: 66px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home:hover {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.home.is-active {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user {
				cursor: pointer;
				border: 0;
				padding: 0 0px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 90px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 90px;
				order: 3;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.user.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 4;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.service.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				list-style: none;
				height: 44px;
				order: 5;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.shop.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back {
				cursor: pointer;
				border: 0;
				padding: 0 12px;
				color: #333;
				white-space: nowrap;
				display: none;
				font-size: 16px;
				line-height: 44px;
				background: none;
				align-items: center;
				position: relative;
				list-style: none;
				height: 44px;
				order: 6;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back:hover {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.back.is-active {
				color: #f95927;
				border-color: #f95927;
				border-width: 0 0 2px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item {
				cursor: pointer;
				padding: 0 12px;
				margin: 0;
				color: #333;
				white-space: nowrap;
				display: flex;
				font-size: 16px;
				border-color: #ddd;
				line-height: 66px;
				background: none;
				justify-content: center;
				border-width: 0 0px 0 0;
				align-items: center;
				position: relative;
				border-style: solid;
				list-style: none;
				text-align: center;
				min-width: 100px;
				height: 66px;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item:hover {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.item.is-active {
				color: #fff;
				background: #000a2f;
				border-color: #f95927;
				border-width: 0 0 0px;
				border-style: solid;
			}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
        padding-bottom: 20px;
        width: 100%;
        margin-bottom: 10px;
        max-height: 300px;
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #eeeeee;
        background: #fff;

        .left-content {
            float: left;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }

        .right-content {
            float: right;
            margin-bottom: 10px;
            padding: 10px;
            max-width: 80%;
        }
    }

    .clear-float {
        clear: both;
    }


	.swiper3 .swiper-button-prev:after {
      display:none;
    }
    .swiper3 .swiper-button-next:after {
      display:none;
    }
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet {
				border-radius: 0;
				margin: 0 4px;
				background: #d8d8d8;
				display: inline-block;
				width: 80px;
				opacity: .5;
				height: 4px;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet:hover {
				background: #176768;
				opacity: 1;
			}
	
	.main-containers .swiper3 .swiper-pagination /deep/ span.swiper-pagination-bullet.swiper-pagination-bullet-active {
				background: #176768;
				opacity: 1;
			}
	
	// -------- search --------
	.main-containers .search .select /deep/ .el-input__inner {
				border: 0;
				border-radius: 50px 0 0 50px;
				padding: 0 20px 0 40px;
				outline: none;
				color: #999;
				background: #f5f5f5;
				width: 140px;
				font-size: 16px;
				height: 44px;
			}
	
	.main-containers .search .input /deep/ .el-input__inner {
				border: 0;
				border-radius: 0px;
				padding: 0 20px 0 60px;
				margin: 0;
				color: #999;
				background: url(http://codegen.caihongy.cn/20231006/d3d4999528a4463b84be7ccbdd1c1524.png) no-repeat 40px center,#f5f5f5;
				width: 350px;
				font-size: 16px;
				height: 44px;
			}
	// -------- search --------
	
	.main-containers .btn-service {
				border: 0;
				padding: 0 8px 0 28px;
				margin: 0 10px;
				color: inherit;
				background: url(http://codegen.caihongy.cn/20231006/74238047b48b4786a227a25606642e6d.png) no-repeat left center;
				display: inline-block;
				width: auto;
				font-size: inherit;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-service:hover {
			}
	
	.main-containers .btn-shop {
				border: 0;
				padding: 0 8px 0 28px;
				margin: 0 10px;
				color: inherit;
				background: url(http://codegen.caihongy.cn/20231006/efb8028a6ce0422a843a727baa3b4048.png) no-repeat left center;
				display: inline-block;
				width: auto;
				font-size: inherit;
				line-height: 32px;
				height: 32px;
			}
	
	.main-containers .btn-shop:hover {
			}
</style>
