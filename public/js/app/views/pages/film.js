/*
  Compiled by Polvo, using CoffeeScript
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/views/pages/film', ['require', 'exports', 'module', 'styles/pages/film', 'app/views/app_view'], function(require, exports, module) {
  var AppView, Film, Style, _ref;
  AppView = require('app/views/app_view');
  Style = require('styles/pages/film');
  return exports.module = Film = (function(_super) {
    __extends(Film, _super);

    function Film() {
      _ref = Film.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Film.prototype.after_render = function(data) {
      $('#nav li').css({
        color: '#e7e7e8'
      });
      return $('#nav li.film').css({
        color: '#bcbdc0'
      });
    };

    return Film;

  })(AppView);
});
/*
//@ sourceMappingURL=film.map
*/