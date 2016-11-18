/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    title: {
        cn: "子View",
        en: "sub view"
    }
};


exports.getApi = function(lang) {
    return {
        name: "data-view",
        title: lang.title,
        cat: "data"
    };
};