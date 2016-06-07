define(function (req, exp) {
	"use strict";
    req("./ui.css");
    var $ = req("sys.jquery");
    var uibase = req("sys.uibase");

    var accordionClass = function (ops) {
        this.speed = ops.speed || 500;
        this.el = {};
        this.el.box = $(ops.container);
        this.el.main = this.el.box.find(ops.main);
        this.el.sub = this.el.box.find(ops.sub);
        this.el.main.each(this.addEvent.bind(this));
        this.init(ops.defaultIndex||0);

        if (ops.onItemClick) {
            var sb = this.el.sub;
            sb.each(function (i) {
                sb.eq(i).children().click(function(){
                    ops.onItemClick(this.innerHTML, this);
                });
            });
        }
    };

    exports = accordionClass.prototype = {};

    //切换菜单
    exp.addEvent = function (i) {
        this.el.main.eq(i).click(this.chg.bind(this,i));
    };

    //切换菜单
    exp.init = function (iniIndex) {
        var me = this;
        this.el.sub.each(function (i) {
            me.el.main.attr("class", iniIndex == i ? "open" : "close");
            $(this).css("display", iniIndex==i?"block":"none");
        });
        this.index = iniIndex;
    };

    //切换菜单
    exp.chg = function (index) {
        if (this.index > -1) {
            this.el.main.eq(this.index).attr("class", "close");
            this.el.sub.eq(this.index).slideUp(this.speed);
        }
        if (this.index == index) {
            this.index = -1;
        } else {
            this.el.main.eq(index).attr("class", "open");
            this.el.sub.eq(index).slideDown(this.speed);
            this.index = index;
        }
    };

    module.exports = function (ops) {
        return new accordionClass(ops);
    };

});