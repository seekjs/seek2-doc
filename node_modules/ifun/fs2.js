/**
 * fs扩展
 * Created by likaituan on 15/9/18.
 */

    var fs = require("fs");

    //删除目录
    exports.rmdir = function(path){
        if( fs.existsSync(path) ) {
            var files = fs.readdirSync(path);
            files.forEach(function(file){
                var curPath = path + "/" + file;
                if(fs.statSync(curPath).isDirectory()) {
                    exports.rmdir(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };

    //复制(深度)
    exports.copy = function(dir, dstDir){
        dir = dir.replace(/\/$/,"");
        dstDir = dstDir.replace(/\/$/,"");

        var dir2 = dstDir + "/" + dir.split("/").slice(-1)[0];
        fs.mkdirSync(dir2);
        fs.readdirSync(dir).forEach(function(file){
            console.log(dir+"/"+file);
            //exports.copyFile(dir+"/"+file, dir2+"/"+file);
        });
    };

    //复制文件
    exports.copyFile = function(src, dst){
        fs.createReadStream(src).pipe(fs.createWriteStream(dst));
    };