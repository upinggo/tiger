<template>
    <div class="SlideShow slide_show">
        <div class="rowVideo">
            <video class="videoShow" autoplay="true" controls="controls">
                <source src="" type="video/mp4">
                您的浏览器不支持 video 标签。
            </video>



        </div>
        <div class="rowDown">
            <p><span></span></p>
            <div class="shareBox">分享<!-- JiaThis Button BEGIN -->
                <div class="jiathis_style_32x32">
                    <a class="jiathis_button_tsina" title="分享到微博"><span class="jiathis_txt jtico jtico_tsina"></span></a>
                    <a class="jiathis_button_weixin" title="分享到微信"><span class="jiathis_txt jtico jtico_weixin"></span></a>
                    <a class="jiathis_button_qzone" title="分享到QQ空间"><span class="jiathis_txt jtico jtico_qzone"></span></a>
                    <a class="jiathis_button_cqq" title="分享到QQ好友"><span class="jiathis_txt jtico jtico_cqq"></span></a>
                </div>

                <!-- JiaThis Button END -->
            </div>
            <p>21次播放</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail_video",
        data(){
            return{

            }
        },
        mounted(){},
        methods:{
            useajax(){
                var id
            },
        }
    }
</script>

<style scoped>
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow .rowVideo{max-width: 1200px;margin: 0 auto;padding:165px 0 0 0;}
    .SlideShow .rowVideo .videoShow{width:100%;}
</style>