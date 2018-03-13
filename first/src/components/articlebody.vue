<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../assets/img/index_article.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>ACTIVITY</l> | 活动</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "articlebody"
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
</style>