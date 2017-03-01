/*
* @Author: Marte
* @Date:   2017-02-28 21:33:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-28 21:37:33
*/

'use strict';
import LoadingView from './Loading.vue'

const Loading = {
    install (Vue){
        Vue.component('loading',LoadingView);
    }
}

export default Loading