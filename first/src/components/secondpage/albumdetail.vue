<template>
    <div>
        <Header></Header>
        <Detail_album></Detail_album>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "../header";
    import Detail_album from "../secondpage/detail_album";
    import Footer from "../footer";
    export default {
        components: {Header,Footer,Detail_album},
        name: "albumdetail"
    }
</script>

<style scoped>

</style>