AppView = require 'app/views/app_view'
Style   = require 'styles/pages/film'

require 'froogaloop'

exports.module = class Film extends AppView

	player: null

	after_render: ( data ) ->

		$('#nav li').css color: '#e7e7e8'
		$('#nav li.film').css color: '#bcbdc0'

		$('#nav ul li').mouseenter ( e ) =>
			$(e.currentTarget).css color: '#bcbdc0'

		$('#nav ul li').mouseleave ( e ) =>
			$('#nav li').css color: '#e7e7e8'
			$('#nav li.film').css color: '#bcbdc0'

		$('.social a').css background: '#e7e7e8'

		$('.social a').mouseenter ->
			$(@).css background: '#bcbdc0'

		$('.social a').mouseleave ->
			$(@).css background: '#e7e7e8'


		@video_player()

		$('li.box.first').click =>
			@play_video()

		$('.player').click ->
			$(@).fadeOut()


	video_player: =>

		@iframe = $('#player1')[0]
		@player = $f(@iframe)

		@player.addEvent 'ready', =>
		
			@player.addEvent 'play',   on_play
			@player.addEvent 'pause',  on_pause
			@player.addEvent 'finish', on_finish


		on_play = () =>
			$('iframe').fadeIn()

		on_pause = () =>
			@player.api('pause')
			$('.player').fadeOut()

		on_finish = () =>
			$('.player').fadeOut()


	play_video: =>

		$('.player').fadeIn =>
			if $('body').hasClass('mobile') or $('body').hasClass('tablet')
				$('#player1').fadeIn()
			else
				@player.api('play')