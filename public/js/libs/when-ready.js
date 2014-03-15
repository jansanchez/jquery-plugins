var whenReady = function(path){
	$(document).ready(function(){
		var jasmineJquery = document.createElement('script');
		jasmineJquery.type = 'text/javascript';
		jasmineJquery.async = true;
		jasmineJquery.src = (path);
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(jasmineJquery, s);
	});
}