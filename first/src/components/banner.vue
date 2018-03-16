<template>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="Slideshow">
            <transition-group tag="ul" name="image">
                <li v-for="(img, index) in imglist" v-show="index===mark" :key="index">
                    <a href="#">
                        <img :src='img'>
                    </a>
                </li>
            </transition-group>
        </div>
        <div class="bullet">
      <span v-for="(item, index) in imglist" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
        </div>
        <img src="../assets/img_banner/banner1.jpg" alt="">
    </div>

</template>

<script>
    export default {
        name: "banner",
        data(){
            return{
                imglist:[],
                i:0,
                mark:0,
                timer:null
            }
        },
        methods:{
            stop () {
                clearInterval(this.timer)
            },
            move () {
                this.timer = setInterval(this.autoPlay, 4000)
            },
            autoPlay () {
                this.mark++;
                if (this.mark === this.i) { //当遍历到最后一张图片置零
                    this.mark = 0
                }
            },
            play () {
                this.timer=setInterval(this.autoPlay, 4000)
            },
            change (i) {
                this.mark = i
            }
        },
        created(){
                this.play();

            },
        mounted(){
            this.$nextTick(()=>{
                var that=this;
                $.ajax({
                    type:"get",
                    url:that.GLOBAL.url+"/v1/ApiHome-slideShow.htm",
                    success:function(json){
                        var data= JSON.parse(json)
                        var num=data.slide_show.length;
                        that.i=num;
                        var address="";
                        for(var i=0;i<num;i++){
                            address=that.GLOBAL.url+data.slide_show[i].original_src;
                            that.imglist.push(address)
                        }
                    }
                })
            })
        }

    }
</script>

<style scoped>
    /*SlideShow*/
    .image-enter-active {
        transform: translateX(0);
        transition: all 1s ease;
    }
    .image-leave-active {
        transform: translateX(-100%);
        transition: all 1s ease;
    }
    .image-enter {
        transform: translateX(100%);
    }
    .image-leave {
        transform: translateX(0);
    }

    .slide{
        width: 100%;
        overflow: hidden;
        position: relative;
        z-index: 10;
        clear: both;
        background-color: #000;
    }
    .Slideshow{
        width: 100%;
     }
    li{
        position: absolute;
    }
     ul,li{
        overflow: hidden;
    }

    /*li,ul {*/
        /*width: 100%;*/
        /*position: absolute;*/
        /*top: 0;*/
        /*display: block;*/
    /*}*/
    img {
        width: 100%;
    }
    .bullet {
        position: absolute;
        width: 100%;
        bottom: 20px;
        margin: 0 auto;
        z-index: 90;
        text-align: center;
    }
    .bullet span {
        width: 5px;
        height: 5px;
        border: 1px solid;
        border-radius: 5px;
        background: white;
        display: inline-block;
        margin-right: 10px;
    }
    .active {
        background: grey !important;
    }
</style>