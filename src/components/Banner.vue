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
            }
        },
        mounted(){
            this.fetchData();
        },
        methods : {
            fetchData (){
                var data = window.sessionStorage.getItem('bannerdata');
                this.bannerData = JSON.parse(data);
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