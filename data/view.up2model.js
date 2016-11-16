/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    up2model: {
        cn: "更新到模型",
        en: "Update to model"
    }
};


exports.getApi = function(lang) {
    return {
        name: "up2model",
        title: lang.up2model,
        cat: "method"
    };
};