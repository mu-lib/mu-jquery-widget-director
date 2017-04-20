(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-director/examples/basic"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\.{2}/, "mu-jquery-widget-director")];
    }));
  }
})(["../widget"], function (widget) {
  return widget.extend({
    "go/(home|away)": function(destination) {
      console.log("went " + destination);
    }
  });
});