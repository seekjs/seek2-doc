/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    part: {
        cn: "局部",
        en: "part"
    }
};


exports.getApi = function(lang) {
    return {
        name: "part",
        title: lang.part,
        type: "Object",
        cat: "property",
        sub_cat: "box"
    };
};