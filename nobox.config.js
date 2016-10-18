/**
 * Created by likaituan on 16/10/19.
 */

var {log} = require("ifun");

module.exports = function (args) {
    return {
        static: {
            path: "/",
            dir: __dirname,
        },
        pub:{
            domain: "seekjs.org",
            dir: "/nobox-server/seekjs-doc",
            port: 2016
        },
        port: 2016
    };
};