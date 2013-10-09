/*
  Compiled by Polvo, using CoffeeScript
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/views/pages/container', ['require', 'exports', 'module', 'styles/pages/container', 'app/views/app_view'], function(require, exports, module) {
  var AppView, Container, Style, _ref;
  AppView = require('app/views/app_view');
  Style = require('styles/pages/container');
  return exports.module = Container = (function(_super) {
    __extends(Container, _super);

    function Container() {
      _ref = Container.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Container.prototype.after_render = function() {
      var _this = this;
      setTimeout(function() {
        return $('#nav ul li').stop().animate({
          opacity: 1
        });
      }, 1000);
      $('#nav ul li').click(function(e) {
        var url;
        url = $(e.currentTarget).data('url');
        return _this.navigate(url);
      });
      return this.on_resize();
    };

    Container.prototype.on_resize = function() {
      var height, width;
      height = $(window).height();
      width = $(window).width();
      return $('#container').height(height).width(width);
    };

    return Container;

  })(AppView);
});
/*
//@ sourceMappingURL=container.map
*/