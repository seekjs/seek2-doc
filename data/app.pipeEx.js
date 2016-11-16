/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    format_pipe_extension: {
        cn: "设置格式化公用方法扩展",
        en: "Set formatting common method extensions"
    }
};


exports.getApi = function(lang) {
    return {
        name: "pipeEx",
        title: lang.format_pipe_extension,
        des: "相比于app.addPipe, 只能设置一次",
        type: "object",
        cat: "property",
        usage: `app.pipeEx = [object]`,
        example:  `app.pipeEx = require('util.pipeEx');`
    };
};