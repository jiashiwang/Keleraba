Follow me on Twitter <a target="_blank" href="https://twitter.com/#!/svlada">click here </a>
Jump to complete source code <a href="#source">source code</a>.
Visit Keleraba (Backbone, Require, Handlebars) boilerplate project on <a target="_blank" href="https://github.com/svlada/Keleraba">github</a>. <span style="font-size:10px;"><em>Caution Keleraba is in early phase of development and serves as a learning resource.</em></span>

This is part2 tutorial in RequireJs series(<a target="_blank" href="http://www.svlada.com/blog/2012/06/29/require-js-dependency-management-part1/">part1</a>, <a target="_blank"  href="http://www.svlada.com/blog/2012/07/02/require-js-optimization-part2/">part2</a>). Reading material about r.js and RequireJS is in references section of article.

<h3>Table of contents:</h2>
<a href="#t0">Introduction</a>
<a href="#t1">Require.js optimizer</a>
<a href="#t2">Require.js optimizer dump dependencies to single file</a>

<h1><a name="t0" id="t0">Introduction</a></h1>
This is short article in which I will explain you how to build and optimize your javascript code with ReqireJS optimization tool r.js.

James Burke <a href="http://requirejs.org/docs/optimization.html">recommends</a> using node.js for optimizing and building your code. Make sure you have node.js installed on your machine. You can download node.js from <a href="http://nodejs.org/#download">here</a>.

<h1><a name="t1" id="t0">Require.js optimizer</a></h1>
Create your build script file on following location <strong>[webapp/build/build.js]</strong>

[cc lang="javascript"]
|-[wepapp]
|--- [build]
|----- r.js
|----- build.js
|----- build.single.js
|--- [js]
|------ [app]
|------ [lib]
|--------- jquery.js
|----- app.js
|----- app-built.js*
|-index.html
|-readme.md
[/cc]

Build your application with node.js and r.js executing following command

[cc lang="javascript"]
node r.js -o build.js
[/cc]

For demonstration purposes I have made 3 examples of building application with RequireJS.

<h4>Example 1: Optimize modules</h4>
Main module app.js has many dependencies and we want to bundle all that dependencies into single file. Mark modules for optimization in modules array of configuration object inside build.js. First example will contain only one module for optimization <strong>[webapp/js/app.js]</strong>.

Paste following code to your build.js file.

[cc lang="javascript"]
{
    baseUrl: "js/lib",
    appDir: "..",
    dir: "dist",

    modules: [
        { name: "app" }
    ],

    paths: {
        app: '../app',
        jquery: 'jquery'
    }
}
[/cc]

<strong>appDir</strong> - Telling us where webapp root directory is located relative to build.js script.
<strong>dir</strong> - Output directory relative to build.js

Console output of build.js

[cc lang="javascript"]
Uglifying file: C:/vlada/practice/require/webapp/build/dist/build/r.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app/category/category.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app/category/item.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app/category/specialItem.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/lib/jquery.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/lib/require.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/lib/text.js

js/app.js
----------------
js/lib/jquery.js
js/app/category/category.js
js/app/category/item.js
js/app/category/specialItem.js
js/app.js
[/cc]

All <strong>[webapp/js/app.js]</strong> dependencies are now minified with Uglify.js and concatenated into single file. But what happened with individual modules? Module <strong>[webapp/js/app/category/specialItem.js]</strong> has a dependency <strong>[webapp/js/app/category/specialItem.js]</strong>. Open your optimized <strong>[webapp/js/app/category/specialItem.js]</strong> and pass it to beatifier. As you can see from output <strong>[js/app/category/item.js]</strong> is not bundled with our <strong>[js/app/category/specialItem.js]</strong>.

Optimized module:

[cc lang="javascript"]
define(["./item"], function (Item) {
    var SpecialItem = function (itemName) {
            this.color = "Default color", this.weigth = "Default weigth", Item.call(this, itemName)
        };
    return SpecialItem.prototype = new Item, SpecialItem.prototype.constructor = SpecialItem, SpecialItem
})
[/cc]

