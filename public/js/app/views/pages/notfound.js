/*
  Compiled by Polvo, using CoffeeScript
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/views/pages/notfound', ['require', 'exports', 'module', 'styles/pages/notfound', 'app/views/app_view'], function(require, exports, module) {
  var AppView, NotFound, Style, _ref;
  AppView = require('app/views/app_view');
  Style = require('styles/pages/notfound');
  return exports.module = NotFound = (function(_super) {
    __extends(NotFound, _super);

    function NotFound() {
      _ref = NotFound.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return NotFound;

  })(AppView);
});
/*
//@ sourceMappingURL=notfound.map
*/