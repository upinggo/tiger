<template>
    <div>
        <Header></Header>
        <Albumbody></Albumbody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Albumbody from "../albumbody"
    import Header from "../header";
    import Footer from "../footer";
    export default {
        components: {Header,Footer,Albumbody},
        name: "album"
    }
</script>

<style scoped>

</style>