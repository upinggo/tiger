<template>
    <div>
        <Header></Header>
        <Photobody></Photobody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Photobody from "../photobody"
    export default {
        components: {Header,Footer,Photobody},
        name: "photo"
    }
</script>

<style scoped>

</style>