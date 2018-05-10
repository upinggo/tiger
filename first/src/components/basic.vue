<template>
    <div class="accountDetail">
        <div class="baseInfo">
            <div class="title">
                基本信息
                <a @click="submitbasic" href="javascript:void(0);" class="save_user_info">保存</a>
            </div>
            <div class="list">
                <div class="th">会员号</div>{{id}} <br>
                <div class="th">注册时间</div>{{add_time}}                <br>
                <div class="th">昵称</div>
                <input class="text" type="text" id="nickname" v-model="nickname" value="">
                <br>
                <div class="th">性别</div><input class="radio" v-model="sex" type="radio" name="sex" value="gentleman">男<input class="radio" v-model="sex" type="radio" name="sex" value="lady">女
                <br>
                <div class="th">出生日期</div>
                <el-date-picker
                        v-model="brithday"
                        type="date"
                        :editable="false"
                        prefix-icon="a"
                        :picker-options="attr"
                        value-format="yyyy-MM-dd"
                        size="mini">
                </el-date-picker>

                <br>
                <div class="th">居住地</div>
                <select @change="getcity" class="text select province" name="province" id="province">
                    <option value="">请选择</option>
                    <option v-for="(v,k) in province" :selected="v.id==provincenum"  :value="v.id">{{v.name}}</option>
                </select>
                <select @change="getdistrict" class="text select2 city" name="city" id="city">
                    <option value="">请选择</option>
                    <option v-for="(v,k) in city" :selected="v.id==citynum" :value="v.id">{{v.name}}</option>
                </select>
                <select class=" select2 text " name="district" id="district">
                    <option value="">请选择</option>
                    <option v-for="(v,k) in district" :selected="v.id==districtnum" :value="v.id">{{v.name}}</option>
                </select>
                <br>
                <div class="th">邮箱</div><input class="text" type="text" name="email" v-model="email" value="">
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
                    <input type="file" @change="uploadimg"  name="photo" accept="image/png,image/jpg,image/gif,image/JPEG" class="photo_form" value="">( 请上传1mb以内，正方形图片作为头像。)
                </form>
                <div class="overviewPhoto">
                    <img v-if="photo==''" class="photoValue photo_value" src="../../static/img/no_img.jpg" alt="">
                </div>
                <div class="wrapper" v-if="photo!=''">
                    <vueCropper
                            ref="cropper"
                            :img="example.img"
                            :autoCrop="example.autoCrop"
                            :fixedBox="example.fixedBox"
                            :fixed="true"
                    ></vueCropper>
                </div>


                <a class="save_photo" href="javascript:void(0);">保存</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "basic"
    }
</script>

<style scoped>
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
        width:10%;
        cursor: pointer;
    }
    #uploadimg{
        position: absolute;
        padding: 2px 5px;
        cursor: pointer;
        line-height:20px;height:20px;border-radius:5px;background:#f99b1d;color:#fff;text-align:center;
    }
</style>