/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    top_container: {
        cn: "最顶层容器",
        en: "Top container"
    }
};


exports.getApi = function(lang) {
    return {
        name: "box",
        title: lang.top_container,
        type: "Node",
        cat: "property",
        subcat: "basic"
    };
};