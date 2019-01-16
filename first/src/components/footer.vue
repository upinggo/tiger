<template>
    <div class="Foot">
        <div class="Bar">
            <div class="BarL">
                <a href="#">移动版</a>
                <span>|</span>
                <a href="javascript:void(0);" @click="about_us">关于我们</a>
                <span>|</span>
                <a href="javascript:void(0);" @click="contact_us" >联系我们</a>
                <span>|</span>
                <a href="javascript:void(0);" @click="business">商业合作</a>
                <span>|</span>
                <a href="javascript:void(0);" @click="add_fans">加入Fans团</a>
                <hr class="clear hr">
                <div  class="beian">
                <a  href="http://www.miitbeian.gov.cn/">
                    京ICP备17067685-1号
                </a> 
                <span>|</span> <a href="javascript:void(0);">
                    北京太歌影视音乐有限公司
                </a></div>
            </div>
        </div>
        <div v-bind:class="{show:isshow,footShadow:isfoot}" @click="disapper"></div>
        <div class="footWindow">
            <img class="closeFoot" @click="close" src="../assets/img/close.png">
            <img class="bodyFoot" :src="url">
        </div>
    </div>
</template>

<script>
    import aboutus from '../assets/img/aboutus.png';
     import contactus from '../assets/img/contactus.png';
    import businessus from '../assets/img/business.png';
    import addfansus from '../assets/img/addfans.png';
    export default {
        name: "bannerfoot",
        data(){
            return{
                isshow:true,
                isfoot:false,
                url:''
            }
        },
        methods:{
            close:function () {
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                $(".footWindow").hide();
            },
            about_us:function () {
                $(".footWindow").show();
                $(".footWindow").height("568px");
                $(".footWindow").width("915px");
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                this.url=aboutus;
                var testContTop = ($(window).height() - $(".footWindow").height()) / 2;  //计算弹出的框距离页面顶部的距离
                var testContWidth = ($(window).width() - $(".footWindow").width()) / 2;  //计算弹出的框距离页面左边的距离
                $(".footWindow").css({
                    "top": testContTop,
                    "left": testContWidth
                });

            },
            contact_us:function () {
                $(".footWindow").show();
                $(".footWindow").height("568px");
                $(".footWindow").width("915px");
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                this.url=contactus;
                var testContTop = ($(window).height() - $(".footWindow").height()) / 2;  //计算弹出的框距离页面顶部的距离
                var testContWidth = ($(window).width() - $(".footWindow").width()) / 2;  //计算弹出的框距离页面左边的距离
                $(".footWindow").css({
                    "top": testContTop,
                    "left": testContWidth
                });
            },
            business:function () {
                $(".footWindow").show();
                $(".footWindow").height("167px");
                $(".footWindow").width("696px");
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                this.url=businessus;
                var testContTop = ($(window).height() - $(".footWindow").height()) / 2;  //计算弹出的框距离页面顶部的距离
                var testContWidth = ($(window).width() - $(".footWindow").width()) / 2;  //计算弹出的框距离页面左边的距离
                $(".footWindow").css({
                    "top": testContTop,
                    "left": testContWidth
                });
            },
            add_fans:function () {
                $(".footWindow").show();
                $(".footWindow").height("568px");
                $(".footWindow").width("915px");
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                this.url=addfansus;
                var testContTop = ($(window).height() - $(".footWindow").height()) / 2;  //计算弹出的框距离页面顶部的距离
                var testContWidth = ($(window).width() - $(".footWindow").width()) / 2;  //计算弹出的框距离页面左边的距离
                $(".footWindow").css({
                    "top": testContTop,
                    "left": testContWidth
                });
            },
            disapper:function () {
                this.isshow=!this.isshow;
                this.isfoot=!this.isfoot;
                $(".footWindow").hide();
this.url='';
            }
        }
    }
</script>

<style scoped>
    .show{display: none;}
    /*Foot*/
    .Foot{width: 100%;height:270px;background-color: #282828;color: #656666;overflow: hidden;}
    .Foot .Bar{width:1200px;margin:0 auto;height:230px;}
    .Foot .Bar .BarL{width:700px;margin:70px auto 0;}
    .Foot a{
        text-decoration: none;
    }
    .Foot .Bar .BarL a,.Foot .Bar .BarL span{color:#656666;margin:0 14px 45px;display:block;float:left;font-family:PingFangSC-Regular,simhei, sans-serif;font-size:17px;height: 28px;line-height: 28px;}
    .Foot .Bar .BarL>a:first-child{background:url('../assets/img/mobile.jpg') no-repeat scroll ;padding-left: 25px}
    .Foot .Bar .BarL p{margin:20px 0 0 0 ;text-align: center;}
    .Foot .Bar .BarL p:first-child{margin:45px 0 0 0 ;}
    .Foot .Bar .BarR{float:left;margin:70px 0 0 72px;}
    .Foot .Bar .BarR img{width:137px;}
    .clear{
        clear: both;
        height: 0;
    }
    .footShadow{width: 100%; height: 100%; z-index: 500; background: #000; position: fixed; top: 0; opacity: 0.7;}
    .footWindow{position: fixed;top: 0;left: 0;color: #ffc700;display:none ;z-index: 501; }
    .closeFoot{position: absolute;right: -40px;top: -36px;background:none;}
    .bodyFoot{background:none;}
    .Foot .Bar .BarL div.beian a, .Foot .Bar .BarL div.beian span {
    float: none;
    display: inline-block;
    font-size: 10px;
}.Foot .Bar .BarL div.beian {
    display: block;
    text-align: center;
}
</style>