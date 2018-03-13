<template>
    <div>
    <div class="SlideShow slide_show">
        <img src="../assets/img/index_awards.jpg" class="bg ">
    </div>
        <div class="Body">
            <div class="Title">
                <span class="simple"><l>PROFILE</l> | 简介</span>
                <span class="simple click" onclick="javascript:window.location.href = '#/works/album';"><l>FILMOGRAPHY</l> | 作品</span>
            </div>
            <div class="Overview">
                <div class="OverviewL">
                    <img src="../assets/img/self.jpg">
                </div>
                <div class="OverviewR">
                    <p class="title">胡彦斌</p>
                    <hr class="short">
                    <p class="overview"><span>BIRTHDAY 生 日</span><span class="sSecond">1983.07.04</span></p>
                    <p class="overview"><span>BLOOD TYPE 血 型</span><span class="sSecond">B型</span></p>
                    <p class="overview"><span>ZODIAC SIGN 星&nbsp;座</span><span class="sSecond">巨蟹座</span></p>
                    <p class="overview"><span>HEIGHT 身 高</span><span class="sSecond">180cm</span></p>
                    <p class="overview"><span>PROFESSION 职 业</span><span class="sSecond">歌手|音乐制作人|电影导演</span></p>
                    <hr class="long">
                    <p class="subTitle">ACHIEVEMENT 成 就</p>
                    <p class="subOverview subOverviewFirst">
                        首张唱片即在两岸三地发行，囊括香港四大颁奖典礼最佳新人.2002年至今发行11张全创作专辑 , 多次获得最佳男歌手奖项.红牛史上唯一一位艺人代言人.
                    </p>
                    <p class="subOverview">
                        江苏卫视《全能星战》总冠军. 湖南卫视《我是歌手》总决赛.湖南卫视《名声大震》总冠军.
                    </p>
                </div>
            </div>
            <div class="List">
                <div class="Menu">
                    <div class="button org"><p>EXPERIENCE</p><p>经&nbsp;&nbsp;&nbsp;&nbsp;历</p></div>
                    <div class="button" onclick="javascript:window.location.href = '#/works/album';"><p>ALBUM</p><p>专&nbsp;&nbsp;&nbsp;&nbsp;辑</p></div>
                    <div class="button" onclick="javascript:window.location.href = '#/works/film';"><p>O.S.T.</p><p>影视原声</p></div>
                    <div class="button" onclick="javascript:window.location.href = '#/works/variety';"><p>VARIETY</p><p>综&nbsp;&nbsp;&nbsp;&nbsp;艺</p></div>
                    <div class="button" onclick="javascript:alert(`comming soon.`);"><p>CONCERT</p><p>演&nbsp;唱&nbsp;会</p></div>
                    <!--<div class="button" onclick="javascript:window.location.href = './home-works-type-concert.htm';"><p>CONCERT</p><p>演&nbsp;唱&nbsp;会</p></div>-->
                </div>
                <div class="awards">
                    <div  v-for="(item, index1) in rowdata" class="row">
                        <div class="rowLeft" >{{item}}</div>
                        <div class="rowRight">
                            <p v-for="(items, index) in rowRight[index1]">{{items}}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "awardsbody",
        data(){
            return{
                rowdata:[],
                rowRight:[]
            }
        },
        created(){},
        mounted(){
            this.$nextTick(()=>{
                var that=this;
                var num=0;
                var year=0;
                var namegroup=[];
                $.ajax({
                    type:"get",
                    url:that.GLOBAL.url+"/v1/ApiHome-awards.htm",
                    success:function(json){
                        var data= JSON.parse(json)
                        var awardslist=data.awards;
                        num=data.awards.length;
                        awardslist.forEach(function (k,v) {
                            if(k.year!=year){
                                if(v!=0){
                                    if(v!=num-1){
                                that.rowdata.push(k.year);
                                year=k.year;
                                that.rowRight.push(namegroup);
                                namegroup=[];
                                namegroup.push(k.name);}
                                else{
                                        that.rowdata.push(k.year);
                                        year=k.year;
                                        that.rowRight.push(namegroup);
                                        namegroup=[];
                                        namegroup.push(k.name)
                                        that.rowRight.push(namegroup);
                                    }
                                }
                                else{

                                    that.rowdata.push(k.year);
                                    year=k.year;
                                    namegroup.push(k.name);
                                }
                            }
                            else {
                                if(v!=num-1){namegroup.push(k.name);
                                }
                                else{
                                    namegroup.push(k.name);
                                    that.rowRight.push(namegroup);
                                }

                            }
                        })
                    }
                })
            })
        },
        methods:{

        }
    }
