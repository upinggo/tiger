<template>
    <div>
        <div v-if="notoken" class="account">
            <a href="javascript:void(0);" @click="boxlogin" class="login">登录</a> | <a href="javascript:void(0);" @click="boxregist" class="regist">注册</a>
        </div>
        <div @click="show" v-if="!notoken" class="account">
            <router-link to="/accountcenter" class="menu">
                <img src="../../static/img/default_head.jpg">
                未命名昵称</router-link>
            <div v-if="showDiv" class="menuDiv">
                <router-link to="/accountcenter">基本信息</router-link>
                <router-link to="/accountcenter">我的积分</router-link>
                <a @click="logout" href="javascript:void(0);">退出</a>
            </div>
        </div>
        <div v-bind:class="{show:isshow,footShadow:isfoot}" @click="disapper"></div>
        <Login v-if="logindata" @regist="regist"></Login>
        <Regist  v-if="registdata" @relogin="relogin"></Regist>
    </div>
</template>

<script>
    import Regist from '../components/regist';
    import Login from '../components/login';
    export default {
        components:{Login,Regist},
        name: "account",

        data(){
            return{
                isshow:true,
                isfoot:false,
                logindata:false,
                registdata:false,
                notoken:true,
                showDiv:false
            }
        },
        mounted(){
           if(this.GLOBAL.token!=null){
               this.notoken=false;
           }
           else{
               this.notoken=true;
           }
        },
        methods:{
            show(){
                this.showDiv=!this.showDiv;
            },
            logout(){
                var that=this;
                $.ajax({
                    type:'post',
                    beforeSend: function(request) {
                        request.setRequestHeader("token", that.GLOBAL.token);
                    },
                    url:that.GLOBAL.url+"/v1/ApiAccount-logout.htm",
                    success:function(json) {
                        var data = JSON.parse(json);
                    }
                })
                this.GLOBAL.token=null;
                sessionStorage.clear();
                this.$router.push({path:'/'});
            },
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
     .account{top:75px;left: 50%;position: absolute;margin: 0 0 0 360px;}
     .account a{text-decoration:none;font-size:14px;color:#fff;}
     .account img{height: 40px;width:40px;border-radius: 20px;margin-top: -25px;}
     .account .menu{vertical-align: top;}
    .footShadow{display:block;width: 100%; height: 100%; z-index: 500; background: #000; position: fixed; top: 0; opacity: 0.7;}
     .account .menuDiv{background:#fff;border-radius:5px;width: 100px;overflow: hidden;margin: 14px 0 0 -26px;}
     .account .menuDiv a{width: 80px;height: 16px;float: left;color: #000;display: block;line-height: 16px;margin:10px;text-align:center;}
     .show{display: none;}
</style>