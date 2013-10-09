###
  Compiled by Polvo, using CoffeeScript
###

define ['require', 'exports', 'module'], (require, exports, module)->
		AppView = require 'app/views/app_view'
		Style   = require 'styles/pages/research'
		
		module.exports = class Research extends AppView
		
			after_render: ( data ) ->
		
				$('#nav li').css color: '#deedcf'
				$('#nav li.research').css color: '#b1d8aa'