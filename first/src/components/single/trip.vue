<template>
    <img id="img" src="">
</template>

<script>
    export default {
        name: "trip",
        mounted(){
            this.pic()
        },
        methods:{
            pic(){


            },
        },

    }

</script>

<style scoped>

@media (max-width:800px) {
body{
min-width: 0;
}
    img {
        background: url(../../assets/img/blogo.jpg) no-repeat center center #c4c4c4;
        width: 100%;
    }

    #preload-01 {
        background: url(../../assets/img/loading.gif) no-repeat -9999px -9999px #f02300;
    }
}
@media (min-width:800px) {

    img{background:url(../../assets/img/blogo.jpg) no-repeat center center #c4c4c4;}
    #preload-01 { background: url(../../assets/img/loading.gif) no-repeat -9999px -9999px #f02300;text-align: center; }

}

</style>