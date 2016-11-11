/**
 * Created by likaituan on 15/8/10.
 */

exports.getApi = function() {
    return {
        name: "type",
        title: "view"+$Lang.type,
        type: "String",
        list: {
            main: $Lang.main_view,
            sub: $Lang.sub_view
        },
        cat: "property",
        subcat: "basic",
        example: `
        <template>
            <div class="main">
                <div data-view="subview1"></div>
                <div data-view="subview2"></div>
            </div>
        </template>`
    };
};