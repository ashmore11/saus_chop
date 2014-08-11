AppView = require 'app/views/app_view'
Style   = require 'styles/pages/contact'

module.exports = class Contact extends AppView

	after_render: ( data ) ->

		$('#nav li').css color: '#d9eeee'
		$('#nav li.contact').css color: '#b6e1e0'

		$('#nav ul li').mouseenter ( e ) =>
			$(e.currentTarget).css color: '#b6e1e0'

		$('#nav ul li').mouseleave ( e ) =>
			$('#nav li').css color: '#d9eeee'
			$('#nav li.contact').css color: '#b6e1e0'

		$('.social a').css background: '#d9eeee'

		$('.social a').mouseenter ->
			$(@).css background: '#b6e1e0'

		$('.social a').mouseleave ->
			$(@).css background: '#d9eeee'

	on_resize: =>

		if $('body').hasClass 'desktop'

			left = -( $('.wrapper').width() / 2 )  + ( $(window).width() / 2 )
			top  = -( $('.wrapper').height() / 2 ) + ( $(window).height() / 2 )
			
			$('.wrapper').css left: left, top: top