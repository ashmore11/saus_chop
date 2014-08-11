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


		@video_player_1()
		@video_player_2()

		$('li.box.first').click =>
			@play_video_1()

		$('li.box.second').click =>
			@play_video_2()

		$('.player_1').click =>
			$('.player_1').fadeOut()
			@player_1.api('pause')

		$('.player_2').click =>
			$('.player_2').fadeOut()
			@player_2.api('pause')


	video_player_1: =>

		@iframe_1 = $('#player1')[0]
		@player_1 = $f(@iframe_1)

		@player_1.addEvent 'ready', =>
		
			@player_1.addEvent 'play',   on_play
			@player_1.addEvent 'pause',  on_pause
			@player_1.addEvent 'finish', on_finish


		on_play = () =>
			$('#player1').fadeIn()

		on_pause = () =>
			@player_1.api('pause')
			$('.player_1').fadeOut()

		on_finish = () =>
			$('.player_1').fadeOut()


	play_video_1: =>

		$('.player_1').fadeIn =>
			if $('body').hasClass('mobile') or $('body').hasClass('tablet')
				$('#player1').fadeIn()
			else
				@player_1.api('play')


	video_player_2: =>

		@iframe_2 = $('#player2')[0]
		@player_2 = $f(@iframe_2)

		@player_2.addEvent 'ready', =>
		
			@player_2.addEvent 'play',   on_play
			@player_2.addEvent 'pause',  on_pause
			@player_2.addEvent 'finish', on_finish


		on_play = () =>
			$('#player2').fadeIn()

		on_pause = () =>
			@player_2.api('pause')
			$('.player_2').fadeOut()

		on_finish = () =>
			$('.player_2').fadeOut()


	play_video_2: =>

		$('.player_2').fadeIn =>
			if $('body').hasClass('mobile') or $('body').hasClass('tablet')
				$('#player2').fadeIn()
			else
				@player_2.api('play')


	on_resize: =>

		if $('body').hasClass 'desktop'

			left = -( $('.wrapper').width() / 2 )  + ( $(window).width() / 2 )
			top  = -( $('.wrapper').height() / 2 ) + ( $(window).height() / 2 )

			$('.wrapper').css left: left

			if $(window).height() < 700
				$('.wrapper').css top: 100
				# $('#container').height 1200
			else
				$('.wrapper').css top: top




















