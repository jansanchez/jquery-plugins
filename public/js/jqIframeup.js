/*  iframeUp v0.2 - jQuery iframe Submit plugin
    (c) 2012 Jan Sanchez - @jansanchez - Perucomsultores - yosÓn devs
License: http://www.opensource.org/licenses/mit-license.php
*/
/*
requires:
jqConsola.js
*/
;(function( $ ){

    var methods = {
        init : function( opts ) {
            var debug = 'none';
            if (opts.debug===true){ debug = 'block'; }
            opts.id = 'frm_' + Math.floor(Math.random() * 99999);
            var d = $('<div/>').html('<iframe style="display:'+debug+'" src="about:blank" id="'+opts.id+'" name="'+opts.id+'" onload="$.fn.iframeUp(\'load\',\''+opts.id+'\')" onunload="$.fn.iframeUp(\'unload\',\''+opts.id+'\')"></iframe>');

            $('body').append(d);

            var ifrm = document.getElementById(opts.id);
            if (opts && typeof(opts.onSuccess) === 'function') {
                ifrm.onSuccess = opts.onSuccess;
            }
            if (opts && typeof(opts.onComplete) === 'function') {
                ifrm.onComplete = opts.onComplete;
            }
            return opts.id;
        },
        form : function(frm, name) {
            $('#'+frm).attr('target', name);
        },
        submit : function(options) {
            var defaults = {
                frm: 'frm_add',
                debug: true,
                loader: true,
                submit: true,
                loading: function (opts){
                    //$.fn.consola({msg:'Cargando... ', mode:'load'});
                },
                afterSend: function (opts){
                    /*resetear input file
                      document.getElementById(opts.frm).reset();*/
                },
                onSuccess: function(html, ifrm, id){
                    setTimeout(function(){
                        $('#' + id).parent().remove();
                        $.fn.iframeUp('unload', id, html);
                        //$.fn.consola('destroy',{mode:'load'});
                    }, 50);
                }
            },
            opts = $.extend({}, defaults, options);

            opts.isIE = !$.support.opacity && !$.support.style;/*if ie*/
            opts.isIE6 = opts.isIE && !window.XMLHttpRequest;/*if ie6*/

            $.fn.iframeUp('form', opts.frm, $.fn.iframeUp('init', opts));


            if (opts && typeof(opts.beforeSend) === 'function') {
                opts.beforeSend(opts);
            }

            if (opts.submit===true) {
                document.getElementById(opts.frm).submit();
            }

            if (opts && typeof(opts.afterSend) === 'function') {
                opts.afterSend(opts);
            }
            if (opts.loader===true) {
                if (opts && typeof(opts.loading) === 'function') {
                    opts.loading(opts);
                }
            }

        },
        load : function(id) {

            var ifrm = document.getElementById(id) || $('#'+id);
            var doc = null;

            if (ifrm.contentDocument) {
                doc = ifrm.contentDocument;
            } else if (ifrm.contentWindow) {
                doc = ifrm.contentWindow.document;
            } else {
                doc = window.frames[id].document;
            }
            if (doc.location.href === "about:blank") {
                return;
            }
            if (typeof(ifrm.onSuccess) === 'function') {
                ifrm.onSuccess(doc.body.innerHTML, ifrm, id);
            }
            if (typeof(ifrm.onComplete) === 'function'){
                try{
                    ifrm.onComplete(doc.body.innerHTML, ifrm);
                }catch(err){

                }
            }
        },
        unload : function(id){

        }
    };

    $.fn.iframeUp = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.iframeUp' );
        }
    };

})(jQuery);
