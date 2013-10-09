###
  Compiled by Polvo, using CoffeeScript
###

define ['require', 'exports', 'module'], (require, exports, module)->
  AppController = require 'app/controllers/app_controller'
  Main = require 'app/models/page'
  
  exports.module = class Pages extends AppController