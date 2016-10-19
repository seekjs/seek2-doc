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

require("css.main");
require("css.ui");

var app = require("sys.app");

app.config({
    path: `/pages/`,
    useAnimate: true
});

var Lang = require("utils.Lang");

app.onInit = function(){
    window.$Lang = Lang.getLang(localStorage.lang);
};

if(!localStorage.lang){
    localStorage.lang = "cn";
}

app.init("home");
