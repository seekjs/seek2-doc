//排序表格
define(function (req, exp) {
	"use strict";
    var linq = req("sys.linq");
    var obj = req("sys.object");

    exp.onInit = function(){
        obj.merge(this, this.model);
        this.sortData();
        this.model = this;
    };

    //排序 
    exp.sort = function (context, key) {
        if (key==this.key) {
            this.dir = ({asc:"desc",desc:"asc"})[this.dir];
        }else {
            this.key = key;
            this.dir = "desc";
        }
        this.sortData();
        this.render();
    };

    //数据排序
    exp.sortData = function(){
        if (this.dir == "asc") {
            this.bodyData = linq.From(this.bodyData).OrderBy(function (item) {
                return item[exp.key];
            }).ToArray();
        } else {
            this.bodyData = linq.From(this.bodyData).OrderByDescending(function (item) {
                return item[exp.key];
            }).ToArray();
        }
    };

});