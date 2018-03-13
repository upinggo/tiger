<template>
    <div>
        <Header></Header>
        <Awardsbody></Awardsbody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Awardsbody from "../awardsbody"
    export default {
        components: {Header,Footer,Awardsbody},
        name: "awards"
    }
</script>

<style scoped>

</style>