<template>
    <div>
        <Header></Header>
        <Noticebody></Noticebody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Noticebody from "../noticebody";
    export default {
        components: {Header,Footer,Noticebody},
        name: "notice"
    }
</script>

<style scoped>

</style>