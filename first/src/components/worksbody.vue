<template>
    <div>
    <div class="SlideShow slide_show">
        <img src="../assets/img/index_works.jpg" class="bg ">
    </div>
    <div class="Body">
        <div class="Title">
            <router-link to="/awards">
            <span class="simple click"><l>PROFILE</l> | 简介</span>
            </router-link>
            <span class="simple"><l>FILMOGRAPHY</l> | 作品</span>
        </div>
        <div class="List Line nextLine">
            <div class="Menu secondMenu">
                <router-link to="/works/album">
                <div class="button" :class="{org:isshow[0]}" id="album"><p>ALBUM</p><p>专&nbsp;&nbsp;&nbsp;&nbsp;辑</p></div>
                </router-link>
                <router-link to="/works/film">
                <div class="button" :class="{org:isshow[1]}" id="film"><p>O.S.T.</p><p>影视原声</p></div>
                </router-link>
            </div>
        </div>
        <div class="List Line nextLine onNextLine">
            <div class="Menu secondMenu">
                <router-link to="/works/variety">
                <div class="button" :class="{org:isshow[2]}" id="variety"><p>VARIETY</p><p>综&nbsp;&nbsp;&nbsp;&nbsp;艺</p></div>
                </router-link>
                <div class="button " :class="{org:isshow[3]}" id="concert" onclick="javascript:alert(`comming soon.`);"><p>CONCERT</p><p>演&nbsp;唱&nbsp;会</p></div>
            </div>
        </div>
        <div class="List Down">
            <div v-for="(item,index) in content" v-if="type=='album'||type=='film'" class="album albumR" :class="{leaveOne:index%3==0}">
                <div v-if="currentPage==1&&index==0&&type=='album'" class="new"></div>
                <div class="row">
                    <div class="rowImage">
                        <img v-if="item.linkId==null" :src="src+item.src">
                        <router-link v-if="item.linkId!=null" :to="'/album/'+item.linkId">
                        <img :src="src+item.src">
                        </router-link>
                    </div>
                    <div class="rowDown">
                        <p>{{item.name}}</p>
                        <p>{{item.overview}}</p>
                    </div>
                </div>
            </div>

            <div v-if="type=='variety'" v-for="(item,index) in content" class="video" :class="{leaveOne:index%2==0}">
                <!--<div v-if="currentPage==1&&index==0" class="new"></div>-->
                <div class="row">
                    <div class="rowImage">
                        <a target="_blank" :href="item.link"><img :src="src+item.src"></a>
                    </div>
                    <div class="rowDown">
                        <p>{{item.name}}</p>
                        <p>{{item.overview}}</p>
                    </div>
                </div>
            </div>
            <div class="currentPage">
                <div class="page_left">
                </div>
                <div class="page_right">
                    <!--currentPage-->
                    <span v-if="total!=0"  @click="lastone()" class="firstA">&lt;</span>
                    <span v-if="total!=0" v-for="n in page" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

                    <span v-if="total!=0" @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "worksbody",
        data(){
            return{
                type:'album',
                currentPage:1,
                isshow:[true,false,false,false],//类显示数组
                content:[],
                total:0,
                pagesize:12,//页面个数
                page:0,//总页数
                src:this.GLOBAL.url
            }
        },
        created(){},
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'changerouter'
        },
        mounted(){
            this.page=0;
            var name=this.$route.params.name;
            var i;
            if(name=='album'){
                i=0;
            }else if(name=='film'){
                i=1;
            }
            else if(name=='variety'){
                i=2;
            }
            else if(name=='concert'){
                i=3;
            }
            this.isshow=[false,false,false,false];
            this.isshow[i]=true;

            switch (parseInt(i)){
                case 0:this.type='album';this.pagesize=12;break;
                case 1:this.type='film';this.pagesize=9;break;
                case 2:this.type='variety';this.pagesize=8;break;
                case 3:this.type='concert';break;
            }

            this.useajax();


        },
        methods:{
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
                // gettype(n){
                //     window.location.href = '#/works/'+n;
                // },
            changerouter(){
                var name=this.$route.params.name;
                var i;
                if(name=='album'){
                    i=0;
                }else if(name=='film'){
                    i=1;
                }
                else if(name=='variety'){
                    i=2;
                }
                else if(name=='concert'){
                    i=3;
                }
                this.isshow=[false,false,false,false];
                this.isshow[i]=true;
                this.currentPage=1;
                switch (parseInt(i)){
                    case 0:this.type='album';this.pagesize=12;break;
                    case 1:this.type='film';this.pagesize=9;break;
                    case 2:this.type='variety';this.pagesize=8;break;
                    case 3:this.type='concert';break;
                }
                this.useajax();

            },
            useajax(type,currentPage,pagesize) {
                pagesize=this.pagesize
                type=this.type;
                currentPage=this.currentPage;

                    this.$nextTick(()=>{
                        var that=this;
                        $.ajax({
                            type:"get",
                            url:that.GLOBAL.url+"/v1/ApiHome-works.htm?type="+type+"&currentPage="+currentPage+"&pagesize="+pagesize,
                            success:function(json) {
                                var data = JSON.parse(json);
                                window.document.title=data.title;
                                // console.log(data,"album+film+variety")
                                that.total=data.total;
                                that.content=data.data;
                                that.page=Math.ceil(that.total/that.pagesize);

                            }
                        })
                    })

            }
        }
    }
