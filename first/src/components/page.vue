<template>
    <div class="currentPage">
        <div class="page_left">
        </div>
        <div class="page_right">
            <!--currentPage-->
            <span  @click="lastone()" class="firstA">&lt;</span>
            <span @click="change(1)" :class="{active:1==currentPage}">1</span>
            <span v-if="preClipped" class="page-index">...</span>
            <span v-for="n in pages" @click="change(n)" :class="{active:n==currentPage}">{{n}}</span>
            <span v-if="backClipped" class="page-index">...</span>
            <span @click="change(page)" :class="{active:page==currentPage}">{{page}}</span>
            <span  @click="nextone()" class="lastA">&gt;</span>        <!--currentPage end-->
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "page",
        data(){
            return{
                backClipped: false,
                preClipped: false
            }
        },
        props:{
            total: {            // 数据总条数
                // type: Number,
                default: 0
            },
            pagesize: {            // 每页显示条数
                type: Number,
                default: 10
            },
            currentPage: {            // 当前页码
                type: Number,
                default: 1
            },
            page: {        // 总页数
                type: Number,
                default: 5,
            },
            pagegroup: {        // 分页条数 -- 奇数
                type: Number,
                default: 5,
                coerce:function(v){
                    v = v > 0 ? v : 5;
                    return v % 2 === 1 ? v : v + 1;
                }
            },
        },
        computed: {
            // 使用计算属性来得到每次应该显示的页码
            pages: function () {
                let ret = []
                if (this.currentPage > 3) {
                    // 当前页码大于三时，显示当前页码的前2个
                    ret.push(this.currentPage - 2)
                    ret.push(this.currentPage - 1)
                    if (this.currentPage > 4) {
                        // 当前页与第一页差距4以上时显示省略号
                        this.preClipped = true
                    }
                } else {
                    this.preClipped = false
                    for (let i = 2; i < this.currentPage; i++) {
                        ret.push(i)
                    }
                }
                if (this.currentPage !== this.page && this.currentPage !== 1) {
                    ret.push(this.currentPage)
                }
                if (this.currentPage < (this.page - 1)) {
                    // 显示当前页码的后2个
                    ret.push(this.currentPage + 1)
                    if (this.currentPage <= (this.page - 3)) {
                        // 当前页与最后一页差距3以上时显示省略号
                        this.backClipped = true
                    }
                } else {
                    this.backClipped = false
                    for (let i = (this.currentPage + 1); i < this.page; i++) {
                        ret.push(i)
                    }
                }
                // 返回整个页码组
                return ret
            }
        },
        mounted(){},
        created(){},
        methods:{
            lastone: function () {
                this.$emit('lastone')
            },
            change: function (abc) {
                this.$emit('change',abc)
            },
            nextone: function () {
                this.$emit('nextone')
            },
        },

    }
</script>

<style scoped>
    /*page*/
    .currentPage{float: left;height: 50px;width: 1200px;line-height: 50px;font-size: 24px;font-family:PingFangSC-Regular,simhei, sans-serif;}
    .currentPage .page_right{text-align: center;}
    .currentPage .page_right .firstA{margin-right:95px;margin-left:0px;}
    .currentPage .page_right span{margin-left:40px;color:#979797;cursor:pointer;}
    .currentPage .page_right .lastA{margin-left:135px;}
    .currentPage .page_right .active{color:#fea83d;}
    .Middle .currentPage{width: 790px;}
    /*page end*/
</style>