# detect-IE
Detects all* versions of Internet Explorer without resorting to User-Agent hacks, using conditional compilation. Supports minification.

Creates a global variable, `isIE` If the browser is IE, `isIE` is an object with the following properties: `version`, `engine`, and `documentMode`.

IE8 in IE6 compatibility mode will return `version` as `8`, `engine` as `5.8`, and `documentMode` as `6`.

If the browser is not IE, `isIE` will be `false`.

Caveats:
1. When the current document has not yet been determined (in IE), documentMode returns a value of zero (0). This usually happens when a document is loading. When a return value of zero is received, try to determine the document compatibility mode after the DOM has loaded.

2. If you have a polyfill that defines 'currentScript', place this code before it, else there will be a false negative for IE 11. Or remove the check for 'currentScript', but that may not be futureproof.


