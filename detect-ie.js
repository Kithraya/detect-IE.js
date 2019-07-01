// Detect IE without User-agent hacks. Supports minification. MIT license. https://github.com/Kithraya/detect-IE

var IE = (function(win, undefined) { // keep the global namespace unpolluted by wrapping in an IIFE
	
	var obj = { engine: undefined, 'documentMode': document.documentMode }

	var is_IE11 = !!( !('currentScript' in document) && window.msCrypto);
	
	// msCrypto (with the prefix) is only defined in IE11 (for now).
	// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto 
	// Shoutout to https://stackoverflow.com/users/5807141/j-j for the overlooked comment on msCrypto:
	// https://stackoverflow.com/questions/21825157/internet-explorer-11-detection
	// And document.currentScript is not defined in any version of IE, but all versions of Edge support it.
	// so we combine the checks to future proof it.
	// however, if documentMode has been changed from the default, this will return false,
	// but @_jscript_version will return "11".
	
	
	var IE_number = (function() {
		// using handy conditional compilation which executes in IE only, and does not change with document mode.
		var version = new Function("/*@cc_on return @_jscript_version; @*/")();
		// "5.6/7": IE6, "5.7": IE7, "5.8": IE8, "9":IE9, "10": IE10, "11": IE11 with an older document mode.
		// undefined if not IE, or regular IE11
		// differentiate between IE6 and IE7.
		return version;
	})();
	
	// check for IE11
	// if IE11 is in an older document mode, @_jscript_version will be exposed and we can use that
	// otherwise, the initial IE11 check will return true
	
	if (is_IE11 || parseInt(IE_number,10) === 11 ){
		obj.engine = 11;
	} else {
		obj.engine = (IE_number) ? IE_number : undefined;
	}

	return obj;

})(window);
