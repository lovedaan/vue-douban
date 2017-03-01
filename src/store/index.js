/*
* @Author: Marte
* @Date:   2017-02-28 21:28:59
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-28 21:57:26
*/

'use strict';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import actions from './actions.js'
import mutations from './mutations.js'


export default new Vuex.Store({
    modules : {
        mutations
    },
    actions
})