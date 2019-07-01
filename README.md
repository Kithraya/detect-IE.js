# detect-IE
Detects all* versions of Internet Explorer without resorting to User-Agent hacks.

Exposes a global object, `IE`, with the following properties: `engine`, and `documentMode`.

IE7 in IE6 compatibility mode will return `engine` as `"5.7"`, and `documentMode` as `6`.

If the browser is not IE, `IE.engine` and `IE.documentMode` default to `undefined`;

Caveats: When the current document has not yet been determined, documentMode returns a value of zero (0). This usually happens when a document is loading. When a return value of zero is received, try to determine the document compatibility mode at a later time.

This property is available in all compatibility modes.

*At the moment, `detect-ie.js` can not always distinguish between the IE6 and IE7 engine, due to the infamous Windows XP Service Pack update. There are workarounds, and I will work on implementing one.
