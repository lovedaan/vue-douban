<template>
    <div id="banner" class="page-swipe">
        <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,index) in bannerData">
                    <img :src="item.images.large" alt="">
              </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>

    export default {
        data (){
            return {
                bannerData : [],
                lock:true
            }
        },
        mounted(){
            if(!this.lock){return;}
            this.fetchData();
        },
        methods : {
            fetchData (){
                var _this = this;
                this.bannerData = [];
                this.$jsonp({
                    'url' :'https://api.douban.com/v2/movie/in_theaters',
                    'cbName' : 'callback',
                    'data' : {
                        'start' : 0,
                        'count' : 3
                    },
                    'showLoading' : function () {
                        _this.$store.dispatch('showLoading');
                    },
                    'hideLoading' : function (){
                        _this.$store.dispatch('hideLoading');
                    },
                    'success' : function (res) {
                        //console.log(res);
                        _this.bannerData = res.subjects;
                        _this.lock = false;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .page-swipe .mint-swipe {
        height: 220px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .page-swipe .mint-swipe-item img{
        width: 100%;
    }
</style>