</script>

<style scoped>
    .Body{width:1200px;min-height:400px;margin:0 auto;overflow: hidden;}
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow img{width:100%;}
    .Body .Title{height:48px;padding:34px 0 0;}
    .Body .Title span{height:48px;font-size:36px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;line-height:48px;width:600px;text-align: center;float:left;}
    .Body .Title span l{height:48px;font-family:"Bebas";vertical-align:bottom;font-weight:500;}
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    .Body .nextLine{float: left;width: 50%;}
    .Body .onNextLine{border-top:#f99b1d solid 2px;padding-top: 73px;}
    .Body .List .Menu{height:84px;clear:both;}
    .Body .List .Menu .button{border:#656666 solid 1px;height:82px;width:238px;float:left;cursor: pointer}
    .Body .List .Menu .button:first-child{cursor:auto}
    .Body .List .Menu .button p{font-size: 18px; height: 22px; line-height: 18px; height: 18px; width: 80px; margin: 0 79px 0;text-align: center;}
    .Body .List .Menu .button p:first-child{font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;font-size: 24px; margin: 18px 57px 0;width: 124px;height: 24px; text-align-last: center;text-align: center;}
    .Body .List .secondMenu .button{width:298px;}
    .Body .List .secondMenu .button:first-child{cursor:pointer}
    .Body .List .secondMenu .button p{ margin: 0 104px 0;}
    .Body .List .secondMenu .button p:first-child{margin: 18px 82px 0;}
    .Body .List .Menu .org{color:#f99b1d;}
    .Body .Down{margin-bottom:50px;}

    .Body .List .albumR{cursor:auto;}
    .Body .List .video{width:533px;height:536px;margin:0 0 0 134px;float: left;}
    .Body .List .video img{width:533px;height:402px;}
    .Body .List .video .rowDown{width:533px;height:134px;overflow: hidden;}
    .Body .List .video .rowDown p{font-size:24px;line-height:24px;height:24px;margin-top:18px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;text-align:center;color:#979797;}
    .Body .List .video .rowDown p:first-child{margin-top:34px;}
    .Body .List .album{width:353px;height:481px;float:left;margin-left:70px;cursor:pointer;}
    .Body .List .new{background-image:url(../assets/img/new.jpg);width:62px;height:33px; position: absolute;left: 10px;top: -10px;}
    .Body .List .album img{width:353px;height:353px;}
    .Body .List .album .rowDown{width:353px;height:128px;overflow: hidden;}
    .Body .List .album .rowDown p{font-size:20px;line-height:20px;height:20px;margin-top:18px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;text-align:center;color:#979797;}
    .Body .List .album .rowDown p:first-child{font-size:22px;margin-top:26px;}
    .Body .List .leaveOne{margin-left:0px;position: relative;}

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