<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
    mounted(){
        if(this.isWeiXin()){
            this.$nextTick(()=>{
                var that=this;
                $.ajax({
                    type:"get",
                    url:that.GLOBAL.url+"/v1/ApiWeChat-getWeChatInfo.htm?backurl="+window.location.pathname,
                    success:function(json) {
                        var data = JSON.parse(json);
                        // window.document.title=data.title;
                        if(data.success){

                        }else{
                            var s=data.data.slice(9)
                            window.location.href=s;
                        }
                        console.log(data,"isWeiXin")

                    }
                })
            })
        }else{
        }
    },
    data(){return{

    }},
    methods:{
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
