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

export default {
    components: {Header,Footer,Banner,indexbody},
    name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
