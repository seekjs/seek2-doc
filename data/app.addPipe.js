/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    object: {
        cn: "对象",
        en: "Object"
    }
};


exports.getApi = function(lang) {
    return {
        name: "addPipe",
        title: lang.add_format_pipe_extension,
        des: "相比于app.pipeEx, 可以设置多次",
        cat: "method",
        args: [
            {name: "pipeEx", title: "pipeEx" + lang.object, type: "object", required: true}
        ],
        usage: `app.addPipe(pipeEx)`,
        example:  `
        app.addPipe(require(\"util.pipeEx1\"));
        app.addPipe(require(\"util.pipeEx2\"));`
    };
};