/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    conditional_branch: {
        cn: "条件分支",
        en: "conditional branch"
    }
};


exports.getApi = function(lang) {
    return {
        name: "elsif",
        title: lang.condition_branch,
        usage: `{elsif condition}`
    };
};