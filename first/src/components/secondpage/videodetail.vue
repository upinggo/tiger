<template>
    <div>
        <Header></Header>
        <Detail_video></Detail_video>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Detail_video from "../secondpage/detail_video";
    import Footer from "../footer";
    export default {
        components: {Header,Footer,Detail_video},
        name: "videodetail"
    }
</script>

<style scoped>

</style>