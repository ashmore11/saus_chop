AppView = require 'app/views/app_view'
Style   = require 'styles/pages/contact'

module.exports = class Contact extends AppView

	after_render: ( data ) ->

		$('#nav li').css color: '#d9eeee'
		$('#nav li.contact').css color: '#b6e1e0'