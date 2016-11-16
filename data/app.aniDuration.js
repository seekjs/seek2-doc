/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    animate_duration: {
        cn: "动画时长(毫秒)",
        en: "Animate Duration(Millisecond)"
    }
};


exports.getApi = function(lang) {
    return {
        name: "aniDuration",
        title: lang.animate_duration,
        cat: "property",
        subcat: "animate",
        usage: `app.aniDuration = [number]`,
        type: "number",
        defaultVal: 500,
        example: `app.aniDuration = 1000;`
    };
};