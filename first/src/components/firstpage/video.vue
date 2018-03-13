<template>
    <div>
        <Header></Header>
        <Videobody></Videobody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Videobody from "../videobody"
    export default {
        components: {Header,Footer,Videobody},
        name: "videoname"
    }
</script>

<style scoped>

</style>