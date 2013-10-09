/*
  Compiled by Polvo, using CoffeeScript
*/

define('app/config/routes', ['require', 'exports', 'module'], function(require, exports, module) {
  var Routes;
  return module.exports = Routes = (function() {
    function Routes() {}

    Routes.routes = {
      '/': {
        to: "pages/container",
        at: null,
        el: "body"
      },
      '/films': {
        to: "pages/film",
        at: "/",
        el: "#container"
      },
      '/research': {
        to: "pages/research",
        at: "/",
        el: "#container"
      },
      '/contact': {
        to: "pages/contact",
        at: "/",
        el: "#container"
      },
      '/404': {
        to: "pages/notfound",
        at: "/pages",
        el: "#container"
      }
    };

    Routes.root = '/films';

    Routes.notfound = '/404';

    return Routes;

  })();
});
/*
//@ sourceMappingURL=routes.map
*/