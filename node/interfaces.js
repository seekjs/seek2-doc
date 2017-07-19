/**
 * Created by likaituan on 02/12/2016.
 */

var fs = require("fs");
var {log, getArgs} = require("ifun");
var rest = require('./rest');
var dbConfig = require('../config/db');

var env = getArgs().env || dbConfig.default_env;
var mongodb = require('./mongodb');
mongodb.setConfig(dbConfig[env]);

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

// 添加访客
exports.addVisitor = function(req, res, {params, session}){
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
	        rest.get(`https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?query=${item.ip}&resource_id=6006`).then(
		        ret2 => {
			        item.address = ret2.localtion;
			        db.collection('visitor').insertOne(item).then(
				        ret => {
					        log({insertCount: ret.insertedCount});
					        ret.insertedCount == 1 && res.end('insert success!');
				        },
				        err => log({err})
			        );
		        },
			    err => log({err})
	        );
        },
        err => log({err})
    ).close();

    //res.json({success:true, code:200, data:null, message:''});
    //res.end(JSON.stringify({success:true, code:200, data:null, message:''}));
};

// 获取访客列表
exports.getVisitorList = function(req, res, {params, session}){
    var list = [];
    mongodb.connect().then(
        db => {
            db.collection('visitor').find().toArray().then(
	            docs => {
		            list = docs || [];
		            res.json(list);
	            },
	            err => {
		            log({err});
		            return Promise.reject(err);
	            }
            );
        },
        err => log({err})
    ).close();
};