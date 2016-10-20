/**
 * 获取用户环境
 * Created by likaituan on 16/9/9.
 */

/*
手机浏览器: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1",
MacBook: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",

 */


module.exports = function(){
    var _ua = navigator.userAgent;
    var ua = {};
    ua.isIphone = /iphone/i.test(_ua);
    ua.isIpad = /ipad/i.test(_ua);
    ua.isAndroid = /android/i.test(_ua);
    ua.isChrome = /chrome/i.test(_ua);
    ua.isSafari = /safari/i.test(_ua) && !ua.isChrome;
    ua.isFirefox = /firefox/i.test(_ua);
    ua.isIe = /msie/i.test(_ua);
    ua.isOpera = /opera/i.test(_ua);
    ua.isWeixin = /weixin/i.test(_ua);

    ua.isCordova = typeof(window)=="object" && window.cordova ? true : false;

    ua.isBrowser = ua.isSafari || ua.isChrome || ua.isFirefox || ua.isIe || ua.isOpera;
    ua.isIos = ua.isIphone || ua.isIpad;
    ua.isMobile = ua.isIos || ua.isAndroid;
    ua.isPc = !ua.isMobile;
    ua.isNative = ua.isMobile && !ua.isBrowser && !ua.isWeixin; //有问题

    return ua;
};