<template>
    <div class="main">
        <div class="page One " style="display: none;">
            <img class="oneFont" src="../../../static/img/givemeachance/onefont.png">
            <a class="next" href="javascript:void(0);"><img src="../../../static/img/givemeachance/next.png"></a>
        </div>
        <div class="page Two hide" style="display: block;">
            <div class="send_info sendInfo">
                <input class="text" type="hidden" name="source" value="givemeachance">
                *姓&nbsp;&nbsp;&nbsp;&nbsp;名<input class="text" type="text" name="name" value="">
                <br>
                *手机号<input class="text" type="text" name="phone" value="">
                <br>
                *地&nbsp;&nbsp;&nbsp;&nbsp;址：
                <select class="text select province" name="province" id="province">
                    <option value="">请选择</option>
                    <option value="北京市" data-value="110000">北京市</option>
                    <option value="天津市" data-value="120000">天津市</option>
                    <option value="河北省" data-value="130000">河北省</option>
                    <option value="山西省" data-value="140000">山西省</option>
                    <option value="内蒙古自治区" data-value="150000">内蒙古自治区</option>
                    <option value="辽宁省" data-value="210000">辽宁省</option>
                    <option value="吉林省" data-value="220000">吉林省</option>
                    <option value="黑龙江省" data-value="230000">黑龙江省</option>
                    <option value="上海市" data-value="310000">上海市</option>
                    <option value="江苏省" data-value="320000">江苏省</option>
                    <option value="浙江省" data-value="330000">浙江省</option>
                    <option value="安徽省" data-value="340000">安徽省</option>
                    <option value="福建省" data-value="350000">福建省</option>
                    <option value="江西省" data-value="360000">江西省</option>
                    <option value="山东省" data-value="370000">山东省</option>
                    <option value="河南省" data-value="410000">河南省</option>
                    <option value="湖北省" data-value="420000">湖北省</option>
                    <option value="湖南省" data-value="430000">湖南省</option>
                    <option value="广东省" data-value="440000">广东省</option>
                    <option value="广西壮族自治区" data-value="450000">广西壮族自治区</option>
                    <option value="海南省" data-value="460000">海南省</option>
                    <option value="重庆市" data-value="500000">重庆市</option>
                    <option value="四川省" data-value="510000">四川省</option>
                    <option value="贵州省" data-value="520000">贵州省</option>
                    <option value="云南省" data-value="530000">云南省</option>
                    <option value="西藏自治区" data-value="540000">西藏自治区</option>
                    <option value="陕西省" data-value="610000">陕西省</option>
                    <option value="甘肃省" data-value="620000">甘肃省</option>
                    <option value="青海省" data-value="630000">青海省</option>
                    <option value="宁夏回族自治区" data-value="640000">宁夏回族自治区</option>
                    <option value="新疆维吾尔自治区" data-value="650000">新疆维吾尔自治区</option>
                    <option value="新疆建设兵团" data-value="990000">新疆建设兵团</option>
                </select>
                <select class="text select2 city" name="city" id="city">
                    <option value="">请选择</option>
                </select>
                <select class="text select2" name="district" id="district">
                    <option value="">请选择</option>
                </select>
                <p>
                    抽奖规则：
                    <br>
                    1、中奖后，请自行记录（截屏）兑换码，遗失不补。
                    <br>
                    2、兑换码只能在信息填报的省份活动中使用。
                    <br>
                    3、兑换码使用方法：关注公众号“胡彦斌”实时公布的行程，依照当次活动报名方式兑换参与资格。
                </p>
                <a class="saveSubmit" id="save_submit" href="javascript:void(0);">确&nbsp;&nbsp;认&nbsp;&nbsp;提&nbsp;&nbsp;交</a>
            </div>
            <a class="next2" href="javascript:void(0);"></a>
        </div>
        <div class="page Three hide">
            <div class="loading"><img src="../../../static/img/givemeachance/loading.gif"></div>
            <a class="next3" href="javascript:void(0);"></a>
        </div>
        <div class="page Four hide">
            <div class="result">
                <div class="tryAgain try_again hide">
                    <img src="../../../static/img/givemeachance/fourfontagain.png">
                </div>
                <div class="hasCode has_code hide">
                    <img src="../../../static/img/givemeachance/fourfonthad.png">
                </div>
                <div class="Success success hide">
                    <img src="../../../static/img/givemeachance/fourfont.png">
                    <div class="code Code"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "givemeachance"
    }
