(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-director/go"] = factory.apply(root, modules.map(function (m) {
      return root[m];
    }));
  }
})(["mu-create/regexp"], function (regexp) {
  return regexp(/^go\/(.+)/, function (result, data, route) {
    (result.go = result.go || []).push({
      "route": route,
      "value": data.value
    });

    return false;
  });
});
