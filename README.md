# detect-IE
Detects all* true versions of Internet Explorer, irrespective of document mode, without resorting to User-Agent hacks. Supports minification.

Creates a global variable, `isIE`. If the browser is IE, `isIE` is an object with the following properties: `version`, `engine`, and `documentMode`.

For example, IE8 in IE6 compatibility mode will return `version` as `8`, `engine` as `5.8`, and `documentMode` as `6`.

If the browser is not IE, `isIE` will be `false`.

Caveats:
1. When the current document has not yet been determined (in IE), documentMode returns a value of zero (0). This usually happens when a document is loading. When a return value of zero is received, try to determine the document compatibility mode after the DOM has loaded.


Usage:

```javascript
if (isIE) {    
  var browser = isIE.browser, 
      engine = isIE.engine, 
      documentMode = isIE.documentMode;
}```
