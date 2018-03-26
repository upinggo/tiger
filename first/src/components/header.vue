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
        <div class="registWindow regist_window" style="display: none;">
            <p>TIGER.HU.FANS.CLUB</p>
            <p class="p2"> 新用户注册 </p>
            <select class="text phoneFix" name="phone_fix">
                <option value="086">中国+86</option>
            </select><input class="text phone" type="text" name="phone" value="" placeholder="手机号">
            <input class="text code" type="text" name="code" value="" placeholder="请输入验证码"><a class="getCode get_code " href="javascript:void(0);">获取短信验证码</a>
            <input class="text" type="password" name="password" value="" placeholder="输入密码">
            <input class="text" type="password" name="cfn_password" value="" placeholder="再次输入密码">
            <a class="bottom do_regist" href="javascript:void(0);">注册</a>
            <p class="underText">已有账号？<a href="javascript:void(0);" @click="login" class="login">登录</a></p>
        </div>
        <div class="registWindow loginWindow login_window" style="display: none;">
            <p>TIGER.HU.FANS.CLUB</p>
            <p class="p2"> 用户登录 </p>
            <input class="text phone" type="text" name="phone" value="" placeholder="手机号">
            <input class="text" type="password" name="password" value="" placeholder="输入密码">
            <a class="bottom do_login" href="javascript:void(0);">登录</a>
            <p class="underText">没有账号？<a href="javascript:void(0);" @click="regist" class="regist">注册</a></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "bannerhead",
        data () {
            return {
                isshow:true,
                isfoot:false
            }
        },
        methods:{
            regist:function () {
                $(".login_window").hide();
              $(".regist_window").css({
                  "top": ($(window).height() - $(".regist_window").height()) / 2-30,
                  "left": ($(window).width() - $(".regist_window").width()) / 2-50,
                  "display":"block"
              });
            },
            login:function () {
                $(".regist_window").hide();
                $(".login_window").css({
                    "top": ($(window).height() - $(".login_window").height()) / 2-30,
                    "left": ($(window).width() - $(".login_window").width()) / 2-50,
                    "display":"block"
                });
            },
            boxlogin:function () {
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                var testContTop=($(window).height() - $(".login_window").height()) / 2;
                var testContWidth=($(window).width() - $(".login_window").width()) / 2;
                $(".login_window").css({
                    "top": testContTop-30,
                    "left": testContWidth-50,
                    "display":"block"
                });
            },
            boxregist:function () {
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                var testContTop=($(window).height() - $(".regist_window").height()) / 2;
                var testContWidth=($(window).width() - $(".regist_window").width()) / 2;
                $(".regist_window").css({
                    "top": testContTop-30,
                    "left": testContWidth-50,
                    "display":"block"
                });
            },
            disapper:function () {
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                $(".login_window").css({
                    "display":"none"
                })
                $(".regist_window").css({
                    "display":"none"
                })
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




    .registWindow{position: fixed;top: 0;left: 0;color: #ffc700;display:none ;z-index: 501;background:#fff;width:440px;height:450px;padding:30px 50px 70px;border-radius:15px}
    .registWindow p:first-child{color:#333;line-height: 45px;font-size: 36px; font-family: Bebas;letter-spacing: 6px;}
    .registWindow p{color:#999;line-height: 86px;font-size: 14px; text-align: center;letter-spacing: 3px; }
    .p2:before,.p2:after {content: " ";position: relative;display: inline-block;width: 38%;  height: 1px;vertical-align: middle;  background: #999;}
    .registWindow .text{text-overflow: ellipsis;overflow: hidden;white-space: nowrap;margin-bottom:20px;height: 35px;width:436px;}
    .registWindow .phoneFix{height: 41px;width:134px;vertical-align: bottom;line-height: 37px;-webkit-appearance: menulist-button;}
    .registWindow .phone{width: 300px;}
    .registWindow .code{width: 300px;border: solid #999 1px;padding:2px 0;border-right: 0;}
    .registWindow .getCode{border: solid #999 1px;width: 138px;display: inline-block;height: 39px;line-height: 39px;border-left: 0;letter-spacing: 5px;font-size:14px;color:#f99b1d;}
    .registWindow .bottom{width:440px;height:40px;border-radius:5px;background: #f99b1d;color:#fff;font-size:16px;text-align: center;letter-spacing: 10px;display:inline-block;line-height: 40px;}
    .registWindow .underText{width:440px;height:40px;text-align:right;}
    .registWindow .underText a{color:#f99b1d;}
    .loginWindow{height: 320px;}
    .loginWindow .phone{width: 436px;}

</style>