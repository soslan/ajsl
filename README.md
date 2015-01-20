ajsl
====

**ajsl** (Asynchronous JavaScript loader) is a JavaScipt tool for asynchronous loading of JavaScript files with dependancies.

### API
#### ajsl.addLayer(scriptPath,...)
Tells ajsl that supplied script paths should be loaded asyncronously after previously added scripts are loaded.

**Parameters:** Any number of strings representing script paths to download.

**Returns:** Does not return.

#### ajsl.load()
Starts loading scripts added with `ajsl.addLayer()`. Scripts added with one common `ajsl.addLayer()` call are loaded asyncronously.

**Parameters:** None.

**Returns:** Does not return.

### Example
Here is an example of handling dependencies with ajsl. Lets assume `scriptA.js` and `scriptB.js` are independent, `scriptC.js` depends either on `scriptA.js` or on `scriptB.js`, and `main.js` depends on all mentioned above.
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <script>
            window.addEventListener('load', function(){
                // ajsl object should be defined here.
                ajsl.addLayer("path/to/scriptA.js", "path/to/scriptB.js");
                ajsl.addLayer("path/to/scriptC.js");
                ajsl.addLayer("path/to/main.js");
                ajsl.load();
            })
        </script>    
    </body>
</html>

```
As page is ready, `scriptA.js` and `scriptB.js` will be asyncronously loaded first. After both are ready, `scriptC.js` will be loaded as it depends on at least one of `scriptA.js` and `scriptB.js`. Finally `main.js`, which depends on all other scripts, will be loaded.
