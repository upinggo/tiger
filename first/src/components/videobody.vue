<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../assets/img/index_video.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>VIDEO</l> | 视频</span>
            </div>
            <div class="List Line">
                <div class="videoMenu">
                    <router-link to="/video/all" :class="{hover:type=='all'}">
                        全&nbsp;部
                    </router-link>
                    <router-link to="/video/mv" :class="{hover:type=='mv'}">
                        MV
                    </router-link>
                    <router-link to="/video/live" :class="{hover:type=='live'}">
                        现场LIVE
                    </router-link>
                    <router-link to="/video/joker" :class="{hover:type=='joker'}">
                        太牛樂
                    </router-link>
                    <router-link to="/video/concert" :class="{hover:type=='concert'}">
                        演唱会
                    </router-link>

                </div>
            </div>
            <div class="List ">
                <div v-for="(v,k) in video" class="Video" :class="{leaveOne:k%3==0}">
                    <div :class="{new:currentPage==1&&k==0}"></div>
                    <div class="row">

                        <div class="rowImage">
                            <router-link :to="link[k]">
                            <img v-lazy="src[k]" alt="#">
                            <img src="../assets/img/video_start.png" alt="背景" class="bgimg">
                            </router-link>
                        </div>

                        <div class="rowDown">
                            <p>{{v.name}}</p>
                            <p>{{v.minstrel}}</p>
                        </div>
                    </div>
                </div>
                <div class="currentPage">
                    <div class="page_left">
                    </div>
                    <div class="page_right">
                        <!--currentPage-->
                        <span v-if="page!=0" @click="lastone()" class="firstA">&lt;</span>
                        <span v-for="n in page" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

                        <span v-if="page!=0"  @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "videobody",
        data(){
          return{
              pagesize:6,
              currentPage:1,
              type:'all',
              video:[],
              src:[],
              page:0,
              link:[],
              total:0,


          }
        },
        mounted(){
            this.pagesize=6;
            this.currentPage=1;
            this.useajax();
        },
        watch:{
            '$route': 'changerouter'
        },
        methods:{
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
            changerouter(){
                this.link=[];
                this.useajax();
            },
            useajax(currentPage,pagesize) {
               var type;
                if(this.$route.params.type==undefined){
                    type='all';
                }
                else{
                    type=this.$route.params.type;
                }
                pagesize=this.pagesize
                currentPage=this.currentPage;
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-video.htm?type="+type+"&currentPage="+currentPage+"&pagesize="+pagesize,
                        success:function(json) {
                            var data = JSON.parse(json);
                            window.document.title=data.title;
                            // console.log(data)
                            that.type=data.type;
                            that.video=data.video;
                            var num=data.video.length;
                            for(var i=0;i<num;i++){
                                that.src[i]=that.GLOBAL.url+data.video[i].src
                                that.link.push('/videodetail/'+data.video[i].id)
                            }
                            that.page=Math.ceil(data.total/data.pagesize);
                            that.total=data.total;

                        }
                    })
                })

            },
        }
    }
</script>

<style scoped>
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow img{width:100%;}
    .SlideShow .img{position: absolute;z-index:9;}
    .Body .Trible{padding:34px 0 0;}
    .Body .Trible .trible{width:1200px;}
    .Body .Title{height:48px;padding:34px 0 0;}
    .Body .Title span{    height: 48px;
        font-size: 36px;
        font-family: PingFangSC-Semibold,simhei, sans-serif;
        font-weight: 700;
        line-height: 48px;
        width: 600px;
        text-align: center;
        float: left;

    }
    .Body .Title span l{height:48px;font-family:"Bebas";vertical-align:bottom;font-weight:500;}
    .Body{
        width: 1200px;
        min-height: 400px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }
    .Body .List {
        width: 1200px;
        margin-bottom: 280px;
        overflow: hidden;
        padding: 10px 0 0 0;
    }
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    /*Video*/
    .Body .List .videoMenu{line-height: 26px; font-size:26px;font-family: PingFangSC-Semibold,simhei, sans-serif;font-weight:700; }
    .Body .List .videoMenu a{padding:0 50px;border-left:#000 solid 2px;text-align: center;display: block;float:left;Letter-spacing:5px}
    .Body .List .videoMenu a:first-child{margin:0 0 0 120px;border-left:0px;}
    .Body .List .videoMenu .hover{color:#f99b1d;}
    .Body .List .Video{width:388px;height:357px;float:left;margin-left:18px;cursor:pointer;    position: relative;}
    .Body .List .Video img{width:388px;height:219px;}
    .Body .List .Video .rowDown{line-height: 20px;margin:10px 0 0 0;}
    .Body .List .Video .rowDown p{line-height: 20px;font-size:20px;margin:16px 0 0 0;color:#7d7d7d;font-family: PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .List .leaveOne{margin-left:0px;position: relative;}
    .Body .List .Video .rowDown p:first-child{color:#000;}
    a:hover { color: #800000; }
    .Body .List .new{background-image:url(../assets/img/new.jpg);width:62px;height:33px; position: absolute;left: 10px;top: -10px;}
    /*Video end*/
    .bgimg{
        position: absolute;
        top: 0;
        left: 0;
    }

    .currentPage{float: left;height: 50px;width: 1200px;line-height: 50px;font-size: 24px;font-family:PingFangSC-Regular,simhei, sans-serif;}
    .currentPage .page_right{text-align: center;}
    .currentPage .page_right .firstA{margin-right:95px;margin-left:0px;}
    .currentPage .page_right span{margin-left:40px;color:#979797;cursor:pointer;}
    .currentPage .page_right .lastA{margin-left:135px;}
    .currentPage .page_right .active{color:#fea83d;}
    .Middle .currentPage{width: 790px;}
</style>