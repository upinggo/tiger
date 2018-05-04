<template>
    <div class="registWindow loginWindow login_window">
        <p>TIGER.HU.FANS.CLUB</p>
        <p class="p2"> 用户登录 </p>
        <input class="text phone" type="text" name="phone" value="" placeholder="手机号">
        <input class="text password" type="password" name="password" value="" placeholder="输入密码">
        <a class="bottom do_login" @click="login" href="javascript:void(0);">登录</a>
        <p class="underText">没有账号？<a href="javascript:void(0);" @click="regist" class="regist">注册</a></p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                token:null
            }
        },

        methods:{
            regist(){
                this.$emit('regist');
            },
            login(){
                var that=this;
                $.ajax({
                    type:"post",
                    data:{
                        phone:$(".phone").val(),
                        password:$(".password").val(),
                    },
                    url:that.GLOBAL.url+"/v1/ApiAccount-login.htm",
                    success:function(json) {
                        var data=JSON.parse(json);
                        that.token=data.token;
                        if(that.token!=null){
                            that.$router.push({path:'/index'})
                        }

                    }
                })
            }
        }
    }
</script>

<style scoped>
    .registWindow{position: fixed;top: 30%;left: 30%;color: #ffc700;z-index: 501;background:#fff;width:440px;height:450px;padding:30px 50px 70px;border-radius:15px}
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