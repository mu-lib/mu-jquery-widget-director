(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-director/create"] = factory.apply(root, modules.map(function (m) {
      return root[m.replace(/^\./, "mu-jquery-widget-director")];
    }));
  }
})(["mu-jquery-widget/create", "./go"], function (create, go) {
  return create.extend(go);
});
