<template>
    <div id="bootLayer">
        <div class="layer">
            <mt-swipe :auto="4000" :continuous="false">
                  <mt-swipe-item v-for="(item,index) in layerData">
                      <img :src="item.images.large" alt="">
                      <router-link v-show="index == (layerData.length - 1)" to='/home' class="goHomeBtn">点击查看</router-link>
                  </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                layerData : []
            }
        },
        mounted(){
            this.fetchData();
        },
        methods:{
            fetchData(){
                var _this = this;
                this.layerData = [];
                this.$jsonp({
                    'url' :'https://api.douban.com/v2/movie/in_theaters',
                    'cbName' : 'callback',
                    'data' : {
                        'start' : 0,
                        'count' : 6
                    },
                    'showLoading' : function () {
                        _this.$store.dispatch('showLoading');
                    },
                    'hideLoading' : function (){
                        _this.$store.dispatch('hideLoading');
                    },
                    'success' : function (res) {
                        //console.log(res);
                        _this.layerData = res.subjects.slice(0,3);
                        window.sessionStorage.setItem('bannerdata',JSON.stringify(res.subjects));
                    }
                });
            }
        }
    }
</script>
<style scoped>
    #bootLayer{
        width: 100%;
        height: 100%;
        background-color: #888;
        position: fixed;
        left: 0;
        top: 0;
        z-index:998;
    }
    .layer .mint-swipe{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index:998;
    }
    .layer .mint-swipe .mint-swipe-items-wrap,
    .layer .mint-swipe .mint-swipe-items-wrap img
    {
        width: 100%;
        height: 100%;
    }
    .goHomeBtn{
        position: absolute;
        left: 50%;
        bottom: 60px;
        -webkit-transform:translateX(-50%);
        transform:translateX(-50%);
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: yellowgreen;
        color:#fff;
        font-size:20px;
        border-radius: 8px;
    }
</style>