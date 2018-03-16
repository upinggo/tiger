<template>
    <div>
        <div class="SlideShow slide_show">
            <img :src="srcs" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>MUSIC</l> | 音乐</span>
            </div>
            <div class="MusicDetail Line">
                <div class="CoverL">
                    <img :src="src">
                    <div class="play hide">
                        <audio class="music" id="myAudio" src="" >
                            你的浏览器不支持<code>audio</code>标签.
                        </audio>
                    </div>
                    <div class="info">
                        <p>{{num}} 首歌曲，{{long}}分钟</p>
                        <p class="play_all playALL" @click="startall(0)">全部播放</p>
                    </div>
                </div>
                <div class="CoverR">
                    <div class="name">{{name}}</div>
                    <div class="minstrel">歌手：{{singer}}</div>
                    <div class="styles">{{style}}</div>
                    <div class="overview">专辑详情：<p>{{detail}}</p></div>
                    <div class="musicS">
                        <div class="top">
                            <div class="song">歌曲</div>
                            <div class="minstrel">歌手</div>
                            <div class="duration">时长</div>
                        </div>
                        <div v-for="(item,index) in song" class="top songs" @click="trggle(index)" :class="{color:isshow[index],play:isplay[index]}" >
                            <div class="song">{{index+1}} {{item.name}}</div>
                            <div class="minstrel">{{item.minstrel}}</div>
                            <div class="duration">{{item.duration}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Title subTitle Trible ">
                <span class="simple sub trible"><l>TIGER.HU</l> | 更多专辑</span>
            </div>
            <div class="List subLine">
                <div v-for="(v,k) in album" class="subAlbum" :class="{leaveOne:k%4==0}">
                    <div class="row">
                        <div class="rowImage">
                            <router-link :to="id[k]">
                            <img :src="'http://tigerhuclub.com'+v.src">
                            </router-link>
                        </div>
                        <div class="rowDown">
                            <p>{{v.name}}</p>
                            <p>{{v.publish_time}}</p>
                        </div>
                    </div>
                </div>

                <div class="currentPage">
                    <div class="page_left">
                    </div>
                    <div class="page_right">
                        <!--currentPage-->
                        <span @click="lastone()" class="firstA">&lt;</span>
                        <span v-for="n in page" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

                        <span  @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail_album",
        data(){
            return{
                src:this.GLOBAL.url,
                srcs:this.GLOBAL.url,
                mp3src:[],
                name:'',
                long:0,
                id:[],
                num:0,
                singer:'',
                style:'',
                detail:'',
                song:[],
                isshow:[],
                isplay:[],
                album:[],
                currentPage:1,
                pagesize:4,
                page:0,
            }
        },
        mounted(){
this.useajax();
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'changerouter'
        },
        methods:{
            change(n){
                this.currentPage=n;
                this.id=[];
                this.useajax();

            },
            lastone(){

                if(this.currentPage==1){}
                else{this.currentPage=this.currentPage-1;
                    this.id=[];
                    this.useajax();
                }
            },
            nextone(){
                if(this.currentPage==Math.ceil(this.total/this.pagesize)){

                }
                else{this.currentPage=this.currentPage+1;
                    this.id=[];
                    this.useajax();
                }
            },
            changerouter(){
this.isshow=[];
this.isplay=[];
this.mp3src=[];
$("#myAudio")[0].load();
                this.useajax();
            },
            startall(i){
                var that=this;
                for(var a=0;a<this.mp3src.length;a++){
                    this.isshow[a]=false;
                    this.isplay[a]=false;
                }
                that.isshow[i]=true;
                that.isplay[i]=false;
                that.isshow.push(true);
                that.isshow.pop();
                this.isplay.push(true);
                this.isplay.pop();
                $("#myAudio").attr("src", this.mp3src[i]);
                $("#myAudio").trigger("load").trigger("play");
                i++;
                if (i < this.mp3src.length) {
                    var audio = document.getElementById('myAudio');
                    audio.addEventListener('ended', function () {
                        that.startall(i);
                    }, false);
                }

            },


            trggle(n){
                var num=this.isshow.length;
                var judge=this.isshow[n];
                if(judge){

                }else{
                    if(this.isplay[n]){}
                    else{$('#myAudio').attr("src",this.mp3src[n]);
                        $("#myAudio").trigger("load").trigger("play");}
                }
                for(var i=0;i<num;i++){
                    this.isshow[i]=false;
                    this.isplay[i]=false;
                }
                this.isshow[n]=!judge;
                if(this.isshow[n]){
                    this.isplay[n]=false;
                    $('#myAudio')[0].play();
                }else{
                    this.isplay[n]=true;
                    $('#myAudio')[0].pause();
                }
                //解决vue框架数组class绑定bug
                this.isshow.push(true);
                this.isshow.pop();
                this.isplay.push(true);
                this.isplay.pop();
            },
            useajax(idnum,currentPage,pagesize) {
                var s=this.$route.params.id;
                pagesize=this.pagesize
                currentPage=this.currentPage;
                idnum=parseInt(s);
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-album_music.htm?id="+idnum+"&currentPage="+currentPage+"&pagesize="+pagesize,
                        success:function(json) {
                            var data = JSON.parse(json);
                            // console.log(data)
                            that.album=data.album;
                            that.srcs=that.GLOBAL.url+data.music.srcS;
                            that.src=that.GLOBAL.url+data.music.src;
                            that.name=data.music.name;
                            that.long=data.music.long;
                            that.num=data.music.music.length?data.music.music.length:0;
                            that.singer=data.music.minstrel;
                            that.style=data.music.style;
                            that.detail=data.music.overview;
                            that.song=data.music.music;
                            var count=data.music.music.length;
                            for(var i=0;i<count;i++){
                                that.isshow.push(false);
                                that.isplay.push(false);
                                that.mp3src.push(that.GLOBAL.url+'/'+data.music.music[i].src);
                            }
                            that.page=Math.ceil(data.total/data.pagesize);
                            var num=data.album.length;
                            for(var i=0;i<num;i++){
                               that.id.push(data.album[i].id)
                            }

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
        float: left;}
    .Body .Title span l{height:48px;font-family:"Bebas";vertical-align:bottom;font-weight:500;}
    .Body{
        width: 1200px;
        min-height: 400px;
        margin: 0 auto;
        overflow: hidden;
    }
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    /*MusicDetail*/
    .Body .MusicDetail{padding:78px 0 0;overflow: hidden;}
    .Body .MusicDetail .CoverL{width:497px;float:left;}
    .Body .MusicDetail .CoverL img{width:497px;height:497px;}
    .Body .MusicDetail .CoverL .info{line-height: 42px;font-size: 14px;font-family: PingFangSC-Regular,simhei, sans-serif;color: #7d7d7d;border-bottom: #d1d0d0 solid 1px;overflow:hidden;}
    .Body .MusicDetail .CoverL .info p{width:200px;float:left;}
    .Body .MusicDetail .CoverL .info .playALL{width:60px;float:right;padding:0 0 0 40px;color:#fea83d;background:url(../../assets/img/start_all.png) no-repeat 10px 10px;}
    .Body .MusicDetail .CoverL .info .playALL:hover{cursor:pointer;}
    .Body .MusicDetail .CoverR{float:left;margin-left:50px;overflow: hidden;width:653px;line-height: 24px;font-size: 24px;font-family: PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .MusicDetail .CoverR .name{background: url(../../assets/img/album_code.png) no-repeat;margin:0 0 24px;padding: 0px 0 0 72px;height: 30px;line-height: 30px;font-size: 24px; font-family: PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .MusicDetail .CoverR .minstrel{margin:0 0 12px;height: 14px;line-height: 14px;font-size: 14px; font-family: PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .MusicDetail .CoverR .styles{margin:0 0 8px;height: 14px;line-height: 14px;font-size: 14px; font-family: PingFangSC-Semibold,simhei, sans-serif;font-weight:700;color:#7d7d7d;}
    .Body .MusicDetail .CoverR .overview{margin:0 0 20px;overflow: hidden;line-height: 24px;font-size: 14px; font-family: PingFangSC-Regular,simhei, sans-serif;color:#7d7d7d;width: 653px;}
    .Body .MusicDetail .CoverR .overview p{margin: 0 200px 0 0px;/* top: 0px; */float: right;width: 380px;max-height: 170px;overflow-y: auto;}
    .Body .MusicDetail .CoverR .musicS{}
    .Body .MusicDetail .CoverR .musicS .top{overflow: hidden;border-top:#9c9c9c solid 1px;border-bottom:#9c9c9c solid 1px;color:#7d7d7d;}
    .Body .MusicDetail .CoverR .musicS .top div{float:left;font-size:14px;font-family:PingFangSC-Regular,simhei, sans-serif;margin:0;line-height:30px;}
    .Body .MusicDetail .CoverR .musicS .top .song{width:220px;padding:0 0 0 30px;}
    .Body .MusicDetail .CoverR .musicS .top .minstrel{width:150px;text-align: center;}
    .Body .MusicDetail .CoverR .musicS .top .duration{width:220px;text-align: right;padding:0 30px 0 0 ;}
    .Body .MusicDetail .CoverR .musicS .songs{border-top:0px;}
    .Body .MusicDetail .CoverR .musicS .songs:hover{cursor:pointer;}
    .Body .MusicDetail .CoverR .musicS .songs div{line-height:58px;}
    .Body .MusicDetail .CoverR .musicS .color{color:#fea83d;}
    .Body .MusicDetail .CoverR .musicS .color .song{background:url(../../assets/img/start.png) no-repeat 8px 22px;}
    .Body .MusicDetail .CoverR .musicS .play{color:#fea83d;}
    .Body .MusicDetail .CoverR .musicS .play .song{background:url(../../assets/img/stop.png) no-repeat 8px 22px;background-size: 13px 14px;}
    .Body .subTitle{padding:0;height:80px;}
    .Body .subTitle span{color:#7d7d7d;}
    .Body .subTitle .sub{margin-left:0;padding-left:0;width:340px;}
    .Body .subLine{border-top:#7d7d7d solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    .Body .List .subAlbum{width:261px;height:381px;float:left;margin-left:52px;cursor:pointer;}
    .Body .List .subAlbum img{width:261px;height:261px;}
    .Body .List .subAlbum .rowDown{width:261px;height:128px;overflow: hidden;}
    .Body .List .subAlbum .rowDown p{font-size:21px;line-height:22px;height:22px;margin-top:18px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;text-align:center;color:#979797;}
    .Body .List .subAlbum .rowDown p:first-child{font-size:22px;margin-top:26px;}
    .Body .MusicDetail .CoverR .musicS .color {
        color: #fea83d;
    }
    .Body .List .leaveOne{margin-left:0px;position: relative;}
    /*MusicDetail end*/
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