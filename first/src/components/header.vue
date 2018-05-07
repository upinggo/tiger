<template>
    <div class="Head">
        <div class="title">
            TIGER.HU.FANS.CLUB
        </div>

        <div class="menu">
            <router-link to="/">
                首页
            </router-link>
            <router-link to="/awards">简介</router-link>
            <router-link to="/album" class="">音乐</router-link>
            <router-link to="/video" class="">视频</router-link>
            <router-link to="/article" class="">活动</router-link>
            <router-link to="/photo" class="">照片</router-link>
            <router-link to="/notice" class="">行程</router-link>
            <router-link to="/share" class="">分享</router-link>
        </div>

        <Account></Account>

    </div>

</template>

<script>
    import Account from '../components/account'


    export default {
        components:{Account},
        name: "bannerhead",
        data () {
            return {

            }
        },

    }
</script>

<style scoped>

    /*Head*/
    .Head{width: 100%;height: 165px;background:url(../assets/shadow.png);color: #fff;position: absolute;z-index:99;
        top: 0;}
    .Head .title{height:80px;margin:0 auto;width:530px;font-size:48px;line-height:110px;font-family: "Bebas";letter-spacing:8px;cursor: default;user-select: none;-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none;}
    .Head .menu{height:80px;margin:40px auto 0;width:780px;font-size:20px;}
    .Head .menu a{text-decoration:none;margin:0 12px 0;color:#fff;font-family:PingFangSC-Regular,simhei, sans-serif;padding:0 12px 10px; }
    .Head .menu a:hover{border-bottom:#f99b1d solid 3px;}

    /*Head end*/






</style>