/**
 * Created by likaituan on 03/03/2017.
 */

var mongodb = require("mongodb").MongoClient;

var config = {
    host: 'localhost',
    port: 27017,
    database: 'test',
    username: '',
    password: ''
};

exports.setConfig = function(_config) {
    Object.assign(config, _config);
    exports.connect().then(x=>Promise.resolve(x), y=>Promise.reject(y)).close();
};

var isFirst = true;
var DB;

// 连接
exports.connect = function () {
    var auth = config.username && config.password && `${config.username}:${config.password}@` || '';
    var host = config.host || 'localhost';
    var port = config.port || 27017;
    var dbName = config.database || 'test';
    var connectStr = `mongodb://${auth}${host}:${port}/${dbName}`;
    return mongodb.connect(connectStr).then(
        db => {
            if (isFirst) {
                isFirst = false;
                console.log(`MongoDB Is Running At ${host}:${port} by [${dbName}] database`);
            }
            return Promise.resolve(DB = db);
        },
        err => Promise.reject(err.message)
    )/*.catch(
	    err => console.log(err)
    )*/;
};

// 断开连接
Promise.prototype.close = function(){
    return this.then(
        data => {
            DB && DB.close();
            return Promise.resolve(data);
        },
        err => {
            DB && DB.close();
            return Promise.reject(err);
        }
    );
};
