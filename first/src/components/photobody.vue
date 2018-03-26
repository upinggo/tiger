<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../assets/img/index_photo.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>PHOTO</l> | 照片</span>
            </div>
            <div class="List Line Middle">
                <div class="Right">
                    <div class="albumRight">
                        <div class="title">
                            NEW ALBUM
                            <router-link to="/album">MORE &gt;</router-link>
                        </div>
                        <div class="albumOverview">
                            <img v-lazy="albumsrc">
                            <span class="lineOne">专辑名称：{{album.name}}</span>
                            <span class="lineOne">歌手：{{album.minstrel}}</span>
                            <span class="lineTwo">{{album.style}}</span>
                            <span class="lineTwo">发行时间：{{album.publish_time}}</span>
                            <p class="overview">专辑介绍：</p>
                            <p class="overviewDetail">{{album.overview}}
                            </p>
                        </div>
                    </div>
                    <div class="albumRight videoRight">
                        <div class="title">
                            MUSIC VIDEO
                            <router-link to="/video">MORE &gt;</router-link>
                        </div>
                        <div class="albumOverview videoOverview">
                            <div class="innerOverview" style="top:-0px">
                                <router-link v-for="(v,k) in video" :to="videolink[k]">
                                    <img v-lazy="videosrc[k]">

                                </router-link>

                            </div>
                        </div>
                        <div class="Point point">
                            <img @click="videochange(1)" class="a" src="../assets/img/mobile.jpg">
                            <img @click="videochange(2)" class="a" src="../assets/img/mobile.jpg">
                            <img @click="videochange(3)" class="a" src="../assets/img/mobile.jpg">
                        </div>
                    </div>
                </div>
                <div v-for="(v,k) in photo" class="Photo" :class="{leaveOne:k%2==0}">
                    <div class="row">
                        <div  class="rowImage">
                            <img v-lazy="photominsrc[k]" @click="open(photosrc[k])">
                            <!--<img class="hide" :src="photosrc[k]">-->
                        </div>
                    </div>
                </div>

                <div class="currentPage">
                    <div class="page_left">
                    </div>
                    <div class="page_right">
                        <!--currentPage-->
                        <span  @click="lastone()" class="firstA">&lt;</span>
                        <span v-for="n in page" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

                        <span  @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="shadle hide" @click="close()" style="display: none;"></div>
        <div class="photo_overview hide" id="photo_overview" style="visibility: hidden; display: none; left: 524.5px; top: 825px;">
            <img class="close" @click="close()" src="../assets/img/close.png">
            <img class="photo" src="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "photobody",
        data(){
            return{
                pagesize:4,
                currentPage:1,
                total:0,
                page:0,
                album:{},
                video:{},
                albumsrc:'',
                videolink:[],
                videosrc:[],
                videopage:1,
                videosize:4,
                photominsrc:[],
                photosrc:[],
                photo:[],

            }
        },
        mounted(){
            this.useajax();
            this.videoajax();

        },
        watch:{

        },
        created(){},
        methods:{
            close(){
                $(".shadle").hide();
                this.closeDiv("photo_overview");
            },
            open(o){
                $(".shadle").show();
                $(".photo_overview .photo").attr("src", o);
                this.openDiv("photo_overview");
            },
            closeDiv(obj) {
                var d = document.getElementById(obj);
                d.style.visibility = 'hidden';
                d.style.display = 'none';
            },
            openDiv(obj) {
                if (!document.getElementById(obj))
                    return false;
                var d = document.getElementById(obj);
                d.style.visibility = 'visible';
                d.style.display = 'block';
                var wd = window.top.document.documentElement.clientWidth - d.offsetWidth;
                var ht = window.top.document.documentElement.offsetHeight - d.offsetHeight;
                d.style.left = (wd / 2) + 'px';
                d.style.top = (ht / 2) + 'px';
                window.onresize = function () {
                    openDiv(obj);
                };
            },
            change(n){
                this.photominsrc=[];
                this.photosrc=[];
                this.photo=[];
                this.currentPage=n;
                this.useajax();
            },
            lastone(){

                if(this.currentPage==1){}
                else{this.currentPage=this.currentPage-1;
                    this.photominsrc=[];
                    this.photosrc=[];
                    this.photo=[];
                    this.useajax();
                }
            },
            nextone(){
                if(this.currentPage==Math.ceil(this.total/this.pagesize)){

                }
                else{this.currentPage=this.currentPage+1;
                    this.photominsrc=[];
                    this.photosrc=[];
                    this.photo=[];
                    this.useajax();
                }
            },
            videochange(n){
                this.videopage=n;
                this.videolink=[];
                this.videosrc=[];
                this.video={};
                this.videoajax();
            },
            videoajax(videopage,videosize){
                videopage=this.videopage;
                videosize=this.videosize;
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        // async:false,
                        url:that.GLOBAL.url+"/v1/ApiHome-video.htm?currentPage="+videopage+"&pagesize="+videosize,
                        success:function(json) {
                            var data = JSON.parse(json)
                            // console.log(data)
                            that.video=data.video;
                            var count=data.video.length;
                            for(var i=0;i<count;i++){
                                that.videosrc.push(that.GLOBAL.url+data.video[i].src);
                                that.videolink.push('/videodetail/'+data.video[i].id);
                            }

                        }
                    });

                });

            },
            useajax(currentPage,pagesize) {
                pagesize=this.pagesize
                currentPage=this.currentPage;

                this.$nextTick(()=>{
                    var that=this;

                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-photo.htm?currentPage="+currentPage+"&pagesize="+pagesize,
                        success:function(json) {
                            var data = JSON.parse(json);
                            window.document.title=data.title;
                            // console.log(data);
                            that.photo=[];
                            that.photominsrc=[];
                            that.photosrc=[];
                            that.total=data.total;
                            // that.video=data.video;
                            that.page=Math.ceil(data.total/data.pagesize);
                            that.album=data.album;
                            that.albumsrc=that.GLOBAL.url+data.album.src;
                            that.photo=data.photo;
                            var count=data.photo.length;
                            for(var i=0;i<count;i++){
                                that.photominsrc.push(that.GLOBAL.url+data.photo[i].src_min);
                                that.photosrc.push(that.GLOBAL.url+data.photo[i].src);
                            }
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
        float: left;}
    .Body .Title span l{height:48px;font-family:"Bebas";vertical-align:bottom;font-weight:500;}
    .Body{
        width: 1200px;
        min-height: 400px;
        margin: 0 auto;
        overflow: hidden;
    }
    .Body .List {
        width: 1200px;
        margin-bottom: 280px;
        overflow: hidden;
        padding: 10px 0 0 0;
    }
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    /*Photo*/
    .Body .List .Photo{width:374px;height:310px;float:left;margin:0 42px 42px 0;cursor:pointer;}
    .Body .List .Photo img{width:374px;height:310px;}
    .Body .List .Right{width:360px;float:right;height:650px;}
    .Body .List .Right .albumRight{width:358px;height:280px;border:#7d7d7d solid 1px; border-radius:16px;color:#7d7d7d;font-size: 12px;}
    .Body .List .Right .albumRight .title{line-height:18px; font-size: 18px;font-family: "Bebas";margin:20px 0 0 28px;color:#000;}
    .Body .List .Right .albumRight .title a{font-size: 10px; font-family: "Bebas"; background: #000; color: #fff; border-radius: 9px; line-height: 18px; height: 18px; display: block; text-align: center; width: 52px; float: right; margin-right: 28px;}
    .Body .List .Right .albumRight .albumOverview{margin:18px 0 0 28px;}
    .Body .List .Right .albumRight .albumOverview img{width:104px;height:104px;float:left;}
    .Body .List .Right .albumRight .albumOverview span{width:204px;float:left;line-height:12px; margin:8px 0 0 17px;}
    .Body .List .Right .albumRight .albumOverview .lineOne{color:#000;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .List .Right .albumRight .albumOverview p{width:304px;float:left;line-height:20px; margin:6px 0 0 0 ;}
    .Body .List .Right .albumRight .albumOverview .overview{ margin:14px 0 0 0 ;}
    .Body .List .Right .albumRight .albumOverview .overviewDetail{height: 60px;overflow: hidden;}
    .Body .List .Right .videoRight{height:300px;margin-top:50px;position: relative;}
    .Body .List .Right .videoRight .videoOverview{width: 312px; height: 204px; overflow: hidden;position: relative;}
    .Body .List .Right .videoRight .videoOverview .innerOverview{width: 312px;position:absolute;}
    .Body .List .Right .videoRight .videoOverview img{width:146px;height:92px;margin:0 10px 10px 0;cursor: pointer;}
    .Body .List .Right .videoRight .Point{position:absolute;bottom:23px;width:100%;overflow:hidden;text-align:center;vertical-align:middle;display:table-cell;height:6px;z-index:10;}
    .Body .List .Right .videoRight .Point .a{border-radius:3px;width:6px;height:6px;margin:0 5px 0 5px;cursor: pointer;}

    .photo_overview{z-index:501;position:absolute;border:0px ;background:#fff;border-radius:5px;visibility:hidden;}
    .photo_overview .close{right: -55px;top: -55px; position: absolute;background:none;}
    .photo_overview .photo{max-width: 1200px;max-height: 670px;}
    .Body .List .leaveOne{margin-left:0px;position: relative;}
    /*Photo end*/

    /*page*/
    .currentPage{float: left;height: 50px;width: 1200px;line-height: 50px;font-size: 24px;font-family:PingFangSC-Regular,simhei, sans-serif;}
    .currentPage .page_right{text-align: center;}
    .currentPage .page_right .firstA{margin-right:95px;margin-left:0px;}
    .currentPage .page_right span{margin-left:40px;color:#979797;cursor:pointer;}
    .currentPage .page_right .lastA{margin-left:135px;}
    .currentPage .page_right .active{color:#fea83d;}
    .Middle .currentPage{width: 790px;}
    /*page end*/
    .shadle{width: 100%; height: 100%; z-index: 500; background: #000; position: fixed; top: 0; opacity: 0.7;}

    .hide,.isHide{ display: none; }
</style>