<h4>Example 2: Optimize additional modules</h4>
In this example we will add <strong>[webapp/js/app/category/specialItem.js]</strong> to modules array of build.js configuration object.

Paste following code to your build.js file.

[cc lang="javascript"]
{
    baseUrl: "js/lib",
    appDir: "..",
    dir: "dist",

    modules: [
        { name: "app" },
        { name: "app/category/specialItem" }
    ],

    paths: {
        app: '../app',
        jquery: 'jquery'
    }
}
[/cc]

Console output of build.js

[cc lang="javascript"]
Uglifying file: C:/vlada/practice/require/webapp/build/dist/build/r.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app/category/category.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app/category/item.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app/category/specialItem.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/app.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/lib/jquery.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/lib/require.js
Uglifying file: C:/vlada/practice/require/webapp/build/dist/js/lib/text.js

js/app.js
----------------
js/lib/jquery.js
js/app/category/category.js
js/app/category/item.js
js/app/category/specialItem.js
js/app.js

js/app/category/specialItem.js
----------------
js/app/category/item.js
js/app/category/specialItem.js
[/cc]

Now <strong>[js/app/category/item.js]</strong> is bundled with <strong>[js/app/category/specialItem.js]</strong> module. 

Optimized module: 

[cc lang="javascript"]
define("app/category/item", [], function () {
    var Item = function (itemName) {
            this.name = itemName
        };
    return Item.prototype.getItemName = function () {
        return this.name
    }, Item
}), define("app/category/specialItem", ["./item"], function (Item) {
    var SpecialItem = function (itemName) {
            this.color = "Default color", this.weigth = "Default weigth", Item.call(this, itemName)
        };
    return SpecialItem.prototype = new Item, SpecialItem.prototype.constructor = SpecialItem, SpecialItem
})
[/cc]

<h1><a name="t2" id="t0">Require.js optimizer compile dependencies to single file</a></h1>
Paste following code to your build.single.js file.
[cc lang="javascript"]
{
    baseUrl: "../js/lib",
    name: "../app",
    out: "app-built.js",

    paths: {
        app: '../app',
        jquery: 'jquery',
    }
}
[/cc]
<strong>name</strong> - Location of module you want to export as a single file with all dependencies.
<strong>out</strong> - File "app-built.js" is created

Console output of build.single.js:

[cc lang="javascript"]
Tracing dependencies for: ../app
Uglifying file: C:/vlada/practice/require/webapp/build/app-built.js

C:/vlada/practice/require/webapp/build/app-built.js
----------------
C:/vlada/practice/require/webapp/js/lib/jquery.js
C:/vlada/practice/require/webapp/js/app/category/category.js
C:/vlada/practice/require/webapp/js/app/category/item.js
C:/vlada/practice/require/webapp/js/app/category/specialItem.js
C:/vlada/practice/require/webapp/js/lib/../app.js
[/cc]

All of our modules are now glued together into single <strong>[webapp/build/app-built.js]</strong> file.

<h1><a name="source" id="source">Source code listing</a></h1>

build.js
[cc lang="javascript"]
{
    baseUrl: "js/lib",
    appDir: "..",
    dir: "dist",

    modules: [
        { name: "app" },
        { name: "app/category/specialItem" }
    ],

    paths: {
        app: '../app',
        jquery: 'jquery'
    }
}
[/cc]

build.single.js
[cc lang="javascript"]
{
    baseUrl: "../js/lib",
    name: "../app",
    out: "app-built.js",

    paths: {
        app: '../app',
        jquery: 'jquery'
    }
}
[/cc]

References
<a target="_blank" href="http://requirejs.org/docs/optimization.html">http://requirejs.org/docs/optimization.html</a>
<a target="_blank" href="https://github.com/jrburke/r.js/blob/master/build/example.build.js">Example build.js</a>