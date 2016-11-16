/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    parent_view: {
        cn: "父级View",
        en: "Parent View"
    }
};


exports.getApi = function(lang) {
    return {
        name: "parent",
        title: lang.parent_view,
        type: "Object",
        cat: "property",
        sub_cat: "box"
    };
};