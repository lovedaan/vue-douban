<template>
    <div id="footer">
        <ul class="footerNav">
             <router-link tag="li" to="/home" active-class="cur" >
                <a href="#">
                    <div class="item_icon">
                    </div>
                    <div class="item_label">
                        榜单
                    </div>
                </a>
            </router-link>
            <router-link tag="li" to="/search" active-class="cur" >
                <a href="#">
                    <div class="item_icon">
                    </div>
                    <div class="item_label">
                        搜索
                    </div>
                </a>
            </router-link>
            <router-link tag="li" to="/my" active-class="cur">
                <a href="#">
                    <div class="item_icon">
                    </div>
                    <div class="item_label">
                        我的
                    </div>
                </a>
            </router-link>
        </ul> 
        
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    #footer{
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        max-width:640px;
        min-width:300px;
        margin: 0 auto;
        height: 50px;
        background-color: #fff;
    }
    #footer .footerNav{
        overflow: hidden;
    }
    #footer .footerNav li{
        width: 33.3333%;
        float: left;
        height:50px;
        text-align: center;
    }
    #footer .footerNav li a{
        display:block;
    }
    #footer .footerNav li a .item_icon{
        width: 24px;
        height: 25px;
        margin: 0 auto 5px;
    }
    #footer .footerNav li:nth-child(1) a .item_icon{
        background: url('../assets/images/board.png') no-repeat;
        background-size:cover;
    }
    #footer .footerNav li:nth-child(1).cur a .item_icon{
        background: url('../assets/images/board-actived.png') no-repeat;
        background-size:cover;
    }
    #footer .footerNav li:nth-child(2) a .item_icon{
        background: url('../assets/images/search.png') no-repeat;
        background-size:cover;
    }
    #footer .footerNav li:nth-child(2).cur a .item_icon{
        background: url('../assets/images/search-actived.png') no-repeat;
        background-size:cover;
    }
    #footer .footerNav li:nth-child(3) a .item_icon{
        background: url('../assets/images/profile.png') no-repeat;
        background-size:cover;
    }
    #footer .footerNav li:nth-child(3).cur a .item_icon{
        background: url('../assets/images/profile-actived.png') no-repeat;
        background-size:cover;
    }
    #footer .footerNav li a .item_icon img{
        width: 100%;
        height: 100%;
    }
</style>