/*
  Compiled by Polvo, using CoffeeScript
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/views/pages/research', ['require', 'exports', 'module', 'styles/pages/research', 'app/views/app_view'], function(require, exports, module) {
  var AppView, Research, Style, _ref;
  AppView = require('app/views/app_view');
  Style = require('styles/pages/research');
  return module.exports = Research = (function(_super) {
    __extends(Research, _super);

    function Research() {
      _ref = Research.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Research.prototype.after_render = function(data) {
      var _this = this;
      $('#nav li').css({
        color: '#deedcf'
      });
      $('#nav li.research').css({
        color: '#b1d8aa'
      });
      $('#nav ul li').mouseenter(function(e) {
        return $(e.currentTarget).css({
          color: '#b1d8aa'
        });
      });
      $('#nav ul li').mouseleave(function(e) {
        $('#nav li').css({
          color: '#deedcf'
        });
        return $('#nav li.research').css({
          color: '#b1d8aa'
        });
      });
      $('.social a').css({
        background: '#deedcf'
      });
      $('.social a').mouseenter(function() {
        return $(this).css({
          background: '#b1d8aa'
        });
      });
      $('.social a').mouseleave(function() {
        return $(this).css({
          background: '#deedcf'
        });
      });
      return $('.link a').click(function(e) {
        var url;
        e.preventDefault();
        url = $(e.currentTarget).data('url');
        window.open(url);
        return false;
      });
    };

    return Research;

  })(AppView);
});
/*
//@ sourceMappingURL=research.map
*/