// Detect IE without User-agent hacks. | Supports minification. | MIT license | Version 1.1.6 | https://github.com/Kithraya/detect-IE

window.isIE = (function(win, doc, undefined) {
	
	var envir, is_default_IE11 = !!window.msCrypto;
	
	var mapIE = { '5': 5, '5.5': 5.5, '5.6': 6, '5.7': 7, '5.8': 8, '9': 9, '10': 11, '11': 11 }; // browser versions
	
	// Unknown values for IE < 5. Estimates: '1': 3, '3': 4, '5.01': 5.01, but anything below IE 5.5 is bs anyway.
	// msCrypto (with the prefix) is only defined in IE11 in IE11 document mode. (Yes, I checked via Browserstack)
	// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto 
	// Shoutout to https://stackoverflow.com/users/5807141/j-j for the overlooked comment on msCrypto:
	// https://stackoverflow.com/questions/21825157/internet-explorer-11-detection
	
	// Conditional compilation executes in IE only, and does not change with document mode.
	// By default, IE11 does not interpret conditional compilation, so `@_jscript_version` is `undefined`. 
	// But if IE11's documentMode has been changed from the default, "is_default_IE11" will return `false`,
	// and `@_jscript_version` will return "11". (Yep, textbook Microsoft)
 
	/// Values: IE6|7: "5.6" / "5.7", IE8: "5.8", IE9: "9", IE10: "10", IE11*: "11", IE11: `undefined`, NOT IE: `undefined`; 
	
	var jscript_version = Number( new Function("/*@cc_on return @_jscript_version; @*/")() ) || (is_default_IE11 ? 11 : NaN);
 
	if (!jscript_version) { return false }

	///  Workaround Test for Windows Service Pack Update (IE6 / 7). Document mode wasnt introduced until IE8, so this check works fine.
	if (jscript_version === 5.7 && !window.XMLHttpRequest) { jscript_version = 5.6 }
	
	envir = { jscript: jscript_version, documentMode: document.documentMode, is_default_IE11: is_default_IE11 };
	
	envir.browser = mapIE[ String(jscript_version) ] || jscript_version;
	
	envir[envir.browser] = true;

	return envir;

})(window, document);
