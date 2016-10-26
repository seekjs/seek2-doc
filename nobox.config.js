/**
 * Created by likaituan on 16/10/19.
 */

var {requireJson,log} = require("ifun");
var myconfig = requireJson(`${__dirname}/my.config.js`);

module.exports = function (args) {
    var config = {
        static: {
            items: [{
                path: "/",
                dir: __dirname
            }]
        },
        pub:{
            packages: ["README.md", "css", "data", "images", "index.html", "main.js", "nobox.config.js", "node_modules", "package.json", "pages", "plugins", "utils"]
        },
        port: 2016
    };

    if(args.useLocalFramework && myconfig.frameworkDir){
        config.static.items.unshift({
            path: "/node_modules/seekjs/",
            dir: myconfig.frameworkDir
         });
    }

    return config;
};