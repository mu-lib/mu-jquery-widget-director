(function (modules, factory) {
  var root = this;
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.apply(root, modules.map(require));
  } else {
    root["mu-jquery-widget-director/widget"] = factory.apply(root, modules.map(function (m) {
      return this[m] || root[m.replace(/^\./, "mu-jquery-widget-director")];
    }, {
        "Router": root.Router
      }));
  }
})(["./create", "mu-jquery-widget/widget", "Router"], function (create, widget, Router) {
  return create(widget.concat(), {
    "on/initialize": function () {
      var me = this;
      var $ = me.$;
      var routes = {};

      $.each(me.constructor.go, function (index, go) {
        routes[go.route] = $.proxy(go.value, me);
      });

      me.router = new Router(routes).init();
    }
  });
});