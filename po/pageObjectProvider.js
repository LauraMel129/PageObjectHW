var PAGE_OBJECT_MAP = {
    "navigation":"./"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};