<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../assets/img/index_article.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>ACTIVITY</l> | 活动</span>
            </div>
            <div class="List Line">
                <div v-for="(v,k) in article" class="Article ">
                    <router-link :to="link[k]">
                        <img v-lazy="src[k]">
                        <p class="name">{{v.name}}</p>
                        <p class="date">日期：{{v.year}}.{{v.month}}.{{v.day}}</p>
                        <p class="address">地点：{{v.address}}</p>
                        <p class="overview">{{v.overview}}</p>
                    </router-link>
                </div>

                <div class="currentPage">
                    <div class="page_left">
                    </div>
                    <div class="page_right">
                        <!--currentPage-->
                        <span @click="lastone()" class="firstA">&lt;</span>
                        <span v-for="n in page"  @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

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
        name: "articlebody",
        data(){
            return{
                link:[],
                pagesize:4,
                currentPage:1,
                article:[],
                src:[],
                page:0,
                total:0,

            }
        },
        mounted(){this.useajax();},
        created(){

        },
        methods:{
            useajax(currentPage,pagesize) {
                pagesize=this.pagesize;
                currentPage=this.currentPage;
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-article.htm?currentPage="+currentPage+"&pagesize="+pagesize,
                        success:function(json) {
                            var data = JSON.parse(json);
                            window.document.title=data.title;
                            var s='/articledetail/'
                            // console.log(data)
                            that.article=data.article;
                            var num=data.article.length;
                            for(var i=0;i<num;i++){
                                that.src[i]=that.GLOBAL.url+data.article[i].src;
                                that.link[i]=s+data.article[i].id;
                            }
                            that.page=Math.ceil(data.total/data.pagesize);
                            that.total=data.total;
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
    .Body .List{width:1200px;margin-bottom:280px;overflow: hidden;padding: 10px 0 0 0;}
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    /*Article*/
    .Body .Article{margin:50px 0 50px 0;overflow: hidden;cursor: pointer;}
    .Body .List .Article img{width:542px;height:314px;float:left;}
    .Body .List .Article p{display:block;float:left;line-height:40px;margin:10px 0 0 40px;width:618px;font-size:20px;color:#7d7d7d;}
    .Body .List .Article .name{font-size:24px;color:#000;}
    .Body .List .Article .date{width:165px;}
    .Body .List .Article .address{width:200px;}
    .Body .List .Article .overview{height:159px;margin:15px 0 0 40px;line-height:36px;}
    /*Article end*/
    .currentPage{float: left;height: 50px;width: 1200px;line-height: 50px;font-size: 24px;font-family:PingFangSC-Regular,simhei, sans-serif;}
    .currentPage .page_right{text-align: center;}
    .currentPage .page_right .firstA{margin-right:95px;margin-left:0px;}
    .currentPage .page_right span{margin-left:40px;color:#979797;cursor:pointer;}
    .currentPage .page_right .lastA{margin-left:135px;}
    .currentPage .page_right .active{color:#fea83d;}
    .Middle .currentPage{width: 790px;}
</style>