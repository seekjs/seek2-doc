/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    view_id: {
        cn: "view的唯一ID",
        en: "View only ID"
    }
};


exports.getApi = function(lang) {
    return {
        name: "id",
        title: lang.view_id,
        type: "String",
        example: "r1",
        cat: "property",
        sub_cat: "url"
    };
};