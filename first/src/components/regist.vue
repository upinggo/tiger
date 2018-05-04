<template>
    <div class="registWindow regist_window">
        <p>TIGER.HU.FANS.CLUB</p>
        <p class="p2"> 新用户注册 </p>
        <select class="text phoneFix" name="phone_fix">
            <option value="086">中国+86</option>
        </select><input class="text phone" type="number" name="phone" value="" placeholder="   手机号">
        <input class="text code" type="text" name="code" value="" placeholder="   请输入验证码"><a @click="sendCode" id="getCode" class="getCode" href="javascript:void(0);">获取短信验证码</a>
        <input class="text" type="password" name="password" value="" id="pswd" placeholder="   输入密码">
        <input class="text" type="password" name="cfn_password" value="" id="confirm" placeholder="   再次输入密码">
        <p class="warning"></p>
        <a class="bottom do_regist" href="javascript:void(0);" @click="regist">注册</a>
        <p class="underText">已有账号？<a href="javascript:void(0);" @click="relogin" class="login">登录</a></p>
    </div>
</template>

<script>
    export default {
        name: "regist",
        data () {
            return {
                time:60,
                timer:true,
                allow:false,
            }
        },
        methods:{
            relogin(){
               this.$emit('relogin');
            },
            regist(){
                if(this.allow){
                    var psd=$("#pswd").val();
                    var cpsd=$("#confirm").val();
                    if(psd!=cpsd){
                        $(".warning").text("两次密码不一致，请重新输入！")
                    }
                    else{
                        var that=this;
                        $(".warning").text("");
                        $.ajax({
                            type:"post",
                            data:{
                                phone:$(".phone").val(),
                                password:psd,
                                code:$(".code").val(),
                                cfn_password:cpsd
                            },
                            url:that.GLOBAL.url+"/v1/ApiAccount-regist.htm",
                            success:function(json) {
                                var data=JSON.parse(json);
                                console.log(data);
                                if(data.success){
                                    $(".warning").text("注册成功，请点击登录")
                                }
                                else{
                                    $(".warning").text("注册未成功")
                                }

                            }
                        })
                    }
                }
            },
            sendCode(){
                var pnum=$('.phone').val();
                var myreg=/^[1][3,4,5,6,7,8][0-9]{9}$/;
              if(!myreg.test(pnum)){
                  $(".warning").text("请输入正确的手机号！");
                  return false;
              }
              else{
                  var that=this;
                  $(".warning").text("");
                  if(this.timer){
                  $.ajax({
                      type:"get",
                      url:that.GLOBAL.url+"/v1/ApiSms-sendRegistSms.htm?phone="+pnum,
                      success:function(json) {
                          var data=JSON.parse(json);
                          if(data.success){

                                  that.timer=false;
                                  var timer=setInterval(function () {
                                          if (that.time == 0) {
                                              $("#getCode").text("获取短信验证码");
                                              clearInterval(timer);
                                              that.timer=true;
                                              that.time=60;
                                          }else{
                                              $("#getCode").text(that.time + "s后再次获取");
                                          }
                                          that.time--;
                                      }
                                      ,1000);

                              that.allow=true;
                          }
                          else {
                              $(".warning").text("该手机号已注册！");
                          }
                      }
                  })}
              }
            },
        }

    }
</script>

<style scoped>
    .registWindow p.warning{color:red;line-height: 14px;margin-bottom: 20px;}
    .registWindow{position: fixed;top: 25%;left: 25%;color: #ffc700;z-index: 501;background:#fff;width:440px;height:450px;padding:30px 50px 70px;border-radius:15px}
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