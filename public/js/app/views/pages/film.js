/*
  Compiled by Polvo, using CoffeeScript
*/

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/views/pages/film', ['require', 'exports', 'module', 'styles/pages/film', 'app/views/app_view', 'froogaloop'], function(require, exports, module) {
  var AppView, Film, Style, _ref;
  AppView = require('app/views/app_view');
  Style = require('styles/pages/film');
  require('froogaloop');
  return exports.module = Film = (function(_super) {
    __extends(Film, _super);

    function Film() {
      this.play_video = __bind(this.play_video, this);
      this.video_player = __bind(this.video_player, this);
      _ref = Film.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Film.prototype.player = null;

    Film.prototype.after_render = function(data) {
      var _this = this;
      $('#nav li').css({
        color: '#e7e7e8'
      });
      $('#nav li.film').css({
        color: '#bcbdc0'
      });
      $('#nav ul li').mouseenter(function(e) {
        return $(e.currentTarget).css({
          color: '#bcbdc0'
        });
      });
      $('#nav ul li').mouseleave(function(e) {
        $('#nav li').css({
          color: '#e7e7e8'
        });
        return $('#nav li.film').css({
          color: '#bcbdc0'
        });
      });
      $('.social a').css({
        background: '#e7e7e8'
      });
      $('.social a').mouseenter(function() {
        return $(this).css({
          background: '#bcbdc0'
        });
      });
      $('.social a').mouseleave(function() {
        return $(this).css({
          background: '#e7e7e8'
        });
      });
      this.video_player();
      $('li.box.first').click(function() {
        return _this.play_video();
      });
      return $('.player').click(function() {
        return $(this).fadeOut();
      });
    };

    Film.prototype.video_player = function() {
      var on_finish, on_pause, on_play,
        _this = this;
      this.iframe = $('#player1')[0];
      this.player = $f(this.iframe);
      this.player.addEvent('ready', function() {
        _this.player.addEvent('play', on_play);
        _this.player.addEvent('pause', on_pause);
        return _this.player.addEvent('finish', on_finish);
      });
      on_play = function() {
        return $('iframe').fadeIn();
      };
      on_pause = function() {
        _this.player.api('pause');
        return $('.player').fadeOut();
      };
      return on_finish = function() {
        return $('.player').fadeOut();
      };
    };

    Film.prototype.play_video = function() {
      var _this = this;
      return $('.player').fadeIn(function() {
        if ($('body').hasClass('mobile') || $('body').hasClass('tablet')) {
          return $('#player1').fadeIn();
        } else {
          return _this.player.api('play');
        }
      });
    };

    return Film;

  })(AppView);
});
/*
//@ sourceMappingURL=film.map
*/