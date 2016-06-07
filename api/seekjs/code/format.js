/**
	@title 代码格式化组件
	@author Li
	@date 2015.1.12
*/
define(function (req, exp, mod) {
	"use strict";
	var format = req("sys.format");

	//重复
	var repeat = function (s, n) {
		return new Array(n + 1).join(s);
	};

	//求反
	var rev = function (state) {
		return state == "open" ? "close" : "open";
	};

	var re = /\w+|[\u4e00-\u9fa5]+|\\\/\/|\/\/|\/\*|\*\/|\{\}|\[\]|\(\)|\(\{|\}\)|.|\n|\t/g;

	/**
		@title 代码格式化组件
		@param ops 配置选项
		@param ops.container 弹窗所在的容器
		@return 代码格式化实例对象
	 */
	mod.exports = function (code) {
		code = code.replace(/[\r\t]/g, "").replace(/\n{2,}/g, "\n\n").replace(/\n[^\S\n]+|[^\S\n]+\n/g, "\n").trim();
		code = code.match(re);
		//console.log(code);

		var o = {
			get tab() {
				return quote_state == "close" ? '<br/>' + repeat("--", zones.length * 2) : "";
			}
		};

		var escapeType = 0;
		var reType = 0;
		var quoteType = 0;
		var commentType = 0;
		var zones = [];
		var flag = "";
		var i;

		var o = {
			get br() {
				return '<br/>';
			},
			get tab() {
				return '&#12288;&#12288;';
			},
			get blank() {
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
				if (escapeType == 0 && s == "\\") {
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
			//正则和注释都关闭的状态 处理字符串
			if (reType == 0 && commentType == 0) {
				var oldQuoteType = quoteType;
				if (s == "'") {
					quoteType = quoteType == 0 ? 1 : quoteType == 1 ? 0 : 2;
				} else if (s == '"') {
					quoteType = quoteType == 0 ? 2 : quoteType == 2 ? 0 : 1;
				}
			}
			//引号和注释都关闭的状态 处理正则
			if (quoteType == 0 && commentType == 0) {
				var oldReType = reType;

				if (s == "/" || s == "\\//" || s == "*/") {
					reType = reType == 1 ? 0 : 1;
					if (oldReType != reType) {
						a.push(s);
						if (reType == 0) {
							if (/[img]+/.test(o.next)) {
								a.push(o.next);
								++i;
							}
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
			}

			//回车
			if (s == "\n") {
				a.push(o.br);
				if (commentType == 1) {
					commentType = 0;
					a.push('</font>');
				}
			} else if (s == "\t") {
				a.push(o.tab);
			} else if (s == " ") {
				a.push(o.blank);
			}

			if (s == "(") {
				flag = "parenthese";
				zones.push(flag);
				a.push(s);
			} else if (s == ")") {
				zones.pop();
				flag = zones[zones.length - 1] || "";
				a.push(s);
			} else if (s == "{" || s == "({") {
				flag = "brace";
				zones.push(flag);
				a.push(s + o.tab);
			} else if (s == "}" || s == "})") {
				zones.pop();
				flag = zones[zones.length - 1] || "";
				a.push(o.tab + s);
				o.nextS != "else" && o.nextS != "," && o.nextS != ";" && o.nextS != "}" && a.push(o.tab);
			} else if (s == ",") {
				a.push(s);
				console.log(flag)
				flag == "brace" && a.push(o.tab);
			} else if (s == ";") {
				a.push(s);
				o.nextS != "}" && a.push(o.tab);
			}

			a.length == len && a.push(s);
		}
		return a.join("");
	};

});