</script>

<style scoped>
    body{-webkit-text-size-adjust:none;background:#fad965;margin: 0; padding: 0;}
    .main{width:100%;height:100%;overflow: hidden;position: relative;background: url(../../../static/img/givemeachance/backgroundPC.jpg) repeat center 0 #fff;}
    .main .page{width:100%;height:100%;overflow: hidden;overflow-y:scroll;}
    .main video{width:100%;}
    .page .imageOne{width:100%;z-index:-1;}
    .page .shadow{width:16%;height:100%;position:fixed;z-index: 9;}
    .shadow .img{height:100%;background:#000;opacity:0.8;}
    .shadow img{height:91%;margin:80px 47px 0;}
    .page .shadow2{width:100%;height:100%;position:fixed;z-index: 8;background: #000;opacity: 0.8;}
    .page .share{width:100%;height:100%;position:fixed;z-index: 9;}
    .page .share img{width: 48%;margin-left: 44%;margin-bottom:150px;}
    .page .share .wechat{width:84%;margin-left:8%;}
    .autoWrite{margin:230px 0 0 120px;background:#fff;width:700px;position: absolute;top:0;z-index: 1;}
    .autoWrite span{font-size:46px;font-weight:bold;}

    .sendInfo{width:400px;margin:90px auto;background-color:#000;opacity:0.7;border-radius: 15px;color:#fff;padding:40px 55px 50px;font-size:20px;line-height:46px;}
    .sendInfo .text{background: none;color:#999 ;border:solid 1px #989898;border-radius:15px;padding:12px 0 12px 10px;margin:0 0 15px 10px;width:310px;}
    .sendInfo .select{width:auto;min-width: 140px;}
    .sendInfo .select2{width:auto;margin:0 0 15px 104px;min-width: 140px;}
    .sendInfo .textarea{height:755px;line-height: 92px;margin:-5% 0 130px 20%;}
    .sendInfo .saveSubmit{background:#f2a035;border-radius:12px;height:50px;color:#fff;width:150px;display:block;text-decoration:none;text-align:center;line-height:50px;margin:0px auto;}
    .sendInfo .saveSubmit img{width: 30%;margin-left:33%;}
    .sendInfo p{font-size:16px;line-height:32px}
    .List{width:100%;font-size:100px;}

    .next{margin-left:-21px;width:42px;left:50%;position:fixed; bottom:0}
    .next img{width:42px;}
    .next2{background:url("../../../static/img/play.png") 95px 99px no-repeat ;position: absolute;line-height:0;font-size:0;width:300px;height:300px;top: 855px;left:270px;}
    .next3{position: absolute;bottom:100px;left:385px;}
    .next3 img{width:200px;}
    .hide{display:none;}
    .hide2{opacity:0;}
    .main .One{background: url(../../../static/img/givemeachance/backgroundonePC.jpg) no-repeat center 0;}
    .oneFont{margin-left:-329px;left:50%;position:fixed; bottom:90px}
    .main .Two{background: url(../../../static/img/givemeachance/backgroundonePC.jpg) no-repeat center 0;}
    .main .Three{background: url(../../../static/img/givemeachance/backgroundthreePC.jpg) repeat center 0;}
    .loading img{width: 310px;margin-left: -155px;top: 240px;/* display: block; */position: fixed;left: 50%;}
    .main .Four{}
    .tryAgain img{margin: 165px auto 0;display: block;}
    .hasCode img{margin: 165px auto 0;display: block;}
    .Success img{margin: 100px auto 0;display: block;}
    .Code{width: 100%;margin: 20px auto;font-size: 30px;height: 30px;color: #fff;position: absolute;text-align: center;top: 372px;}

</style>