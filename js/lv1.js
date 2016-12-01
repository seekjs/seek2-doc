 exports.subpage = "blog-flow";
exports.changePage = function(){
    this.subpage = this.element.innerHTML;
    this.render();
};
