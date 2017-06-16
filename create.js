(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-jquery-widget/create", "./go"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-jquery-widget/create"), require("./go"));
  } else {
    root["mu-jquery-widget-director/create"] = factory(root["mu-jquery-widget/create"], root["mu-jquery-widget-director/go"]);
  }
})(this, function (create, go) {
  return create.extend(go);
});
