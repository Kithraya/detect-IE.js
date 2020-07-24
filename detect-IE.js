// Detect IE without User-agent hacks. Supports minification. MIT license. https://github.com/Kithraya/detect-IE
// Version 1.1.3

window.isIE = (function(win, doc, undefined) { 

	// keep the global namespace unpolluted by wrapping in an IIFE
	
	var jscript = { engine: null, 'documentMode': document.documentMode, version: null };

	var is_default_IE11 = !!( !document['currentScript'] && window.msCrypto );
	
	var mapIE = { '5': 5, '5.5': 5.5, '5.6': 6, '5.7': 7, '5.8': 8, '9': 9, '10': 11, '11': 11 };
	// Unknown values for IE < 5. Estimates: '1': 3, '3': 4, '5.01': 5.01
	
	// msCrypto (with the prefix) is only defined in IE11 in IE11 document mode (for now). (Yes, I checked via Browserstack)
	// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto 
	// Shoutout to https://stackoverflow.com/users/5807141/j-j for the overlooked comment on msCrypto:
	// https://stackoverflow.com/questions/21825157/internet-explorer-11-detection
	// And document.currentScript is not defined in any version of IE, but all versions of Edge support it.
	// so we combine the checks to future proof it.
	// By default, IE11 does not interpret conditional compilation, so `@_jscript_version` is `undefined`. 
	// But if IE11's documentMode has been changed from the default, "is_default_IE11" will return `false`,
	// and `@_jscript_version` will return "11". (Yep, textbook Microsoft)

	// Conditional compilation executes in IE only, and does not change with document mode.
	/// Values: IE6|7: "5.6" / "5.7", IE8: "5.8", IE9: "9", IE10: "10", IE11*: "11", IE11: `undefined`, NOT IE: `undefined`; 
	
	var _jscript_version = Number( new Function("/*@cc_on return @_jscript_version; @*/")() ) || undefined; 

	///  Workaround Test for Windows Service Pack Update (IE6 / 7)
	if (_jscript_version === 5.7 && !window.XMLHttpRequest) { _jscript_version = 5.6 }

	// if IE11 is in an older document mode, @_jscript_version will be exposed and we can use that
	// otherwise, the initial IE11 check will return true. If neither are true, it's IE < 11 or not IE.
	
	if ( is_default_IE11 || _jscript_version === 11 ){
		
		jscript.engine = jscript.version = 11;
		
	} else { // browser is IE < 11 or not IE
	
		if (!_jscript_version) { return false } 	
		
		jscript.engine = _jscript_version; 
		jscript.version = mapIE[ String(_jscript_version) ] || _jscript_version;
		
	}

	return jscript;

})(window, document);

