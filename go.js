(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["mu-create/regexp"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("mu-create/regexp"));
  } else {
    root["mu-jquery-widget-director/go"] = factory(root["mu-create/regexp"]);
  }
})(this, function (regexp) {
  return regexp(/^go\/(.+)/, function (result, data, route) {
    (result.go = result.go || []).push({
      "route": route,
      "value": data.value
    });

    return false;
  });
});
