/**
 * Created by likaituan on 16/10/19.
 */
var log = console.log;

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
            ip: req.ip.replace('::ffff:', '')
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