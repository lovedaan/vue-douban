<template>
    <div id="search">
        <!-- <mt-search v-model="value"></mt-search> -->
        <div class="searchBox">
            <div class="searchBarinner">
                <i class="search_icon"></i>
                <input type="search" v-model="s" placeholder="搜索" name="" class="search_txt" />
            </div>
            <router-link :to="'/searchList?q='+s" :class="{searchbarcancel:true}">搜索</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                s :''
            }
        }
    }
</script>
<style scoped>
    .searchBox{
        position: relative;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #d9d9d9;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 8px 10px;
        z-index: 1;
    }
    .searchBarinner{
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #fff;
        border-radius: 2px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 28px;
        padding: 4px 6px;
    }
    .search_icon{
        width: 12px;
        height: 12px;
        background: url('../assets/images/search.png') no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }
    .search_txt{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        box-sizing: border-box;
        height: 100%;
        outline: 0;
    }
    .searchbarcancel{
        color: #26a2ff;
        margin-left: 10px;
        text-decoration: none;
    }
</style>