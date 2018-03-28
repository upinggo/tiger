<template>

    <div>
        <Header></Header>
        <Banner></Banner>
<indexbody></indexbody>
        <Footer></Footer>
    </div>


</template>

<script>
import Header from "../header";
import Footer from "../footer";
import Banner from '../banner';
import indexbody  from '../indexbody'
// window.document.title='太歌';

console.log(window.document.title)
export default {
    components: {Header,Footer,Banner,indexbody},
    name: 'index',
  data () {
    return {
      msg: '首页'
    }
  },
    mounted(){
        window.document.title=this.msg;
    },
    methods:{},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
