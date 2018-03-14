<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../../assets/img/index_article.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>ACTIVITY</l> | 活动</span>
            </div>
            <div class="Detail Line">
                <div class="title ">
                    <p class="name">{{article.name}}</p>
                    <p class="date">日期：{{article.year}}.{{article.month}}.{{article.day}}</p>
                    <p class="access">阅读量：{{article.access}}</p>
                    <p v-if="article.source!=''" class="source">来源：{{article.source}}</p>
                </div>
                <div class="detail">
                    <div v-html="article.detail"></div>
                </div>
                <div class="buttonMenu">
                    <router-link v-if="link[0]" :to="link[0]">
                    <img class="left" src="../../assets/img/left.png">
                    </router-link>
                    <router-link :to="link[1]">
                    <img class="middle" src="../../assets/img/middle.png">
                    </router-link>
                    <router-link v-if="link[2]" :to="link[2]">
                    <img class="right" src="../../assets/img/right.png">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail_article",
        data(){
          return{
              article:{},
              link:[],
          }
        },
        mounted(){
            var s=this.$route.params.id;
            this.useajax(s);
        },
        watch:{
            "$route":"changerouter",
        },
        methods:{
            changerouter(){
                var s=this.$route.params.id;
                this.useajax(s);
                // console.log("change!!!!!!!!!!")
            },
            useajax(idnum) {
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        async:false,
                        url:that.GLOBAL.url+"/v1/ApiHome-article_detail.htm?id="+idnum,
                        success:function(json) {
                            var data = JSON.parse(json);
                            // console.log(data);
                            that.article=data.article;
                            if(data.buttonMenu.left.id){that.link[0]='/articledetail/'+data.buttonMenu.left.id;}
                            else {that.link[0]='/article';}
                            if(data.buttonMenu.right.id){that.link[2]='/articledetail/'+data.buttonMenu.right.id;}
                            else{that.link[2]='/article';}

                            that.link[1]='/article';
                        }
                    })
                })

            },
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
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    /*ArticleDetail*/
    .Body .Detail{margin:50px 0 50px 0;overflow: hidden;line-height: 24px;padding: 74px 245px 0;}
    .Body .Detail a{color:#72ACE3;text-decoration: underline; }
    .Body .Detail .title{margin:0 0 50px 0;overflow: hidden;font-size:24px;}
    .Body .Detail .title p{display: block;float: left}
    .Body .Detail .title .name{width:710px;font-size:28px;line-height:46px;margin-bottom: 75px;}
    .Body .Detail .title .date{width:200px;font-size:20px;margin-left:116px;color:#7d7d7d;}
    .Body .Detail .title .access{width:200px;font-size:20px;color:#7d7d7d;}
    .Body .Detail .title .source{font-size:20px;margin-left:116px;margin-top:26px;color:#7d7d7d;}
    .Body .Detail .detail{margin:50px 0 50px 0;overflow: hidden;font-size:18px;color:#7d7d7d;}
    .Body .Detail .buttonMenu{}
    .Body .Detail .buttonMenu .left{float:left;margin-left:20px;background:none;}
    .Body .Detail .buttonMenu .middle{width:240px;margin:-5px 0 0 130px;cursor: pointer;background:none;}
    .Body .Detail .buttonMenu .right{float:right;margin-right:20px;background:none;}
    /*ArticleDetail end*/
</style>