</script>

<style scoped>
    .Body{width:1200px;min-height:400px;margin:0 auto;overflow: hidden;}
    .SlideShow{width:100%;position:relative;z-index:10;overflow:hidden;clear:both;    background-color: #000;}
    .SlideShow img{width:100%;}
    .SlideShow .img{position: absolute;z-index:9;}
    .SlideShow .Point{position:absolute;bottom:47px;width:100%;overflow:hidden;text-align:center;vertical-align:middle;display:table-cell;height:6px;z-index:10;}
    .SlideShow .Point .a{border-radius:3px;width:6px;height:6px;margin:0 12px 0 0;}

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
    /*.Body .Image img:first-child{margin-right:56px;}*/
    .Body .Overview{width:1200px;margin:34px 0 90px;overflow: hidden;}
    .Body .Overview .OverviewL{width:600px;border-top:#f99b1d solid 2px;padding:74px 0 0;float:left;}
    .Body .Overview .OverviewL img{width:600px;height:758px;}
    .Body .Overview .OverviewR{width:535px;border-top:#282828 solid 1px;padding:74px 0 0 58px;float:left;}
    .Body .Overview .OverviewR .title{font-size:48px;margin:34px 0 26px 0;height:48px;line-height:48px;}
    .Body .Overview .OverviewR .short{border-top:none;border-bottom:none;border-right:none;border-left:#282828 solid 60px;height:6px;}
    .Body .Overview .OverviewR .overview{display:block;font-size:20px;height:20px;line-height:20px;width:542px;margin:20px 0 0;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .Overview .OverviewR .overview:first-child{margin:34px 0 0;}
    .Body .Overview .OverviewR .overview .sSecond{width:270px;float:right;}
    .Body .Overview .OverviewR .long{border-left:none;border-bottom:none;border-right:none;border-top:#282828 solid 1px;margin-top:56px;}
    .Body .Overview .OverviewR .subTitle{font-size:36px;margin:56px 0 0;height:36px;line-height:36px;color:#7d7d7d;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;}
    .Body .Overview .OverviewR .subOverview{font-size:18px;line-height:32px;color:#7d7d7d;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;letter-spacing:3px;}
    .Body .Overview .OverviewR .subOverviewFirst{margin:36px 0 0;}
    .Body .List{width:1200px;margin-bottom:280px;overflow: hidden;padding: 10px 0 0 0;}
    .Body .Down{margin-bottom:50px;}
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
    .Body .List .awards{width:1200px;line-height: 20px;}
    .Body .List .awards .row{width:1200px;overflow: hidden;border-bottom:#7d7d7d solid 1px;clear:both;}
    .Body .List .awards .rowLeft{width:260px;min-height: 120px;font-size:60px;line-height:120px;font-family:"Bebas";text-align:center;color:#929191;display: table-cell; vertical-align: middle;}
    .Body .List .awards .rowRight{width:940px;font-size:22px;font-family:PingFangSC-Semibold,simhei, sans-serif;font-weight:700;min-height:inherit;display: table-cell; vertical-align: middle;}
    .Body .List .awards .rowRight p{width:885px;margin-left:55px;margin-top:24px;color:#929191;}
    .Body .List .awards .rowRight p:first-child{margin-top:50px;}
    .Body .List .awards .rowRight p:last-child{margin-bottom:50px;}
    /*awards end*/
</style>