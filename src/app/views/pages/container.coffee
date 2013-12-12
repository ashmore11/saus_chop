AppView = require 'app/views/app_view'
Style   = require 'styles/pages/container'

require 'fittext'

exports.module = class Container extends AppView

	after_render: ->

		setTimeout( ->
			$('#nav ul li').stop().animate opacity: 1
		, 250 )

		$('#nav ul li').hover ( e ) =>
			$(e.currentTarget).toggleClass 'active'

		$('#nav ul li').on 'touchstart, click', ( e ) =>
			url = $(e.currentTarget).data('url')
			@navigate url

		$('.logo').on 'touchstart, click', =>
			url = env.BASE_PATH + '/'
			@navigate url

		$('h1.title').fitText()

		@on_resize()
		@social()


	social: =>

		$('.social a').on 'touchstart, click', (e) ->
			e.preventDefault()

			url = $(e.currentTarget).data('url')
			window.open url

			return off


	on_resize: ->

		height = $(window).height()
		width  = $(window).width()

		$('#container').height( height ).width( width )

