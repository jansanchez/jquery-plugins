/*  Echo v0.4 - jQuery Javascript Echo
    (c) 2013 - @jansanchez
    License: http://www.opensource.org/licenses/mit-license.php
*/

(function($){

    if(!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(needle) {
            for(var i = 0; i < this.length; i++) {
                if(this[i] === needle) {
                    return i;
                }
            }
            return -1;
        };
    }

    var arrId = [],
    zIndex = 987,
    limit = 50,
    Echo = function(options){
        var opt = {
            id : null,
            msg : null,
            lifetime : 5000,
            speed : 350,
            type : 'echo',
            element : 'div',
            bottom : '50px',
            themes : {
                'echo' : {
                    'background' : '#F9EDBE',
                    'border' : '1px solid #E5AD43',
                    'color' : '#222222'
                },
                'success' : {
                    'background' : '#dff0d8',
                    'border' : '1px solid #d6e9c6',
                    'color' : '#468847'
                },
                'warn' : {
                    'background' : '#f2dede',
                    'border' : '1px solid #eed3d7',
                    'color' : '#b94a48'
                },
                'debug' : {
                    'background' : '#d9edf7',
                    'border' : '1px solid #bce8f1',
                    'color' : '#3a87ad'
                }
            },
            commonStyle : {
                'font-family' : 'tahoma, arial, sans-serif',
                'font-size' : '12px',
                'font-weight' : 400,
                'left' : 0,
                'line-height' : '15px',
                'opacity' : '0.80',
                'padding' : '8px 8px 8px 12px',
                'position' : 'fixed',
                'width' : '35%',
                'word-wrap' : 'break-word',
                'z-index' : zIndex
            },
            callback : {
                load : null,
                unload : null
            }
        };

        this.style = this.style || '';
        this.el = null;
        this.$el = null;
        this.destroyed = 0;
        this.prefix = 'e';
        this.btnClose = '.echo-btn-close';
        this.isRepeat = 0;
        this.id = null;

        this.settings = $.extend(opt, options);
        this.init();

    };

    Echo.prototype.rand = function () {
        var getNewId = function(){
            return Math.floor(Math.random()*limit);
        },
        id = getNewId();
        if (arrId.indexOf(id)<0 && id!==undefined) {
            this.id = id;
            return id;
        }else{
            limit++;
            return this.rand();
        }
    };
    Echo.prototype.construct = function () {
        this.settings.id = this.prefix + this.rand();
    };

    Echo.prototype.scout = function () {
        var _this = this,
        newMsg = _this.settings.msg,
        txtEdited = '',
        spaces = '&nbsp;&nbsp;',
        maxlevel = 3,
        level = 0;

        for (var i=0; i<level; i++){
            spaces += '&nbsp;&nbsp;&nbsp;&nbsp;';
        }

        if(newMsg.toString()=='[object Object]'){
            for(var ele in newMsg){
                if(newMsg[ele].toString().indexOf("return new e.fn.init(a, b, h);")>=0 || newMsg[ele].toString().indexOf("function()")>=0 || newMsg[ele].toString().indexOf("jquery")>=0 || newMsg[ele].toString().indexOf("constructor")>=0){
                    txtEdited = txtEdited.replace(spaces+'<strong>context</strong>:<br>','');
                    txtEdited = txtEdited.replace('<br>'+spaces+spaces+'[object HTMLDocument]','');
                    newMsg = newMsg + txtEdited;
                    return newMsg;
                }
                txtEdited += '<br>'+ spaces +'<strong>'+ ele + '</strong>:<br>'+spaces;

                if(newMsg[ele].toString().indexOf("function")>=0){
                    txtEdited += spaces+'function()';
                }else{
                    if(newMsg[ele].toString()=='[object Object]'){
                        level = level + 1;
                        if (level<=maxlevel) {
                            //txtEdited += $.fn.consola('evaluate', newMsg[ele], level, maxlevel);
                        }
                    }else{
                        txtEdited += spaces+newMsg[ele].toString();
                    }
                }
            }
        }

        newMsg = newMsg+txtEdited;

        return newMsg;
    };

    Echo.prototype.appendStyles = function () {
        var _this = this,
        head = null,
        css = _this.btnClose+' { position: relative; top: -2px; right: 0; line-height: 20px; padding: 0; cursor: pointer; background: transparent; border: 0; color: #000000; float: right; font-size: 18px; font-weight: bold; opacity: 0.3; text-shadow: 0 1px 0 #FFFFFF; }';
            css+=_this.btnClose+':hover { opacity: 0.6; }';

        head = document.getElementsByTagName('head')[0];
        
        var style = null;
        style = document.createElement('style');

        style.type = 'text/css';

        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    };

    Echo.prototype.getStyle = function () {
        var _this = this, style = '';
        for (var key in _this.settings.commonStyle) {
            if (_this.settings.commonStyle.hasOwnProperty(key)) {
                style+= key + ':' + _this.settings.commonStyle[key]+';';
            }
        }
        for (var key2 in _this.settings.themes[_this.settings.type]) {
            if (_this.settings.themes[_this.settings.type].hasOwnProperty(key2)) {
                style+= key2 + ':' + _this.settings.themes[_this.settings.type][key2]+';';
            }
        }

        style += 'bottom:'+_this.settings.bottom;

        _this.style = style;
        return _this.style;
    };

    Echo.prototype.createBox = function () {
        var _this = this;
        zIndex++;
        arrId.push(_this.id);
        _this.el = document.createElement(_this.settings.element);
        _this.el.setAttribute('id', _this.settings.id);
        _this.el.setAttribute('data-type', _this.settings.type);

        _this.el.setAttribute('style', _this.getStyle());

        _this.button = document.createElement('button');
        /*
        _this.button.setAttribute('style', 'position: relative;top: -2px;right: 0;line-height: 20px;padding: 0;cursor: pointer;background: transparent;border: 0;color: #000000;float: right;font-size: 18px;font-weight: bold;opacity: 0.3;text-shadow: 0 1px 0 #FFFFFF;');
        */
        _this.button.setAttribute('class', this.btnClose.substring(1,this.btnClose.length));
        _this.button.setAttribute('title', 'Cerrar');
        _this.button.innerHTML = 'x';


        $(_this.el).html(_this.scout());

        $(_this.el).append($(_this.button));

        $(_this.button).on("click", function(e){
            _this.destroy();
        });

        _this.$el = $(_this.el);
        $('body').append(_this.$el);

        var bottom = 0, height = 0;

        for (var i = 0; i < arrId.length; i++) {
            var $element = $('#'+this.prefix+arrId[i]);
            if(i>0){
                bottom = parseInt($element.css('bottom'));
                height = parseInt($element.outerHeight());
                $element.css('bottom', (bottom+(height-1))+'px');
            }else{
                bottom = parseInt($element.css('bottom'));
                height = parseInt($element.outerHeight());
            }
        }

        if (_this.settings.callback["load"]) {
            this.settings.callback["load"](_this);
        }

        if(_this.settings.lifetime!==0){
            setTimeout(function(){
                _this.destroy();
            }, _this.settings.lifetime);
        }
    };

    Echo.prototype.each = function () {
        var _this = this, $elem = null;
        if (arrId.length>0) {
            for (var i = 0; i < arrId.length; i++) {
                $elem = $('#'+this.prefix+arrId[i]);
                if ($elem!==null) {
                    if($elem.attr('data-type')===_this.settings.type){
                        if (_this.settings.msg==$elem.text().substring(0,$elem.text().length-1)) {
                            _this.isRepeat=1;
                            break;
                        }
                    }
                }
            }
        }
    };

    Echo.prototype.init = function () {
        this.construct();
        this.each();
        if (this.isRepeat === 0) {
            this.appendStyles();
            this.createBox();
        }
    };

    Echo.prototype.destroy = function () {
        var _this = this;

        if (_this.destroyed===0) {
            _this.$el.fadeOut(_this.settings.speed, function(){
                _this.$el.remove();
                _this.destroyed = 1;
                arrId.splice(arrId.indexOf(_this.id),1);
            });
        }
    };

    $.fn.Echo = function( params ) {
        if(typeof params == 'undefined' || params.constructor == Object){
            new Echo(params);
        }else{
            $.error( 'El parámetro proporcionado ' +  params + ' esta mal declarado o no es un objeto' );
        }
    };

})(jQuery);


function echo(message, lifetime) {
    if (!lifetime) {
        lifetime = 5000;
    }
    $.fn.Echo({msg : message, type : 'echo', lifetime : lifetime});
}

function debug(message, lifetime) {
    if (!lifetime) {
        lifetime = 99999;
    }
    $.fn.Echo({msg : message, type : 'debug', lifetime : lifetime});
}

function warn(message, lifetime, bottom) {
    bottom = bottom || '200px';
    if (!lifetime) {
        lifetime = 4000;
    }
    $.fn.Echo({msg : message, type : 'warn', lifetime : lifetime, bottom : bottom});
}

function success(message, lifetime) {
    if (!lifetime) {
        lifetime = 5000;
    }
    $.fn.Echo({msg : message, type : 'success', lifetime : lifetime});
}

