AppView = require 'app/views/app_view'
Style   = require 'styles/pages/research'

module.exports = class Research extends AppView

	after_render: ( data ) ->

		$('#nav li').css color: '#deedcf'
		$('#nav li.research').css color: '#b1d8aa'

		$('#nav ul li').mouseenter ( e ) =>
			$(e.currentTarget).css color: '#b1d8aa'

		$('#nav ul li').mouseleave ( e ) =>
			$('#nav li').css color: '#deedcf'
			$('#nav li.research').css color: '#b1d8aa'

		$('.social a').css background: '#deedcf'

		$('.social a').mouseenter ->
			$(@).css background: '#b1d8aa'

		$('.social a').mouseleave ->
			$(@).css background: '#deedcf'

		$('.link a').click (e) ->
			e.preventDefault()

			url = $(e.currentTarget).data('url')
			window.open url

			return off


	on_resize: =>

		if $('body').hasClass 'desktop'
			
			left = -( $('.wrapper').width() / 2 )  + ( $(window).width() / 2 )
			top  = -( $('.wrapper').height() / 2 ) + ( $(window).height() / 2 )
			
			$('.wrapper').css left: left, top: top