<template>
    <div class="accountcenterbody">
        <div class="SlideShow slide_show">
            <img src="../../static/img/account_center.jpg" class="bg">
        </div>
        <div class="Body">
            <div class="accountOverview">
                <div class="headPhoto">
                    <img src="../../static/img/default_head.jpg">
                </div>
                <div v-if="nickname==null||nickname==''" class="nickname">未命名昵称</div>
                <div v-else class="nickname">{{nickname}}</div>
                <div class="menu">
                    <router-link class="main" to="">主页</router-link>
                    <router-link class="center hover" to="/">基本信息</router-link>
                    <router-link class="collect" to="">收藏</router-link>
                    <router-link class="point" to="/">积分</router-link>
                </div>
            </div>
            <div class="accountDetail">
                <div class="baseInfo">
                    <div class="title">
                        基本信息
                        <a href="javascript:void(0);" class="save_user_info">保存</a>
                    </div>
                    <div class="list">
                        <div class="th">会员号</div>{{id}} <br>
                        <div class="th">注册时间</div>{{add_time}}                <br>
                        <div class="th">昵称</div>
                        <input class="text" type="text" name="nickname" :placeholdeer="nickname" value="">
                        <br>
                        <div class="th">性别</div><input class="radio" type="radio" name="sex" value="gentleman">男<input class="radio" type="radio" name="sex" value="lady">女
                        <br>
                        <div class="th">出生日期</div><input class="text" type="text" name="brithday" id="brithday" :placeholder="brithday" value="" readonly="true">

                        <br>
                        <div class="th">居住地</div>
                        <select class="text select province" name="province" id="province">
                            <option value="">请选择</option>

                        </select>
                        <select class="text select2 city" name="city" id="city">
                            <option value="">请选择</option>
                        </select>
                        <select class=" select2 text " name="district" id="district">
                            <option value="">请选择</option>
                        </select>
                        <br>
                        <div class="th">邮箱</div><input class="text" type="text" name="email" :placeholder="email" value="">
                        <br>
                        <div class="th">手机</div>{{phone}}            </div>
                </div>
                <div class="baseInfo photoInfo">
                    <div class="title">
                        头像
                    </div>
                    <div class="list">
                        <span id="uploadimg">上传头像</span>
                        <form id="uploadPhoto" enctype="multipart/form-data">
                            <input type="file" name="photo" accept="image/png,image/jpg,image/gif,image/JPEG" class="photo_form" value="">( 请上传1mb以内，正方形图片作为头像。)
                        </form>
                        <div class="overviewPhoto">
                            <img v-if="photo==''" class="photoValue photo_value" src="../../static/img/no_img.jpg" alt="">
                            <img v-if="photo!=''" class="photoValue photo_value" :src="photo">
                        </div>
                        <a class="save_photo" href="javascript:void(0);">保存</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "accountcenterbody",

        mounted(){
            this.useajax(this.GLOBAL.token);
        },
        data(){
            return{
                sex:null,
                email:null,
                province:null,
                edit_time:null,
                brithday:null,
                city:null,
                district:null,
                add_time:null,
                phone:null,
                nickname:null,
                id:null,
                photo:null,
            }
        },
        methods:{
            useajax(token) {
                this.$nextTick(()=>{
                    var that=this;

                    $.ajax({
                        type:"get",
                        beforeSend: function(request) {
                            request.setRequestHeader("token", token);
                        },
                        url:that.GLOBAL.url+"/v1/ApiAccount-center.htm",
                        success:function(json) {
                            var data = JSON.parse(json);
                            console.log(data);
                            that.nickname=data.data.nickname;
                            that.id="TG"+data.data.id.padStart(8,"0");
                            that.add_time=data.data.add_time;
                            that.brithday=data.data.brithday;
                            that.phone=data.data.phone;
                            that.email=data.data.email;
                            that.photo=data.data.photo;
                        }
                    });

                });
            }
        },


    }
</script>

<style scoped>
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow img{width:100%;}
    .SlideShow .img{position: absolute;z-index:9;}
    .accountOverview{width:1200px;height:200px;overflow: hidden;}
    .accountOverview .headPhoto{width:200px;height:200px;position:absolute;left:50%;z-index: 30;margin: -100px 0 0 -100px;background:#fff;border-radius:100px;}
    .accountOverview .headPhoto img{height:180px;width:180px;border-radius:90px;margin:10px;}
    .accountOverview .nickname{margin:100px 0 0 0;height:50px;font-size:36px;line-height:40px;text-align:center;}
    .accountOverview .menu{margin:20px 0 0 0;height:50px;font-size:16px;line-height:16px;text-align:center;}
    .accountOverview .menu a{width:100px;display:inline-block;padding: 0 0 12px 0px;}
    .accountOverview .menu .hover{border-bottom:solid #f4a122 1px;}

    .accountDetail{background:#f4f4f4;width: 100%;padding:55px 0 0;overflow: hidden;}
    .accountDetail .baseInfo{width:748px;border-radius:15px;border:solid #7d7d7d 1px;margin:0 auto 40px;padding:15px 25px;}
    .accountDetail .baseInfo .title{height:20px;line-height:20px;border-bottom:dashed 1px #7d7d7d; font-size: 16px;padding:0 0 15px 0;}
    .accountDetail .baseInfo .title a{float: right;line-height:26px;width:55px;height:26px;border-radius:5px;background:#f99b1d;color:#fff;text-align:center;}
    .accountDetail .baseInfo .title p{float: right;width:55px;text-align:center;}
    .accountDetail .baseInfo .list{position:relative;padding: 10px 0;font-size: 16px;display: inline-table;margin:0;width:100%;}
    .accountDetail .baseInfo .list .th{line-height: 35px;width: 64px;display: inline-block;text-align: right;font-size: 16px;margin: 0px 30px 0 0;color: #4d4d4d;}
    .accountDetail .baseInfo .list .select{margin:0 15px 0 0;}
    .accountDetail .baseInfo .list .select2{margin:0 15px 0 0;}
    .accountDetail .baseInfo .thP{width: 100%;}
    .accountDetail .baseInfo .thP .th{width:45%;line-height: 35px;display: inline-block;text-align: left;font-size: 16px;margin:0 0 0 5%;color: #4d4d4d;}
    .accountDetail .baseInfo .thP .td{width:50%;line-height: 35px;display: inline-block;text-align: right;font-size: 16px;margin: 0;color: #4d4d4d;}
    .accountDetail .baseInfo .titleP{height:20px;line-height:20px;border-top:dashed 1px #7d7d7d;border-bottom:none; font-size: 16px;padding:15px 0 0 0;}
    .accountDetail .photoInfo{width:748px;border-radius:15px;border:solid #7d7d7d 1px;margin:0 auto 40px;padding:15px 25px;}
    .accountDetail .photoInfo .list{width:100%;}
    .accountDetail .photoInfo .photoValue{margin:10px 0 10px;width:200px;height:200px;float:none;cursor: none;}
    .accountDetail .photoInfo a{float: left;line-height:26px;width:55px;height:26px;border-radius:5px;background:#f99b1d;color:#fff;text-align:center;}
input[type='file']{
    opacity: 0;
    height: 24px;
    cursor: pointer;
}
    #uploadimg{
        position: absolute;
        padding: 2px 5px;
        line-height:20px;height:20px;border-radius:5px;background:#f99b1d;color:#fff;text-align:center;
    }
</style>