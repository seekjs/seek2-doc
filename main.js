/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        data: seekjs.resolve("./data/"),
        st: seekjs.resolve("./styles/")
    }
});

define(function(req, exp, mod){
    "use strict";
    req("st.main.css");
    req("st.ui.css");

    var app = req("sys.app");

    app.setPath({
        js: mod.resolve("./js/"),
        tp: mod.resolve("./templates/"),
        st: mod.resolve("st.")
    });

    app.useAnimate = true;

    app.init("home");
});
