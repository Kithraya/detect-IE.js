# detect-IE
Detects all* versions of Internet Explorer without resorting to User-Agent hacks.

Exposes a global object, `IE`, with the following properties: `engine`, and `documentMode`.

IE7 in IE6 compatibility mode will return `engine` as `"5.7"`, and `documentMode` as `6`.

If the browser is not IE, `IE.engine` and `IE.documentMode` default to `undefined`.

Caveats: When the current document has not yet been determined (in IE), documentMode returns a value of zero (0). This usually happens when a document is loading. When a return value of zero is received, try to determine the document compatibility mode after the DOM has loaded.

This property is available in all compatibility modes.

*At the moment, `detect-ie.js` will not always distinguish between the IE6 and IE7 engine, due to the infamous Windows XP Service Pack Update. There are workarounds, to be added.
