<template>
    <div>
        <Header></Header>
        <Sharebody></Sharebody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Sharebody from "../sharebody"
    export default {
        components: {Header,Footer,Sharebody},
        name: "share"
    }
</script>

<style scoped>

</style>