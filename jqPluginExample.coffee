###*  
	Echo v0.1.0 - jQuery Javascript Echo
	(c) 2014 - @jansanchez
	License: http://www.opensource.org/licenses/mit-license.php
###

(($) ->
	Echo = (options) ->
		console.log options
		return

	Echo::rand = (p1) ->
		console.log p1
		return

	$.fn.Echo = (params) ->
		if typeof params is "undefined" or params.constructor is Object
			new Echo(params)
		else
			$.error "El parámetro proporcionado " + params + " esta mal declarado o no es un objeto"
		return
	return
) jQuery