/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    title: {
        cn: "绑定事件",
        en: "bind event"
    }
};


exports.getApi = function(lang) {
    return {
        name: "data-event",
        title: lang.title,
        cat: "data"
    };
};