/*
  Compiled by Polvo, using CoffeeScript
*/

var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define('app/views/pages/contact', ['require', 'exports', 'module', 'styles/pages/contact', 'app/views/app_view'], function(require, exports, module) {
  var AppView, Contact, Style, _ref;
  AppView = require('app/views/app_view');
  Style = require('styles/pages/contact');
  return module.exports = Contact = (function(_super) {
    __extends(Contact, _super);

    function Contact() {
      _ref = Contact.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Contact.prototype.after_render = function(data) {
      $('#nav li').css({
        color: '#d9eeee'
      });
      return $('#nav li.contact').css({
        color: '#b6e1e0'
      });
    };

    return Contact;

  })(AppView);
});
/*
//@ sourceMappingURL=contact.map
*/