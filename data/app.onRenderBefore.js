/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    all_view_loaded_event: {
        cn: "所有View的加载完成事件",
        en: "All View loaded to complete the event"
    },
    current_view: {
        cn: "当前View",
        en: "Current View"
    }
};


exports.getApi = function(lang) {
    return {
        name: "onRenderBefore",
        title: lang.all_view_loaded_event,
        args: [
            {name: "view", title: lang.current_view, type: "object"}
        ],
        cat: "event",
        usage: `app.onRender = function(view){...}`,
        example: `
        app.onRenderBefore = function(view){
            if(view.uri=="home"){
                alert("welcome goto my home!");
            }
        }`
    };
};