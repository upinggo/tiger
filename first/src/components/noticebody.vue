<template>
    <div>
        <div class="SlideShow slide_show">
            <img src="../assets/img/index_notice.jpg" class="bg ">
        </div>
        <div class="Body">
            <div class="Title Trible">
                <span class="simple trible"><l>TRIP</l> | 行程</span>
            </div>
            <div class="subMenu  Line">
                <div v-if="datelist.year" class="year">
                    <!--v-if="datelist.year!=''&&datelist.year!=null&&!datelist.year"-->
                    <router-link v-for="(v,k) in datelist.year" :to="'/notice/'+datelist.year[k].year">{{v.year}}</router-link>
                </div>
                <div v-if="datelist.month" class="month">
                    <router-link v-for="(v,k) in datelist.month" :class="{hover:v.month==month}" :to="'/notice/'+year+'/'+datelist.month[k].month">{{v.month}}月</router-link>
                    <div class="givemeachance">
                        <!--<router-link to="/givemeachance" target="_blank" title="领取名额">-->
                        <a href="../../static/givemeachance.html" target="_blank" title="领取名额">
                            <img src="../assets/img/givemeachance.png">
                        </a>
                        <!--</router-link>-->
                    </div>
                </div>
            </div>
            <div class="List ">
                <div v-for="(v,k) in notice" class="notice" @click="toggle(k)" style="cursor:pointer">
                    <p>{{v.day}}</p>
                    <p class="name ">{{v.name}}<img v-if="month==new Date().getMonth()+1&&k==0" src="../assets/img/new_notice.png" alt=""></p>
                    <p class="date">日期: {{v.year}}.{{v.month}}.{{v.day}}</p>
                    <p class="address">{{v.address}}</p>
                    <p class="overview" :class="{hide:togglenum[k]}">{{v.overview}}</p>
                </div>

                <div class="y80"></div>
                <div class="currentPage">
                    <div class="page_left">
                    </div>
                    <div class="page_right">
                        <!--currentPage-->
                        <span v-if="page!=0" @click="lastone()" class="firstA">&lt;</span>
                        <span v-for="n in page" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>

                        <span v-if="page!=0"  @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "noticebody",
        data(){
            return{
                pagesize:9,
                currentPage:1,
                page:0,
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                datelist:[],
                // year:2017,
                // month:11,
                notice:[],
                togglenum:[],
            }
        },
        watch:{
            '$route':'changerouter',
        },
        mounted(){
            //刷新页面后重新定位当前年份与日期
            this.$router.replace({
                path: '/notice',
            })
            // console.log(this.$route)
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
            toggle(k){
                this.togglenum[k]=!this.togglenum[k];
                this.togglenum.push(true);
                this.togglenum.pop();
            },
            changerouter(){
                this.year=this.$route.params.year;
                this.month=this.$route.params.month;
                if(this.month==undefined){
                    this.month=new Date().getMonth()+1;
                }
                if(this.year==undefined){
                    this.year=new Date().getFullYear();
                }
                console.log(this.year,this.month);
                this.useajax()
            },
            useajax(currentPage,pagesize,year,month) {
                pagesize=this.pagesize
                currentPage=this.currentPage;
                year=this.year;
                month=this.month;
                this.$nextTick(()=>{
                    var that=this;

                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiHome-notice.htm?currentPage="+currentPage+"&pagesize="+pagesize+"&year="+year+"&month="+month,
                        success:function(json) {
                            var data = JSON.parse(json)
                            console.log(data);
                            that.page=Math.ceil(data.total/data.pagesize);
                            that.togglenum=[];
                            that.datelist=data.dateList;
                            that.notice=data.notice;
                            if(data.notice){
                                var count=data.notice.length;

                                for(var i=0;i<count;i++){
                                    that.togglenum.push(true);
                                }
                            }

                        }
                    });

                });
            }
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
    .Body .Line{border-top:#000 solid 1px ;margin-top:34px;padding-top:74px;margin-bottom:50px;}
    .Body .List{width:1200px;margin-bottom:280px;overflow: hidden;padding: 10px 0 0 0;}
    .Body .Title span l{height:48px;font-family:"Bebas";vertical-align:bottom;font-weight:500;}
    .Body{
        width: 1200px;
        min-height: 400px;
        margin: 0 auto;
        overflow: hidden;
    }
    .y80{height:80px;}
    /*Notice*/
    .Body .subMenu{line-height:24px;padding-top:50px;overflow: hidden;margin-bottom: 36px;}
    .Body .subMenu .year{float:right;line-height:24px;}
    .Body .subMenu .year a{border-right:#333 1px solid;padding-right:8px;font-size: 18px;color:#7d7d7d;}
    .Body .subMenu .month{line-height:24px;float: left;width: 100%;}
    .Body .subMenu .month a{margin-left: 12px;font-size: 22px; width:46px;height:24px;display:block;float:left;padding:24px 17px;text-align: center;color:#7d7d7d;}
    .Body .subMenu .month a:first-child{margin-left:0px;}
    .Body .subMenu .month .hover{border:#f99b1d 1px solid; border-radius: 20px;}
    .Body .List .notice{line-height:28px;min-height:28px;font-size:22px;border-bottom:#7d7d7d 1px solid;padding: 34px 0;overflow: hidden;}
    .Body .List .notice p{float:left;line-height:28px;}
    .Body .List .notice p:first-child{margin:0 26px 0 40px;width:26px;color:#7d7d7d;}
    .Body .List .notice .name{width:716px;padding:0 110px 0 0;}
    .Body .List .notice .name img{margin: 0px 0 -6px 0;background:none;}
    .Body .List .notice .active{background:url(../assets/img/new_notice.png) no-repeat 516px 0px;}
    .Body .List .notice .date{width:145px;font-size: 18px;color:#7d7d7d;}
    .Body .List .notice .address{width:81px;margin:0 0 0 54px;font-size: 18px;color:#7d7d7d;}
    .Body .List .notice .overview{width:1000px;margin:54px 0 0 100px;font-size: 18px;color:#7d7d7d;}
    /*Notice end*/
    .givemeachance{float:right;}
    .Body .subMenu .month .givemeachance a{padding:0;margin:20px 0 0 0;}
    .givemeachance img{background:none;width:40px;}
    .hide,.isHide{ display: none; }

    .currentPage{float: left;height: 50px;width: 1200px;line-height: 50px;font-size: 24px;font-family:PingFangSC-Regular,simhei, sans-serif;}
    .currentPage .page_right{text-align: center;}
    .currentPage .page_right .firstA{margin-right:95px;margin-left:0px;}
    .currentPage .page_right span{margin-left:40px;color:#979797;cursor:pointer;}
    .currentPage .page_right .lastA{margin-left:135px;}
    .currentPage .page_right .active{color:#fea83d;}
    .Middle .currentPage{width: 790px;}

</style>