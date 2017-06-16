(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./create", "mu-jquery-widget/widget", "Router"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./create"), require("mu-jquery-widget/widget"), require("Router"));
  } else {
    root["mu-jquery-widget-director/widget"] = factory(root["mu-jquery-widget-director//create"], root["mu-jquery-widget/widget"], root.Router);
  }
})(this, function (create, widget, Router) {
  return create(widget.concat(), {
    "on/initialize": function () {
      var me = this;
      var $ = me.$;
      var routes = {};

      $.each(me.constructor.go, function (index, go) {
        routes[go.route] = $.proxy(go.value, me);
      });

      var router = new Router(routes)
        .configure(me.$element.data("mu-jquery-widget-director"))
        .init();

      ["configure", "param", "on", "path", "dispatch", "mount", "getRoute", "setRoute",].forEach(function (method) {
        me[me[method] ? method + "$director" : method] = $.proxy(router[method], router);
      });
    }
  });
});