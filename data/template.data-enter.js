/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    title: {
        cn: "绑定回车事件",
        en: "bind enter event"
    }
};


exports.getApi = function(lang) {
    return {
        name: "data-enter",
        title: lang.title,
        cat: "data"
    };
};