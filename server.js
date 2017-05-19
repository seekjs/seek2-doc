/**
 * Created by likaituan on 16/10/19.
 */
var log = console.log;

var {requireJson} = require("ifun");
var myConfig = requireJson(`${__dirname}/my.config.js`);
var interfaces = require('./node/interfaces');

var express = require('express');
var app = express();

app.use(express.static("dist"));

var options = {};
options.session = {};
Object.entries(interfaces).forEach(([method, fun]) => {
    app.use(`/service/${method}`, (req, res) => {
        options.params = req.query;
        options.session = {
            ip: req.ip
        };
        fun(req, res, options);
    });
});

var port = 2016;
app.listen(port, err => {
    var uri = `http://localhost: ${port}`;
    if (err) {
        return log(err);
    }
    log(`Node Is Running At: ${uri}`);
});

app.on('error', (a,b,c) => {
   log({a,b,c});
});

/*
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
            file: require("./node/interfaces"),
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
*/