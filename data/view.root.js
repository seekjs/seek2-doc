/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    main_view: {
        cn: "主View(最顶层View)",
        en: "Main View (top View)"
    }
};


exports.getApi = function(lang) {
    return {
        name: "root",
        title: lang.main_view,
        type: "Object",
        cat: "property",
        sub_cat: "box"
    };
};