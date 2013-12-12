/*
  Compiled by Polvo, using CoffeeScript
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/app', ['require', 'exports', 'module', 'app/config/routes', 'app/config/settings', 'theoricus/theoricus'], function(require, exports, module) {
  var App, Routes, Settings, Theoricus;
  Theoricus = require('theoricus/theoricus');
  Settings = require('app/config/settings');
  Routes = require('app/config/routes');
  module.exports = App = (function(_super) {
    __extends(App, _super);

    function App(Settings, Routes) {
      var mobile, tablet;
      App.__super__.constructor.call(this, Settings, Routes);
      this.base_path = env.BASE_PATH;
      tablet = /ipad|android|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase());
      mobile = /\bandroid\b.*\bmobile\b|\bmobile\b.*\bandroid\b|iphone|ipod|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
      if (mobile) {
        $('body').addClass('mobile');
      }
      if (tablet) {
        $('body').addClass('tablet');
      }
      this.start();
    }

    return App;

  })(Theoricus);
  return new App(Settings, Routes);
});
/*
//@ sourceMappingURL=app.map
*/