AppView = require 'app/views/app_view'
Style   = require 'styles/pages/film'

exports.module = class Film extends AppView

	after_render: ( data ) ->

		$('#nav li').css color: '#e7e7e8'
		$('#nav li.film').css color: '#bcbdc0'