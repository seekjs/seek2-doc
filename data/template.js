/**
 * Created by likaituan on 15/8/10.
 */

var Lang = require("utils.Lang");

//语言配置
exports.lang = {
    conditional_branch: {
        cn: "条件分支",
        en: "conditional branch"
    },
    other_condition: {
        cn: "最后条件",
        en: "Final condition"
    },
    loop_start: {
        cn: "循环开始",
        en: "Loop start"
    },
    current_array_length: {
        cn: "当前循环的数组长度",
        en: "Current loop array length"
    },
    is_first_item: {
        cn: "是否第一项",
        en: "Whether or not the first item"
    },
    is_last_item: {
        cn: "是否最后一项",
        en: "Whether the last item"
    },
    current_item: {
        cn: "当前项",
        en: "Current Item"
    },
    start_from_zero_index: {
        cn: "当前索引, 从0开始",
        en: "Current index, starting from 0"
    },
    start_from_one_index: {
        cn: "当前索引, 从1开始",
        en: "Current index, starting from 1"
    }
};

//属性列表
exports.getApiList = function() {
    var lang = Lang.getLang(exports.lang, localStorage.lang);

    return {
        title: $Lang.template,
        list: [
            {
                name: "elsif",
                title: lang.condition_branch,
                usage: `{elsif condition}`
            },
            {
                name: "else",
                title: lang.other_condition,
                usage: `{else}`
            },
            {
                name: "foreach",
                title: lang.loop_start,
                usage: `{foreach src=json key=index }`
            },
            {
                name: "src.length",
                title: lang.current_array_length
            },
            {
                name: "src.first",
                title: lang.is_first_item
            },
            {
                name: "src.last",
                title: lang.is_last_item
            },
            {
                name: "item",
                title: lang.current_item
            },
            {
                name: "index",
                title: lang.start_from_zero_index
            },
            {
                name: "sn",
                title: lang.start_from_one_index
            }
        ]
    };
};
