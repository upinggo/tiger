<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
    mounted(){

        if(sessionStorage.getItem("count")==null||sessionStorage.getItem("count")==undefined){
            sessionStorage.setItem("count","0");
        }
        var count=sessionStorage.getItem("count");
        if(this.isWeiXin()&&count<3){
            this.GLOBAL.code=this.GetQueryString('code');
            console.log(this.GLOBAL.code)
            if(this.GLOBAL.code!=null){
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiWeChat-getWeChatInfo.htm?code="+that.GLOBAL.code+"&backurl="+window.location.pathname.slice(1),
                        success:function(json) {
                            var data = JSON.parse(json);
                            if(data.success){
                            }else{
                                var s=data.data.slice(9)
                                window.location.href=s;
                                sessionStorage.setItem("count",count+1)
                                that.GLOBAL.data=data;
                            }

                        }
                    })
                })
            }else{
                this.$nextTick(()=>{
                    var that=this;
                    $.ajax({
                        type:"get",
                        url:that.GLOBAL.url+"/v1/ApiWeChat-getWeChatInfo.htm?backurl="+window.location.pathname.slice(1),
                        success:function(json) {
                            var data = JSON.parse(json);
                            // window.document.title=data.title;

                            if(data.success){
                            }else{
                                var s=data.data.slice(9)
                                // window.location.href=s;
                                sessionStorage.setItem("count",count+1)
                                that.GLOBAL.data=data;
                            }

                        }
                    })
                })
            }

        }else{
            // alert("跳转次数："+this.GLOBAL.count+'返回data:'+this.GLOBAL.data)
        }
    },
    data(){return{

    }},
    methods:{
         GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
},
        //判断是否微信登陆
        isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

    }

}

</script>

<style>
#app {
  position: relative;

}
</style>
