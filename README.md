ajsl
====

**ajsl** (Asynchronous JavaScript loader) is a JavaScipt tool for asynchronous loading of JavaScript files with dependancies. 
Here is a quick example:
```js
// ajsl object should be defined.

// Telling ajsl to add scriptA.js and sctiptB.js as basic layer.
// scriptA.js and scriptB.js are independent.
ajsl.addLayer("path/to/scriptA.js", "path/to/scriptB.js");

// Adding scriptC.js as second layer. scriptC.js debends on scriptA.js or scriptB.js
// scriptC.ja will be loaded only after scriptA.js and scriptB.js are ready.
ajsl.addLayer("path/to/scriptC.js");

// Adding main.js as third layer.
ajsl.addLayer("path/to/main.js");

ajsl.load();
```

