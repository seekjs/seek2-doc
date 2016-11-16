/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    is_use_animate: {
        cn: "是否使用动画",
        en: "Is Use Animate"
    }
};


exports.getApi = function(lang) {
    return {
        name: "useAnimate",
        title: lang.is_use_animate,
        cat: "property",
        sub_cat: "animate",
        usage: `app.useAnimate = [boolean]`,
        type: "boolean",
        defaultVal: "false",
        example: `app.useAnimate = true;`
    };
};