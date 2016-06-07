/**
	@title 代码高亮组件
	@author Li
	@date 2015.1.14
*/
define(function (req, exp, mod) {
	"use strict";
	var format = req("sys.format");

	/**
		@title 代码高亮组件
		@param ops 配置选项
		@param ops.container 弹窗所在的容器
		@return 代码高亮实例对象
	 */

	//着色
	var getColor = function (code) {
		var colors = {
			"blue": /\b(var|new|function|return|typeof|if|else|switch|case|default|for|in|break|continue|do|while|try|catch|this|true|false)\b/g
		};
		for (var k in colors) {
			code = code.replace(colors[k], format.strFormat('<font color="{0}">{1}</font>', k, "$1"));
		}
		return code;
	};


	//重复
	var repeat = function (s, n) {
		return new Array(n + 1).join(s);
	};

	//求反
	var rev = function (state) {
		return state == "open" ? "close" : "open";
	};

	var re = /\w+|[\u4e00-\u9fa5]+|\\\/\/|\/\/|\/\*|\*\/|\{\}|\[\]|\(\)|\(\{|\}\)|.|\n|\t/g;
	mod.exports = function (code) {
		code = code.replace(/\r\n|\r/g, "\n");
		code = code.match(re);
		//console.log(code);

		var escapeType = 0;
		var reType = 0;
		var quoteType = 0;
		var commentType = 0;
		var i;

		var o = {
			get br() {
				return '<br/>';
			},
			get tab(){
				return '&#12288;&#12288;';
			},
			get blank(){
				return '&nbsp;';
			},
			get prev() {
				return code[i - 1] || "";
			},
			get next() {
				return code[i + 1] || "";
			},
			get nextS() {
				for (var j = i + 1; j < code.length; j++) {
					if (/\S/.test(code[j])) {
						return code[j];
					}
				}
				return "";
			}
		};

		var a = [];
		for (i = 0; i < code.length; i++) {
			var len = a.length;
			var s = code[i];
			//console.log(s, "reType="+reType, "commentType="+commentType, "quoteType="+quoteType);
			
			//处理转义
			if (reType == 1 || quoteType > 0) {
				var oldEscapeType = escapeType;
				if(escapeType == 0 && s=="\\"){
					escapeType = 1;
					a.push(s);
				} else if (escapeType == 1 && o.prev == "\\") {
					escapeType = 0;
					a.push(s);
				}
				if (oldEscapeType != escapeType) {
					continue;
				}
			}
			//正则和注释及引号都关闭的状态
			if (reType == 0 && quoteType == 0 && commentType == 0) {
				//处理关键字
				if (/\w+/.test(s)) {
					a.push(getColor(s));
				}
			}
			//正则和注释都关闭的状态 处理字符串
			if (reType == 0 && commentType == 0) {
				var oldQuoteType = quoteType;
				if(s == "'") {
					quoteType = quoteType == 0 ? 1 : quoteType==1 ? 0 : 2;
				} else if (s == '"') {
					quoteType = quoteType == 0 ? 2 : quoteType==2 ? 0 : 1;
				}
				if (oldQuoteType != quoteType) {
					quoteType>0 && a.push('<font style="color:rgb(163,21,21)">');
					a.push(s);
					quoteType==0 && a.push('</font>');
				}
			}
			//引号和注释都关闭的状态 处理正则
			if (quoteType == 0 && commentType == 0) {
				var oldReType = reType;

				if(s == "/" || s == "\\//" || s=="*/"){
					reType = reType==1 ? 0 : 1;
					if (oldReType != reType) {
						reType==1 && a.push('<font style="color:rgb(163,21,21)">');
						a.push(s);
						if (reType==0) {
							if(/[img]+/.test(o.next)){
								a.push(o.next);
								++i;
							}
							a.push('</font>');
						}
					}
				}
			}

			//正则和引号都关闭的状态 处理注释
			if (reType == 0 && quoteType == 0) {
				var oldCommentType = commentType;

				if (s == "//") {
					commentType = commentType == 0 ? 1 : commentType;
				} else if (s == "/*") {
					commentType = commentType == 0 ? 2 : commentType;
				} else if (s == "*/") {
					commentType = commentType == 2 ? 0 : commentType;
				}
				if(oldCommentType!=commentType){
					commentType>0 && a.push('<font color="green">');
					a.push(s);
					commentType==0 && a.push('</font>');
				}
			}

			//回车
			if (s == "\n") {
				a.push(o.br);
				if (commentType == 1) {
					commentType = 0;
					a.push('</font>');
				}
			}else if (s == "\t") {
				a.push(o.tab);
			} else if (s == " ") {
				a.push(o.blank);
			}
			a.length == len && a.push(s);
		}
		return a.join("");
	};
});