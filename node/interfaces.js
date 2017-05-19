/**
 * Created by likaituan on 02/12/2016.
 */

var fs = require("fs");
var {log} = require("ifun");

var mongodb = require('./mongodb');
mongodb.setConfig({
    database: 'counter'
});

var getDateTime = function(){
    var timestamp = Date.now() - new Date().getTimezoneOffset()*60000;
    return new Date(timestamp).toISOString().replace("T"," ").replace(/\.\d+Z/,"");
};

var getEnv = function(ua) {
    //log({ua});
    var device = "pc";
    var os = "window";
    var browser = "ie";

    if (/ios|iphone|ipad/i.test(ua)) {
        os = "ios";
    }else  if (/android/i.test(ua)) {
        os = "android";
    }else if (/Mac OS X/i.test(ua)) {
        os = "mac os";
    }

    if(os=="ios"||os=="android") {
        if(/pad/i.test(ua)){
            device = os=="ios" ? "ipad" : "android pad";
        }else if(/phone/i.test(ua)){
            device = os=="ios" ? "iphone" : "android phone";
        }else{
            device = "mobile";
        }
    }

    if(/MicroMessenger/i.test(ua)){
        browser = "WeChat";
    }else if(/chrome|safari/i.test(ua)){
        browser =  RegExp.lastMatch;
    }else if(/msie/i.test(ua)==false){
        browser = "unknown"
    }

    return {device,os,browser};
};

exports.countPerson = function(req, res, {params, session}){
    var file = `${__dirname}/count.json`;
    var code = fs.readFileSync(file).toString().trim();
    var json = JSON.parse(code);
    var env = getEnv(req.headers["user-agent"]);
    var item = {
        ip: session.ip,
        time: getDateTime(),
        device: env.device,
        os: env.os,
        browser: env.browser
    };
    log({item});
    mongodb.connect().then(
        db => {
            log({db});
        },
        err => log({err})
    ).close();

    res.json({success:true, code:200, data:null, message:''});
};
