<template>
    <div>
        <div class="loading">
            <img src="../../static/img/loading.jpg" class="loadingimg" alt="">
            <p id="loadtext">TIGER.HU</p>
            <p id="loadnum">0%</p>
        </div>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
        <div class="Slideshow">
            <transition-group tag="ul" name="image">
                <li v-for="(img, index) in imglist" v-show="index===mark" :key="index">
                    <router-link to="#">
                        <img @load="showindex(index)" :src='img'>
                    </router-link>
                </li>
            </transition-group>
        </div>
        <div class="bullet">
      <span v-for="(item, index) in imglist" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
        </div>
    </div>
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
                timer:null,
                imgnum:[],
            }
        },
        methods:{
            showindex(index){this.imgnum.push(index);
            if(this.imgnum.length==this.imglist.length){
                $("#loadnum").text((this.imgnum.length/this.imglist.length).toFixed(2)*100+"%")
                $(".loading").fadeOut("slow");
            }
            else{
                $("#loadnum").text((this.imgnum.length/this.imglist.length).toFixed(2)*100+"%")
            }

            },
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
            $(".loading img").css("top",window.innerHeight*0.4);
            $(".loading p").css("top",window.innerHeight*0.4);
            this.$nextTick(()=>{
                var that=this;
                $.ajax({
                    type:"get",
                    url:that.GLOBAL.url+"/v1/ApiHome-slideShow.htm",
                    success:function(json){
                        var data= JSON.parse(json);
                        // console.log(data)
                        that.imglist=[];
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
    .loading{
        position: absolute;
        width:100%;
        height: 100%;
        background-color: white;
        z-index: 10000;
    }
    .loading img{
        display: block;
        position: relative;
        width: 200px;
        margin: 0 auto;

    }
    .loading p{
        width: 100%;
        text-align: center;
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        position: relative;
    }
    /*SlideShow*/
    .image-enter-active {
        transform: translateX(0);
        transition: all 1s ease;

    }
    .image-leave-active {
        transform: translateX(-100%);
        transition: all 1s ease;
        position: absolute;
        top: 0;

    }
    .image-enter {
        transform: translateX(100%);
    }
    .image-leave {
        transform: translateX(0);
    }
    .loadingimg{
animation: route 2s infinite;
-webkit-animation: route 2s infinite;
    }
    #loadtext{
        height: 20px;
        line-height: 20px;
        font-size: 20px;
        font-family: "Bebas";
        letter-spacing: 20px;
        margin-bottom: 30px;
    }
@keyframes route {
    from {transform:rotate(0deg); }
    to {transform:rotate(360deg);}
}
@-webkit-keyframes route {
    from {transform:rotate(0deg); }
    to {transform:rotate(360deg);}
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
        position: relative;
        display: block;
        /*margin:0 auto;*/
        /*text-align:center;*/
    }
     ul,li{
        overflow: hidden;
    }
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