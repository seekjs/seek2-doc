/**
 * Created by likaituan on 15/8/10.
 */

exports.lang = {
    type: {
        cn: "View类型",
        en: "View Type"
    },
    main_view: {
        cn: "主View",
        en: "main view"
    },
    sub_view: {
        cn: "子View",
        en: "sub view"
    }
};


exports.getApi = function(lang) {
    return {
        name: "type",
        title: lang.type,
        type: "String",
        list: {
            main: lang.main_view,
            sub: lang.sub_view
        },
        cat: "property",
        sub_cat: "basic",
        example: `
        <template>
            <div class="main">
                <div data-view="subview1"></div>
                <div data-view="subview2"></div>
            </div>
        </template>`
    };
};