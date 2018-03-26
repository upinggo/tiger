<template>
    <div>
        <div class="SlideShow slide_show">
            <img v-lazy="'../../static/img/firstpage/slide.jpg'" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="trible"><l>SHARE</l> | 分享</span>
            </div>
            <div class="subTitle">
                <div>分享TIGER.HU的生活态度</div>
                <div class="subname">【生活.美食.乐趣.音乐】</div>
            </div>
            <div class="context">
                <div style="float: left;" v-for="(v,k) in share">
                <div :id="k" @mouseleave="leave(k)" class="detail" :class="{ leaveOne:k%3==0}">
                        <p>TIGER.HU'S SHARE</p>
                        <p>胡/彦斌.精选推荐</p>
                        <p>{{v.overview}}</p>
                    <a :href="'http://'+v.link">
                    <div class="button">点击查看</div>
                    </a>
                </div>
                <div v-on:mouseenter="enter(k)" class="produce" :class="{ leaveOne:k%3==0}">
                    <img v-lazy="'http://tigerhuclub.com'+v.src" alt="">
                    <div class="describe">
                        <div class="userpic"><img v-lazy="logourl" alt=""></div>
                        <div class="text">
                            <p>TIGER.HU'S SHARE</p>
                            <p>胡/彦斌.精选推荐</p>
                        </div>
                    </div>
                </div>
                </div>



                <!--分页-->
                <div class="currentPage">
                    <div class="page_left">
                    </div>
                    <div class="page_right">
                        <!--currentPage-->
                        <span v-if="total!=0"  @click="lastone()" class="firstA">&lt;</span>
                        <span v-if="total!=0" v-for="n in page" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

                        <span v-if="total!=0" @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
                    </div>
                    <div class="clear"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sharebody",
        data(){
            return{
                total:0,
                page:0,
                pagesize:9,
                currentPage:1,
                logourl:'../static/img/firstpage/blogo.jpg',
                share:[],
            }
        },
        methods:{
            enter(n){
                $("#"+n).show();
                $("#"+n).next().hide();

            },
            change(n){
                this.currentPage=n;
                this.useajax();
            },
            lastone(){

                if(this.currentPage==1){}
                else{this.currentPage=this.currentPage-1;
                    this.useajax();
                }
            },
            nextone(){
                if(this.currentPage==Math.ceil(this.total/this.pagesize)){

                }
                else{this.currentPage=this.currentPage+1;
                    this.useajax();
                }
            },
            leave(n){
                // console.log(n)
                // this.$refs
                $("#"+n).hide();
                $("#"+n).next().show();

            },
            useajax(currentPage,pagesize) {
                pagesize=this.pagesize
                currentPage=this.currentPage;
console.log(this.GLOBAL.url);
                this.$nextTick(()=>{
                    var that=this;

                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-share.htm",
                        success:function(json) {
                            var data = JSON.parse(json);
                            window.document.title=data.title;
                            // console.log(data);
                            that.share=data.share;
                            that.total=data.total;
                            that.page=Math.ceil(data.total/data.pagesize);
                        }
                    });

                });
            }
        },
        mounted(){
            this.useajax();
        },
        created(){},
    }
</script>

<style scoped>
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow img{width:100%;}
    .SlideShow .img{position: absolute;z-index:9;}
    .Body{width:1200px;min-height:400px;margin:0 auto;overflow: hidden;}
    .Body .Title{height:48px;padding:34px 0 0;}
    .Body .Trible .trible{width:1200px;}
    .Body .Title span{height:48px;font-size:36px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;line-height:48px;width:600px;text-align: center;float:left;}
    .subTitle{
        padding-top: 62px;

    }
    .subTitle div{height: 25px;line-height: 25px ;font-size:25px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;
    text-align: center;}
    .subTitle .subname{
        height: 20px;line-height: 20px ;font-size:20px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:200;
        text-align: center;
        padding-top: 28px;
        color: rgb(181,185,186);
    }
    .context{
        padding-top: 60px;
        padding-bottom: 160px;
        position: relative;
        float: left;
    }
    .context .detail{
        width: 286px;
        height: 302px;
        background-color: #f6f6f6;
        border: 1px solid #c8c8c8;
        border-radius: 20px;
        float: left;
        position: relative;
        padding: 36px 44px;
        display: none;
        margin-left: 36px;
        margin-bottom: 36px;
    }
    .context .produce{
        width: 374px;
        height: 374px;
        border-radius: 20px;
        float: left;
        overflow: hidden;
        position: relative;
        border: 1px solid #c8c8c8;
        margin-left: 36px;
        margin-bottom: 36px;
    }
    .context .produce img{
        width: 100%;
    }
    .describe{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 86px;
        z-index: 100;
        background-color: white;
    }
    .describe .userpic{
        overflow: hidden;
        height: 62px;
        width: 62px;
        border-radius: 31px;
        margin: 12px;
        float: left;
    }
    .describe .userpic img{
        height: 112px;
        width: 169px;
        position: relative;
        left: -80px;
    }
    .describe .text{
        height: 42px;
        margin: 22px 0 22px 4px;
        float: left;
    }
    .describe .text p{
        height: 21px;
        line-height: 21px;
        font-size:15px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:200;
    }
    .context .leaveOne{
            margin-left: 0;
    }
    .detail p:first-child{
        text-align: center;
        margin-bottom: 18px;
        height:18px ;
        line-height: 18px;
        font-size:18px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;
    }
    .detail p{
        text-align: center;
        margin-bottom: 14px;
        height:14px ;
        line-height: 14px;
        font-size:14px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;
    }
    .detail p:nth-child(3){
        text-align: left;
        margin-bottom: 14px;
        height:168px ;
        line-height: 14px;
        font-size:14px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;
        color: #bfbfbf;

        /*word-break:break-all;*/
        /*display:-webkit-box;*/
        /*-webkit-line-clamp:12;*/
        /*-webkit-box-orient:vertical;*/
        overflow:hidden;
    }

    .detail .button{
        text-align: center;
        color: white;
        background-color: #f99b1d;
        width: 180px;
        height:40px ;
        line-height: 40px;
        font-size:14px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;
        position: absolute;
        bottom: 36px;
        left: 99px;
        border-radius: 20px;
    }
    /*page*/
    .currentPage{float: left;height: 50px;width: 1200px;line-height: 50px;font-size: 24px;font-family:PingFangSC-Regular,simhei, sans-serif;}
    .currentPage .page_right{text-align: center;}
    .currentPage .page_right .firstA{margin-right:95px;margin-left:0px;}
    .currentPage .page_right span{margin-left:40px;color:#979797;cursor:pointer;}
    .currentPage .page_right .lastA{margin-left:135px;}
    .currentPage .page_right .active{color:#fea83d;}
    .Middle .currentPage{width: 790px;}
    /*page end*/
</style>