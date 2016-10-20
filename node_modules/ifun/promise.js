/**
 * Created by likaituan on 16/9/7.
 */

var promiseClass = function(){
    this.stack = [];
    var args = Array.from(arguments);
    return this.then(...args);
};

promiseClass.prototype.then = function(fun){
    var args = Array.from(arguments);
    this.stack.push(args);
    return this;
};

promiseClass.prototype.end = function(){
    var stack = this.stack.shift();
    if(stack) {
        var fun = stack.shift();
        fun(...stack, ()=>{this.end()});
    }
    return this;
};

module.exports = function(){
    var args = Array.from(arguments);
    return new promiseClass(...args);
};

/*
var {log} = require("./ifun");

var a=function(done){
    log("a");
    done();
};

var b=function(n,done){
    log("b"+n);
    done();
};
var c=function(){
    log("c");
};

module.exports(a).then(b,2).then(c).end();
*/