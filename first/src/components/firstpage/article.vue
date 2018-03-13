<template>
    <div>
        <Header></Header>
        <Articlebody></Articlebody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../header";
    import Footer from "../footer";
    import Articlebody from "../articlebody"
    export default {
        components: {Header,Footer,Articlebody},
        name: "articlename"
    }
</script>

<style scoped>

</style>