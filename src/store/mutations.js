/*
 * @Author: Marte
 * @Date:   2017-02-28 21:49:56
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-03-02 10:08:19
 */

'use strict';

import getters from './getters.js'

const state = {
    isShowLoading: false,
    isShowBackBtn: false
}

const mutations = {
    showLoading(state) {
            state.isShowLoading = true;
        },
        hideLoading(state) {
            state.isShowLoading = false;
        },
        showBackBtn(state) {
            state.isShowBackBtn = true;
        },
        hideBackBtn(state) {
            state.isShowBackBtn = false;
        }
}

export default {
    state,
    mutations,
    getters
}