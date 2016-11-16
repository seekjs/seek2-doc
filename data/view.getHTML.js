/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    generate_html: {
        cn: "生成HTM",
        en: "Generate HTM"
    }
};


exports.getApi = function(lang) {
    return {
        name: "getHTML",
        title: lang.generate_html,
        cat: "method"
    };
};