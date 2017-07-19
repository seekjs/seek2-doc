/**
 * Created by gao on 07/03/2017.
 */
var restler = require('restler');
var qs = require('querystring');

// Get请求
exports.get = function(url, params, headers){
    return exports.Rest('get', url, params, headers);
};

// Post请求
exports.post = function(url, params, headers){
    return exports.Rest('post', url, params, headers);
};

// PostJson请求
exports.postJson = function(url, params, headers){
    return exports.Rest('postJson', url, params, headers);
};

// Put请求
exports.put = function(url, params, headers){
    return exports.Rest('put', url, params, headers);
};

var getDateTime = function () {
    //var minutes = new Date().getTimezoneOffset();
    var minutes = -480;  //先写死
    var timestamp = Date.now() - minutes * 60000;
    return new Date(timestamp).toISOString().replace('T', ' ').replace(/\..+$/, '');
};

// Rest请求
exports.Rest = function(method, url, params, headers, json){
    if (!url.match(/http[s]*:\/\//)) {
        url = javaPath + url;
    }
    log(`\nTIME: ${getDateTime()}`);
    log(`METHOD: ${method}`);
    log(`URL: ${url}`);
    params && log(`PARAMS: ${JSON.stringify(params)}`);

    return new Promise((resolve, reject) => {
        var data = {
            data: params
        };

        if (method === 'get') {
            if(params) {
                url += '?' + qs.stringify(params);
            }
            data = {};
        }
        console.log(headers);
        var options = {
            timeout: 60000,
            headers: headers
        };
        try {
            var rq;
            if (method === 'postJson') {
                // log({method, url, params, options});
                rq = restler[method](url, params, options);
            } else {
                Object.assign(data, options);
                rq = restler[method](url, data);
            }
            rq.on('timeout', ms => {
                log('did not return within ' + ms + ' ms');
                reject(504);
            }).on('complete', (data, res) => {
                parseResult(data, res, resolve, reject);
            });
        }catch(e){
            log({e});
        }
    });
};


// 统一处理返回结果
var parseResult = function (data, res, resolve, reject) {
    res && log(`STATUS: ${res.statusCode}`);
    log(`RESULT: ${JSON.stringify(data,null,4)}`);

    if (data instanceof Error) {
        reject({
            success: false,
            code: 500
        });
    }else if(res){
        if (res.statusCode.toString().match(/20[0-9]/)) {
            if(data && data.error) {
                reject({
                    code: data.status,
                    message: code[data.status] || data.message || ''
                });
            } else {
                resolve(data);
            }
        } else {
            var nodeStatusCode = [403].includes(res.statusCode) ? 200 : res.statusCode;
            reject({
                code: nodeStatusCode,
                message: code[data.status] || data.message || ''
            });
        }
    } else {
        reject({
            success: false,
            code: 500
        });
    }
};
