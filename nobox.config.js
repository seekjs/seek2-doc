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
        remote: {
            path: "/service/",
            file: require("./node/service"),
            type: "json"
        },
        onPubBefore: function(cmd){
            cmd(`seekjs build`);
        },
        pub:{
            packages: ["nobox.config.js", "node", "dist"]
        },
        gzip: true,
        port: 2016
    };
};