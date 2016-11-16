/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    render_event: {
        cn: "View加载完成或刷新触发的事件,相当于window.onload",
        en: "View loaded to complete or refresh the trigger event, equivalent to window.onload"
    }
};


exports.getApi = function(lang) {
    return {
        name: "onRender",
        title: lang.render_event,
        cat: "event"
    };
};