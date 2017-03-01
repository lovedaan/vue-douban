<template>
    <div id="in_theaters">
        <div class="list">
            <h2>{{topTitle}}</h2>
            <ul class="listItem">
                <router-link v-for="(item,index) in inTheatersData" tag="li" :to="'/subject/'+item.id">
                    <a href="#">
                        <div class="leftItem">
                            <img :src="item.images.small" alt="" />
                        </div>
                        <div class="rightItem">
                            <h3>{{item.title}}</h3>
                            <p>主演：<span v-for="(castsName,index) in item.casts">{{castsName.name}}  <i v-show="index != (item.casts.length - 1) ">、</i> </span></p>
                            <p>导演：<span v-for="(directorsName,index) in item.directors">{{directorsName.name}}  <i v-show="index != (item.directors.length - 1) ">、</i> </span></p>
                            <div class="score">{{item.rating.average}}</div>
                        </div>
                    </a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                inTheatersData : [],
                topTitle : ''
            }
        },
        mounted(){
            var path = this.$route.path;
            this.fetchData(path);
        },
        methods : {
            fetchData (path){
                var _this = this;
                this.inTheatersData = [];
                this.$jsonp({
                    'url' :'https://api.douban.com/v2/movie'+path,
                    'cbName' : 'callback',
                    'data' : {
                        'start' : 0,
                        'count' : 10
                    },
                    'showLoading' : function () {
                        _this.$store.dispatch('showLoading');
                    },
                    'hideLoading' : function (){
                        _this.$store.dispatch('hideLoading');
                    },
                    'success' : function (res) {
                        console.log(res);
                        _this.topTitle = res.title;
                        _this.inTheatersData = res.subjects;
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .list h2{
        text-align: center;
        padding:8px;
        font-size: 16px;
        color:#888;
        border-bottom: 1px solid #b6b2b2;
    }
    .list .listItem{
        padding: 10px 15px 60px;  
    }
    .list .listItem li{
        border-bottom: 1px solid #b6b2b2;
        height: 100px;
        padding:10px 0;
    }
    .list .listItem li a{
        display: block;
        overflow: hidden;
    }
    .list .listItem li div.leftItem{
        float: left;
        width: 30%;
        height: 80px;
        overflow: hidden;
    }
    .list .listItem li div.leftItem img{
        width: 100%;
    }
    .list .listItem li div.rightItem{
        float: right;
        width: 70%;
        height: 80px;
        position: relative;
        padding:0 10px;
    }
    .list .listItem li div.rightItem h3{
        padding:5px 0;
        font-size: 14px;
    }
    .list .listItem li div.rightItem p{
        width: 200px;
        text-overflow:ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 20px;
        font-size: 12px;
    }
    .list .listItem li div.rightItem .score{
        position: absolute;
        right:0px;
        top:26px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        text-align: center;
        line-height: 25px;
        background-color: yellowgreen;
        color:#fff;
        font-size: 12px;
    }
</style>