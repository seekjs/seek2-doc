/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    all_view_ini_event: {
        cn: "所有View的初始化事件",
        en: "All View initialization events"
    },
    current_view: {
        cn: "当前View",
        en: "Current View"
    }
};


exports.getApi = function(lang) {
    return {
        name: "onInit",
        title: lang.all_view_ini_event,
        args: [
            {name: "view", title: lang.current_view, type: "object", required:false}
        ],
        cat: "event",
        usage: `app.onInit = function(view){...}`,
        example: `
        app.onInit = function(view){
            if(!localStorage.isLogin && view.uri!="login"){
                app.go("login");
            }
        }`
    };
};