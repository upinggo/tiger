<template>
    <div class="SlideShow slide_show">
        <div class="rowVideo">
            <video class="videoShow" autoplay="true" controls="controls">
                <source :src="src" type="video/mp4">
                您的浏览器不支持 video 标签。
            </video>



        </div>
        <div class="rowDown">
            <p>{{name}}<span>-{{minstrel}}</span></p>
            <div class="shareBox">分享
                <!-- JiaThis Button BEGIN -->
                <div class="jiathis_style_32x32">
                    <a class="jiathis_button_tsina"></a>
                    <a class="jiathis_button_weixin"></a>
                    <a class="jiathis_button_cqq"></a>
                    <a class="jiathis_button_qzone"></a>
                </div>

                <!-- JiaThis Button END -->

            </div>
            <p>{{access}}次播放</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail_video",
        data(){
            return{
                name:'',
                minstrel:'',
                src:'',
                access:0,
            }
        },
        mounted(){
            this.useajax();
            this.init();
        },
        methods:{
            useajax(){
                var id=this.$route.params.id;
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        async:false,
                        url:that.GLOBAL.url+"/v1/ApiHome-video_detail.htm?id="+id,
                        success:function(json) {
                            var data = JSON.parse(json);
                            // console.log(data);
                            var string=that.GLOBAL.url+'/'+data.video.src;
                            that.src=encodeURI(string);
                            // console.log(string)
                            that.name=data.video.name;
                            that.minstrel=data.video.minstrel;
                            that.access=data.video.access
                        }
                    })
                })
            },
            init: function () {
                // let script2 = document.createElement('script');
                // let js= '                    var jiathis_config = {\n' +
                //     '                        summary: "",\n' +
                //     '                        shortUrl: false,\n' +
                //     '                        hideMore: false\n' +
                //     '                    }\n' +
                //     '                ';
                // script2.append(js);
                // document.getElementsByTagName('body')[0].appendChild(script2);
                let url = 'http://v3.jiathis.com/code/jia.js';
                let script = document.createElement('script');
                script.setAttribute('src', url);
                document.getElementsByTagName('head')[0].appendChild(script);
                // let url1 = 'http://v3.jiathis.com/code/plugin.client.js';
                // let script1 = document.createElement('script');
                // script1.setAttribute('src', url1);
                // document.getElementsByTagName('body')[0].appendChild(script1);

                // console.log(script2);
            },
        }
    }
</script>

<style scoped>
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow .rowVideo{max-width: 1200px;margin: 0 auto;padding:165px 0 0 0;}
    .SlideShow .rowVideo .videoShow{width:100%;}
    .SlideShow .rowDown{max-width: 1200px;margin: 0 auto;height:100px;position:relative;}
    .SlideShow .rowDown .shareBox{font-size:18px;line-height:36px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;color:#7d7d7d;width:800px;float:left;overflow: hidden}
    .SlideShow .rowDown .shareBox div{margin:0 605px 0  0;float:right;}
    .SlideShow .rowDown p{font-size:18px;line-height:52px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;color:#7d7d7d;width:800px;float:left;}
    .SlideShow .rowDown p:first-child{color:#fff;font-size:28px;}
    .SlideShow .rowDown p:last-child{right:0;line-height:100px;text-align: center;width:300px;position:absolute;font-size:28px;}
    .SlideShow .rowDown span{color:#f99b1d;}
    /*SlideShow end*/
</style>