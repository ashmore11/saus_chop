###
  Compiled by Polvo, using CoffeeScript
###

define ['require', 'exports', 'module'], (require, exports, module)->
		AppView = require 'app/views/app_view'
		Style   = require 'styles/pages/container'
		
		exports.module = class Container extends AppView
		
			after_render: ->
		
				setTimeout( ->
					$('#nav ul li').stop().animate opacity: 1
				, 1000 )
		
				$('#nav ul li').click ( e ) =>
					url = $(e.currentTarget).data('url')
					@navigate url
		
				@on_resize()
		
			on_resize: ->
		
				height = $(window).height()
				width  = $(window).width()
		
				$('#container').height( height ).width( width )
		
		