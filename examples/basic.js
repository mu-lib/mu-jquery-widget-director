(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["../widget"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("../widget"));
  } else {
    root["mu-jquery-widget-director/examples/basic"] = factory(root["mu-jquery-widget-director/widget"]);
  }
})(this, function (widget) {
  return widget.extend({
    "go/(home|away)": function (destination) {
      console.log("went " + destination);
    }
  });
});