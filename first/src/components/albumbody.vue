<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../assets/img/index_album.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>MUSIC</l> | 音乐</span>
            </div>
            <div class="List Line">

                <div v-for="(item,index) in content" class="album" :class="{leaveOne:index%3==0}">
                    <div v-if="currentPage==1&&index==0" class="new"></div>
                    <div class="row">
                        <div class="rowImage">
                            <router-link :to="id[index]">
                                <img :src="src+item.src">
                            </router-link>
                        </div>
                        <div class="rowDown">
                            <p>{{item.name}}</p>
                            <p>{{item.publish_time}}</p>
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
        name: "albumbody",
        data(){
            return{
                src:this.GLOBAL.url,
                content:[],
                currentPage:1,
                pagesize:9,
                id:[],
                page:1,
                total:0
            }
        },

        mounted(){
            this.useajax();
        },

        methods:{

            useajax(currentPage,pagesize) {
                pagesize=this.pagesize

                currentPage=this.currentPage;
                this.id=[];
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-album.htm?currentPage="+currentPage+"&pagesize="+pagesize,
                        success:function(json) {
                            var data = JSON.parse(json);
                            // console.log(data)
                            that.content=data.album;
                            that.total=data.total;
                            that.page=Math.ceil(that.total/that.pagesize);
                            var count=that.content.length;
                            for(var i=0;i<count;i++){
                                that.id.push("/album/"+data.album[i].id);
                            }



                        }
                    })
                })

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
            }
        }
    }
</script>

<style>
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
    .Body .List{width:1200px;margin-bottom:280px;overflow: hidden;padding: 10px 0 0 0;}
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    .Body .List .album{width:353px;height:481px;float:left;margin-left:70px;cursor:pointer;}
    .Body .List .new{background-image:url(../assets/img/new.jpg);width:62px;height:33px; position: absolute;left: 10px;top: -10px;}
    .Body .List .album .rowDown{width:353px;height:128px;overflow: hidden;}
    .Body .List .leaveOne{margin-left:0px;position: relative;}
    .Body .List .album img{width:353px;height:353px;}
    .Body .List .album .rowDown{width:353px;height:128px;overflow: hidden;}
    .Body .List .album .rowDown p{font-size:20px;line-height:20px;height:20px;margin-top:18px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;text-align:center;color:#979797;}
    .Body .List .album .rowDown p:first-child{font-size:22px;margin-top:26px;}
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