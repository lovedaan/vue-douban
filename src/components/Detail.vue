<template>
    <div id="detail">
        <div class="topTitle">
            <h2>{{detailDataJson.title}}</h2>
        </div>
        <div class="detailCon" v-show="isShow">
            <div class="poster">
                <img :src="detailDataJson.images.large"/>
            </div>
            <div class="con">
                <h4>电影：{{detailDataJson.title}}</h4>
                <p>类型：{{detailDataJson.genres.toString()}}</p>
                <p>主演：<span v-for="(castsName,index) in detailDataJson.casts">{{castsName.name}} <i v-show="index != (detailDataJson.casts.length - 1)">、</i></span></p>
                <p>导演：<span v-for="(directorsName,index) in detailDataJson.directors">{{directorsName.name}} <i v-show="index != (detailDataJson.directors.length - 1)">、</i></span></p>
                <p>上映年份：{{detailDataJson.year}}</p>
                <p>评分：{{detailDataJson.rating.average}}分</p>
                <p>概要：{{detailDataJson.summary}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                detailDataJson:{
                    title :'',
                    images :{
                       large :''
                    },
                    genres :[],
                    casts :[],
                    directors :[],
                    year :'',
                    rating :{
                       average : '' 
                    },
                    summary :''
                },
                topTitle:'',
                isShow : false
            }
        },
        mounted(){
            var path = this.$route.path;
            this.fetchData(path); 
        },
        methods :{
            fetchData(path){
                var _this = this;
                this.detailDataJson = {
                    title :'',
                    images :{
                       large :''
                    },
                    genres :[],
                    casts :[],
                    directors :[],
                    year :'',
                    rating :{
                       average : '' 
                    },
                    summary :''
                };
                this.$jsonp({
                    'url' :'https://api.douban.com/v2/movie'+path,
                    'cbName' : 'callback',
                    'showLoading' : function () {
                        _this.$store.dispatch('showLoading');
                    },
                    'hideLoading' : function (){
                        _this.$store.dispatch('hideLoading');
                    },
                    'success' : function (res) {
                        //console.log(res);
                        _this.isShow = true;
                        _this.topTitle = res.title;
                        _this.detailDataJson = {
                            title :res.title,
                            images :{
                                large :res.images.large
                            },
                            genres :res.genres,
                            casts :res.casts,
                            directors :res.directors,
                            year :res.year,
                            rating :{
                                average : res.rating.average
                            },
                            summary :res.summary
                        };
                    }
                });
            }
        }
    }
</script>
<style scoped>
    #detail{
        padding-bottom:50px;
    }
    .detailCon{
        padding:10px 20px;
    }
    .topTitle h2{
        font-size:16px;
        text-align: center;
        padding:10px 0;
        border-bottom: 1px solid #ccc;
    }
    .detailCon .poster{
        width: 85%;
        margin: 0 auto;
    }
    .detailCon .poster img{
        width: 100%;
    }
    .con{
        padding:10px;
    }
    .con p{
        margin: 5px 0;
        font-size:12px;
        line-height:24px;
    }
</style>