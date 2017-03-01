<template>
    <div id="home">
        <BannerView></BannerView>
        <div class="homeContainer">
            <div class="info">
                <h2>豆瓣电影榜单集合</h2>
                <p>最新、最IN的影视信息收集~</p>
            </div>
            <div class="list">
                <mt-cell
                  title="正在热映"
                  to="/in_theaters"
                  is-link
                  value="">
                </mt-cell>
                <mt-cell
                  title="即将上映"
                  to="/coming_soon"
                  is-link
                  value="">
                </mt-cell>
                <mt-cell
                  title="TOP250"
                  to="/top250"
                  is-link
                  value="">
                </mt-cell>
            </div>
        </div>
    </div>
</template>

<script>
import BannerView from './Banner.vue'
export default {
    name: 'home',
    data () {
        return {
            
        }
    },
    components : {
        BannerView
    }
}
</script>

<style scoped>
    .homeContainer{
        padding: 10px;
    }
    .homeContainer .info{
        padding-left:20px;
    }
    .homeContainer .info p{
        font-size:14px;
        line-height:28px;
        padding: 10px 0;
    }
</style>
