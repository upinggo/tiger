<template>
    <div>
        <Header></Header>
        <Worksbody></Worksbody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Worksbody from "../worksbody"
    export default {
        components: {Header,Footer,Worksbody},
        name: "works"
    }
</script>

<style scoped>

</style>