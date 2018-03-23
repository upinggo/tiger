<template>
    <div class="Body">
        <div class="Title">
            <span class=""><l>PROFILE</l> | 简介</span>
            <span class=""><l>TRIP</l> | 行程</span>
        </div>
        <div class="Button">
            <router-link to="/awards">了解更多</router-link>
            <router-link to="/notice">查看</router-link>
        </div>
        <div class="Image">
            <router-link to="/album" class="click"><img v-lazy="index_left"></router-link>
            <a href="../../static/trip.html" target="_blank" class="click">
                <img v-lazy="'../../static/img/index_right.jpg'">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "indexbody",
        data(){
            return{
                index_left:'../../static/img/index_left.jpg',

            }
        }
    }
</script>

<style scoped>
    .Body{width:1200px;min-height:400px;margin:0 auto;overflow: hidden;}
    /*awards*/
    .Body .Title{height:48px;padding:34px 0 0;}
    .Body .Title span{height:48px;font-size:36px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;line-height:48px;width:600px;text-align: center;float:left;}
    .Body .Title span l{height:48px;font-family:"Bebas";vertical-align:bottom;font-weight:500;}
    .Body .Button{margin:36px 0 0;height:66px;}
    .Body .Button a{border-radius:31px;width:276px;height:62px;display:block;float:left;border:#282828 solid 2px;font-size:24px;font-family:PingFangSC-Regular,simhei, sans-serif;line-height:62px;text-align:center;margin:0 0 0 320px ;}
    .Body .Button a:first-child{margin:0 0 0 160px ;}
    .Body .Button a:hover{color:#282828;}
    .Body .Image{margin:72px 0 82px;overflow: hidden;}
    .Body .Image img{width:572px;height:342px;}
    .Body .Image .click{float: left;}
    .Body .Image .click:first-child{margin-right:56px;}
</style>