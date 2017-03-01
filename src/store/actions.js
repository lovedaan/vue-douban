/*
 * @Author: Marte
 * @Date:   2017-02-28 21:44:35
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-03-01 09:38:28
 */

'use strict';
export default {
    showLoading({
            commit
        }) {
            commit('showLoading');
        },
        hideLoading({
            commit
        }) {
            commit('hideLoading');
        },
        showBackBtn({
            commit
        }) {
            commit('showBackBtn');
        },
        hideBackBtn({
            commit
        }) {
            commit('hideBackBtn');
        }
}