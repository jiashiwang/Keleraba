Follow me on Twitter <a target="_blank" href="https://twitter.com/#!/svlada">click here </a>
Jump to complete source code <a href="#source">source code</a>.
Visit Keleraba (Backbone, Require, Handlebars) boilerplate project on <a target="_blank" href="https://github.com/svlada/Keleraba">github</a>. <span style="font-size:10px;"><em>Caution Keleraba is in early phase of development and serves as a learning resource.</em></span>

This is part2 tutorial in RequireJs series. Reading material about r.js and RequireJS is in references section of article.

<h3>Table of contents:</h2>
<a href="#t0">Introduction</a>
<a href="#t1">Require.js optimizer</a>
<a href="#t2">Require.js optimizer dump dependencies to single file</a>

<h1><a name="t0" id="t0">Introduction</a></h2>

<h1><a name="t1" id="t0">Require.js optimizer</a></h2>

Create your [webapp/build/build.js] file.

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
		jquery: 'jquery',
		underscore: 'underscore',
		handlebars: 'handlebars',
		backbone: 'backbone'
	},

	shim: {

		underscore: {
			exports: '_'
		}, 

		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		handlebars: {
			exports: 'Handlebars'
		}
	}
}
[/cc]

Build your app with node and r.js using following command

node r.js -o build.js

<h4>Module Optimization</h4>

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
js/lib/underscore.js
js/lib/backbone.js
js/lib/handlebars.js
js/app/category/category.js
js/app/category/item.js
js/app/category/specialItem.js
js/app.js
[/cc]

[cc lang="javascript"]
define(["./item"], function (Item) {
    var SpecialItem = function (itemName) {
            this.color = "Default color", this.weigth = "Default weigth", Item.call(this, itemName)
        };
    return SpecialItem.prototype = new Item, SpecialItem.prototype.constructor = SpecialItem, SpecialItem
})
[/cc]


<h4>Module Concatenation</h4>

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


<h1><a name="t2" id="t0">Require.js optimizer dump dependencies to single file</a></h2>

<h1><a name="source" id="source">Source code listing</a></h1>


References
<a href="http://requirejs.org/docs/optimization.html">http://requirejs.org/docs/optimization.html</a>