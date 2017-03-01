/*
 * @Author: Marte
 * @Date:   2017-02-28 21:01:18
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-03-01 12:02:53
 */

'use strict';
//封装一个json转字符串函数
function json2url(json) {

    //创建一个空数组
    var arr = [];

    //遍历json的每个键值对
    for (var key in json) {

        //把每个键值对转换成=的形式依次放入数组
        arr.push(key + '=' + json[key]);

    };

    //用&进行字符串拼接，并返回结果
    return arr.join('&');
}

//封装一个jsonp函数
const jsonp = function(json) {

    //在没有传入json的情况下，默认设置为{}
    json = json || {};
    json.showLoading && json.showLoading();
    //判断是否传入url交互地址，如果没有，则终止运行
    if (!json.url) return;

    //设置响应时间，默认为15秒（后台为3秒）
    json.timeout = json.timeout || 15000;

    //设置默认的接口（仅对于此处用到的url）
    json.cbName = json.cbName || 'cb';

    //默认数据为一个空的json
    json.data = json.data || {};

    //设置jsonp的回调函数名并同时设置刷新缓存（利用随机数）
    json.data[json.cbName] = 'show' + Math.random();

    //把随机数里生成的.替换为空（函数命名不要有点）
    json.data[json.cbName] = json.data[json.cbName].replace('.', '');

    //获取头部元素
    var oHead = document.getElementsByTagName('head')[0];

    //创新script（此处用到jsonp的核心机制，利用script的跨域异步请求，调用回调函数）
    var oS = document.createElement('script');

    //给script的src的地址赋值为交互地址
    oS.src = json.url + '?' + json2url(json.data);

    //把创建的script放入head中
    oHead.appendChild(oS);


    //设置一个定时器
    var timer = setTimeout(function() {

        //当响应时间超时后，使后续的函数不执行
        window[json.data[json.cbName]] = null;

        //并提示网络信息
        json.error && json.error('亲，网络不给力！');

    }, json.timeout);

    //当数据正常响应时，执行以下操作
    window[json.data[json.cbName]] = function(res) {

        //关闭定时器
        clearTimeout(timer);

        //清除之前插入的script（因为script只加载一次，并且此时已收到数据）
        oHead.removeChild(oS);
        //执行成功时设置的函数
        json.success && json.success(res);
        json.hideLoading && json.hideLoading();
    };
}

export default jsonp;