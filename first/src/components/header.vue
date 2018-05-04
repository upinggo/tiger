<template>
    <div class="Head">
        <div class="title">
            TIGER.HU.FANS.CLUB
        </div>
        <div class="account">
            <a href="javascript:void(0);" @click="boxlogin" class="login">登录</a> | <a href="javascript:void(0);" @click="boxregist" class="regist">注册</a>
        </div>
        <div class="menu">
            <router-link to="/">
                首页
            </router-link>
            <router-link to="/awards">简介</router-link>
            <router-link to="/album" class="">音乐</router-link>
            <router-link to="/video" class="">视频</router-link>
            <router-link to="/article" class="">活动</router-link>
            <router-link to="/photo" class="">照片</router-link>
            <router-link to="/notice" class="">行程</router-link>
            <router-link to="/share" class="">分享</router-link>
        </div>
        <div v-bind:class="{show:isshow,footShadow:isfoot}" @click="disapper"></div>
        <Login  v-if="logindata" @regist="regist"></Login>
        <Regist  v-if="registdata" @relogin="relogin"></Regist>
    </div>

</template>

<script>
    import Regist from '../components/regist';
    import Login from '../components/login';

    export default {
        components:{Login,Regist},
        name: "bannerhead",
        data () {
            return {
                isshow:true,
                isfoot:false,
                logindata:false,
                registdata:false
            }
        },
        methods:{
            boxlogin:function () {
                this.logindata=true;
                this.registdata=false;
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
            },
            boxregist:function () {
                this.registdata=true;
                this.logindata=false;
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;

            },
            disapper:function () {
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                this.logindata=false;
                this.registdata=false;
            },
            relogin:function () {
                this.logindata=true;
                this.registdata=false;
            },
            regist(){
                this.logindata=false;
                this.registdata=true;
            }
        }
    }
</script>

<style scoped>
    .show{display: none;}
    /*Head*/
    .Head{width: 100%;height: 165px;background:url(../assets/shadow.png);color: #fff;position: absolute;z-index:99;
        top: 0;}
    .Head .title{height:80px;margin:0 auto;width:530px;font-size:48px;line-height:110px;font-family: "Bebas";letter-spacing:8px;cursor: default;user-select: none;-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;}
    .Head .menu{height:80px;margin:40px auto 0;width:780px;font-size:20px;}
    .Head .menu a{text-decoration:none;margin:0 12px 0;color:#fff;font-family:PingFangSC-Regular,simhei, sans-serif;padding:0 12px 10px; }
    .Head .menu a:hover{border-bottom:#f99b1d solid 3px;}
    .Head .account{left: 50%;position: absolute;margin: 0 0 0 360px;}
    .Head .account a{text-decoration:none;font-size:14px;color:#fff;}
    .Head .account img{height: 40px;width:40px;border-radius: 20px;margin-top: -25px;}
    .Head .account .menu{vertical-align: top;}
    .footShadow{display:block;width: 100%; height: 100%; z-index: 500; background: #000; position: fixed; top: 0; opacity: 0.7;}
    .Head .account .menuDiv{background:#fff;border-radius:5px;width: 100px;overflow: hidden;margin: 14px 0 0 -26px;}
    .Head .account .menuDiv a{width: 80px;height: 16px;float: left;color: #000;display: block;line-height: 16px;margin:10px;text-align:center;}
    /*Head end*/






</style>