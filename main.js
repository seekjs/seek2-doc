/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        "data.": "/data/",
        "utils.": "/utils/",
        "css.": {
            path: "/css/",
            type: ".css"
        },
        "code.": "/plugins/code/"
    }
});

require("css.tag");
require("css.class");

var app = require("sys.app");

app.config({
    page: `/pages/`,
    useAnimate: true
});

app.viewEx = require("utils.viewEx");
app.pipeEx = require("utils.pipeEx");

app.usePlugin("seekjs-plugin-mask", {display:false});
app.usePlugin("seekjs-plugin-dialog", {display:false});
// app.usePlugin("seekjs-plugin-datePick", {display:false});

var Lang = require("utils.Lang");

app.onInit = function(view){
    window.$Lang = Lang.getLang(Lang, localStorage.lang);
    window.$lang = Lang.getLang(view.$lang, localStorage.lang);
};

if(!localStorage.lang){
    localStorage.lang = "en";
}

app.init("home");
