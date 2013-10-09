###
  Compiled by Polvo, using CoffeeScript
###

define ['require', 'exports', 'module'], (require, exports, module)->
  AppView = require 'app/views/app_view'
  Style = require 'styles/pages/notfound'
  
  exports.module = class NotFound extends AppView