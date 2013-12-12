###
  Compiled by Polvo, using CoffeeScript
###

define ['require', 'exports', 'module'], (require, exports, module)->
  Theoricus = require 'theoricus/theoricus'
  
  Settings = require 'app/config/settings'
  Routes = require 'app/config/routes'
  
  module.exports = class App extends Theoricus
  
    constructor:( Settings, Routes )->
      # don't forget to extend Theoricus and pass Settings and Routes !
      super Settings, Routes
  
      @base_path = env.BASE_PATH
  
      tablet = ( /ipad|android|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test( navigator.userAgent.toLowerCase() ) )
      mobile = ( /\bandroid\b.*\bmobile\b|\bmobile\b.*\bandroid\b|iphone|ipod|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test( navigator.userAgent.toLowerCase() ) )
  
      if mobile then $('body').addClass 'mobile'
      if tablet then $('body').addClass 'tablet'
  
      @start()
  
  # initialize your app
  new App Settings, Routes