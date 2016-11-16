/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    ini_event: {
        cn: "初始化事件",
        en: "Initialization event"
    }
};


exports.getApi = function(lang) {
    return {
        name: "onInit",
        title: lang.ini_event,
        cat: "event"
    };
};