/**
 * Created by likaituan on 16/10/19.
 */

module.exports = function (args) {
    return {
        static: {
            items: [/*{
                path: "/node_modules/seekjs/",
                dir: "/data/github/seekjs2"
            },*/{
                path: "/",
                dir: __dirname
            }]
        },
        pub:{
            domain: "seekjs.org",
            ip: "101.200.178.123",
            packages: ["README.md", "css", "data", "images", "index.html", "main.js", "nobox.config.js", "node_modules", "package.json", "pages", "plugins", "utils"],
            dir: "/nobox-server/seekjs-doc",
            port: 2016
        },
        port: 2016
    };
};