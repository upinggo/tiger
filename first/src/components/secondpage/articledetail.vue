<template>
    <div>
        <Header></Header>
        <Detail_article></Detail_article>
        <Footer></Footer>
    </div>
</template>

<script>

    import Header from "../header";
    import Detail_article from "../secondpage/detail_article";
    import Footer from "../footer";
    export default {
        components: {Header,Footer,Detail_article},
        name: "articledetail"
    }
</script>

<style scoped>

</style>