/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        "data.": "/data/",
        "css.": {
            path: "/styles/",
            type: ".css"
        }
    }
});

require("css.main");
require("css.ui");

var app = require("sys.app");

app.config({
    path: `/pages/`,
    useAnimate: true
});

app.init("home");
