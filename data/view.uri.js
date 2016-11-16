/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    address: {
        cn: "地址",
        en: "address"
    }
};


exports.getApi = function(lang) {
    return {
        name: "uri",
        title: lang.address,
        type: "String",
        example: "ad/160101/r1",
        cat: "property",
        sub_cat: "url"
    };
};