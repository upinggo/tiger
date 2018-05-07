<template>
    <div>
        <Header></Header>
        <Accountbody></Accountbody>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/header';
    import Footer from '../components/footer';
    import Accountbody from '../components/accountcenterbody'
    export default {
        created(){
            if(this.GLOBAL.token==null){
                this.$router.push({path:'/'});
            }
        },
        components: {Header,Footer,Accountbody},
        name: "accountcenter"
    }
</script>

<style scoped>

</style>