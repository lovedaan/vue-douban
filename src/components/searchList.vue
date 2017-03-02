<template>
    <div id="searchList">
        <div class="list">
            <h2>{{topTitle}}</h2>
            <ul class="listItem">
                <router-link v-for="(item,index) in searchListData" tag="li" :to="'/subject/'+item.id">
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
                searchListData : [],
                topTitle : '',
                name:'',  //当前的路由地址
                lock: true, //函数节流的开关
                nowPage : 0,   //从第几页开始
                count : 10,   //每页请求多少条数据
                total : 0,   //总条数
                pages : 0  //有多少页
            }
        },
        mounted(){
            this.name = this.$route.query.q;
            this.fetchData();
        },
        methods : {
            fetchData (){
                var _this = this;
                this.$jsonp({
                    'url' :'https://api.douban.com/v2/movie/search',
                    'cbName' : 'callback',
                    'data' : {
                        'start' : _this.nowPage*_this.count,
                        'count' : _this.count,
                        'q':_this.name
                    },
                    'showLoading' : function () {
                        _this.$store.dispatch('showLoading');
                    },
                    'hideLoading' : function (){
                        _this.$store.dispatch('hideLoading');
                    },
                    'success' : function (res) {
                        //console.log(res);
                        if(_this.searchListData.length == 0){
                            _this.topTitle = res.title;
                            _this.total = parseInt(res.total);
                            _this.pages = Math.ceil(_this.total/_this.count) - 1;
                            _this.searchListData = res.subjects;
                        }else{
                            var arr = _this.searchListData;
                            _this.searchListData = arr.concat(res.subjects);
                            
                        }
                        _this.lock = true;
                    }
                });
            }
        },
        created (){
            var _this = this;
            window.onscroll = function(){
                var path = _this.$route.path;
                if(path != '/searchList'){return;}
              var marginBot = 0;  //滚动条距离底部的距离
                if (document.documentElement.scrollTop){
                        marginBot = document.documentElement.scrollHeight-(document.documentElement.scrollTop+document.body.scrollTop) - document.documentElement.clientHeight;
                } else {
                        marginBot = document.body.scrollHeight - document.body.scrollTop - document.documentElement.clientHeight;
                }
                if(!_this.lock){return;}  //函数节流
                if(marginBot<=50) {
                    _this.lock = false;
                    _this.nowPage++;
                    if(_this.nowPage > _this.pages){
                        alert('暂无数据！');
                        return;
                    }
                    _this.fetchData ();
                }
        
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