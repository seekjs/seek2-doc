/**
 * Created by likaituan on 16/10/19.
 */

var {requireJson} = require("ifun");
var myConfig = requireJson(`${__dirname}/my.config.js`);

module.exports = function (args) {
    var staticMaps = args.f && myConfig.staticMaps || [];
    return {
        static: {
            items: staticMaps.concat({
                path: "/",
                dir: args.time ? `${__dirname}/dist` : __dirname
            })
        },
        onPubBefore: function(cmd){
            cmd(`seekjs build`);
        },
        pub:{
            packages: ["nobox.config.js", "dist"]
        },
        gzip: true,
        port: 2016
    };
};