# detect-IE
Detects all versions of Internet Explorer without resorting to User-Agent hacks
Exposes a global object, `IE`, with the following properties: `engine`, and `documentMode`.

IE7 in IE6 compatibility mode will return `engine` as `"5.7"`, and `documentMode` as `6`.

Caveats: When the current document has not yet been determined, documentMode returns a value of zero (0). This usually happens when a document is loading. When a return value of zero is received, try to determine the document compatibility mode at a later time.

This property is available in all compatibility modes.

At the moment, this can not always distinguish between IE6 and IE7 due to the Service Pack update. I will work on it.
