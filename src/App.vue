<template>
    <div id="app">
        <loading v-show="isShowLoading"></loading>
        <header id="header" class="">
            <mt-header :title="titles">
                <router-link to="" slot="left" v-show="isShowBackBtn">
                    <mt-button icon="back" @click="Back">返回</mt-button>
                </router-link>
            </mt-header>
        </header>
        <router-view></router-view>
        <FooterView></FooterView>
    </div>
</template>

<script>
import BannerView from './components/Banner.vue'
import FooterView from './components/Footer.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'app',
    components : {
        BannerView,
        FooterView
    },
    data(){
        return {
            titles : '豆瓣电影'
        }
    },
    computed : mapGetters([
        'isShowLoading',
        'isShowBackBtn'
    ]),
    mounted(){
      //console.log(this.$route.path);
      this.setTitle();
    },
    methods :{
        setTitle(){
          var path = this.$route.path;
          switch(path){
              case '/home':
                this.titles = '豆瓣电影';
                break;
              case '/in_theaters':
                this.titles = '正在热映';
                break;
              case '/coming_soon':
                this.titles = '即将上映';
                break;
              case '/top250':
                this.titles = 'TOP250';
                break;
              case '/search':
                this.titles = '搜索';
                break;
              case '/searchList':
                this.titles = '搜索结果';
                break;
              default :
                this.titles = '电影详情';
          }
        },
        Back(){
            window.history.go(-1);
        }
    },
    watch : {
        $route (to,from){
            //console.log(to);
            this.setTitle();
            if(to.path == '/home'){
                this.$store.dispatch('hideBackBtn');
            }else{
                
                this.$store.dispatch('showBackBtn');
            }
        }
    }
}
</script>

<style scoped>
    
</style>
