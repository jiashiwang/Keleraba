Follow me on Twitter <a target="_blank" href="https://twitter.com/#!/svlada">click here </a>
Jump to complete source code <a href="#source">source code</a>.
Visit Keleraba (Backbone, Require, Handlebars) boilerplate project on <a target="_blank" href="https://github.com/svlada/Keleraba">github</a>. <span style="font-size:10px;"><em>Caution Keleraba is in early phase of development and serves as a learning resource.</em></span>

This is introductory RequireJS tutorial. Reading material about AMD and RequireJS is in references section of article.

<h3>Table of contents:</h2>
<a href="#t0">Introduction</a>
<a href="#t1">Basic structure</a>
<a href="#t2">Prototypal inheritance and Require.js</a>

<h1><a name="t0" id="t0">Introduction</a></h2>

Before or after reading this article I strongly recommend to read documentation on <a target="_blank" href="http://requirejs.org/docs/start.html">RequireJS website</a>. James Burke did great job here.
RequireJS is a Javascript file and module loader which allows for asynchronous JavaScript loading and dependency management(can be used to load more than just Javascript files).

Require.js is a dependency managment and asynchronous script loading tool(AMD library).
What that means? AMD stands for Asynchronous Module Definition.

RequireJS is asynchronous which means that you can do non-blocking and parallel fetch of your javascript files.

RequireJS is built around Module pattern. Modern web applications tend to have fairly complex front-ends. Module pattern should improve maintability of our bloated javascript code. Remmember those giant javascript files and svn merge conflict hell on your last project? Javascript code should consist of smaller components enforcing separation of concerns and avoiding globals since modules are wrapped by closures. 

RequireJS is well defined and standardized. While we wait ES-Harmony to knock on our doors, libraries like RequireJS are giving us hint how we should structure our applications. Require.js works in current browsers.

<h1><a name="t1" id="t1">Basic structure</a></h2>

<h4>STEP 1 - How to structure RequireJS project</h4>
This is our sample RequireJS project structure.

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

Build scripts and RequireJS optimization tool r.js are inside <strong>[build]</strong> directory.

Application code reside in <strong>[webapp/js/app]</strong> directory. This is place where you should place all of your /Model/View/Router/Template code.

Libraries like jQuery, Backbone, Handlebars and others are inside <strong>[webapp/js/lib]</strong> directory.

Application config and main entry point is <strong>[webapp/js/app.js]</strong>

<h4>STEP 2 - How to include RequireJS</h4>
Your <strong>[webapp/index.html]</strong> should look like this

[cc lang="php"]
<html>
<head></head>
<body>
<div id="test">Some sample content</div>
<script data-main="js/app.js" src="js/lib/require.js"></script>
</body>
</html>
[/cc]

Attribute <strong>[data-main="js/app.js"]</strong> is entry point of our application. This means that RequireJS will first load <strong>[js/app.js]</strong> after initialization.

<h4>STEP 3 - How to configure RequireJS</h4>
Open your <strong>[webapp/js/app.js]</strong> file.

[cc lang="javascript"]

requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app',
		jquery: 'jquery'
	}

});

requirejs(['jquery'], function($) {
	console.log($('#test'));
});

[/cc]

<strong>[baseUrl: 'js/lib']</strong> - RequireJS loads code realative to directory specified in baseUrl. By default baseUrl is set to the same directory as data-main. If you dont specify data-main attribute and baseUrl property is not present in RequireJS config, than default path is directory that contains html page which include RequireJS library.
<a href="http://requirejs.org/docs/api.html#config-baseUrl">base url</a>

Attribute <strong>[paths]</strong> - <a href="http://requirejs.org/docs/api.html#config-paths">paths config</a>

<h4>STEP 4 - How to use requre() and define() in RequireJS</h4>
require() and define() are most important concepts in RequireJS.

<strong>define()</strong> - Used for module definition.
Consists of module wrapper, dependency list and definition function.

[cc lang=javascript]
define(['dependency1', ['dependency2', ['dependency3'], function(dependency1, dependency2, dependency3) {
	var Module = function(value) {
		this.property = value;
	}
	return (Module);
});
[/cc]


<strong>require()</strong> - Used for dependency loading
Consists of public api, dependency list, callback function

[cc lang=javascript]
requirejs(['dependency1', ['dependency2', ['dependency3'], function(dependency1, dependency2, dependency3) {
	// You can use your imported module here
	var instance = dependency1;
	var constructorFunction = new dependency2();
});
[/cc]


<h1><a name="t2" id="t2">Prototypal inheritance and Require.js</a></h2>

Skip to <a href="#source">complete source code</a>.

With RequireJS you can organize your modules in separate files with ease.

Now we are going to add 3 object definitions to our project: Category, Item and Specialized Item.

|-[wepapp]
|--- [build]
|----- r.js
|----- build.js
|----- build.single.js
|--- [js]
|------ [app]
|--------- [category]
|------------ category.js
|------------ item.js
|------------ specializedItem.js
|------ [lib]
|--------- jquery.js
|----- app.js
|----- app-built.js*
|-index.html
|-readme.md

With RequireJS you can provide function or object in return statement. We are going to use this feature to retrieve constructor functions for our object.

With RequireJS you can import and use external dependencies inside your module. We are going to use this feature to achieve prototypal inheritance in RequireJS.

<strong>[webapp/js/app/category/category.js]</strong>

Category is collection of our Items.

[cc lang=javascript]
"use strict";

define(function() {
	
	var Category = function() {
		this.name = 'Default name';
		this.category = 'Default category';
		this.items = [];		
	}

	Category.prototype.showItems = function() {
		for (var i = 0, len = this.items.length; i < len; i++) {
			console.log(this.items[i]);
		}
	}

	Category.prototype.addItem = function(item) {
		this.items.push(item);
	}

	return (Category);

});
[/cc]

<strong>[webapp/js/app/category/item.js]</strong>

Item is base object.

[cc lang=javascript]
"use strict";

define(function() {

	var Item = function(itemName) {
		this.name = itemName;
	}

	Item.prototype.getItemName = function() {
		return this.name;
	}

	return (Item);

});
[/cc]

<strong>[webapp/js/app/category/specialItem.js]</strong>

SpecialItem is object that extends Item. In order to extend Item object, we must import Item as a dependency<strong>['./item'].</strong>
Now Item object is available for use in our new SpecialItem module.

[cc lang=javascript]
"use strict";

define(['./item'], function(Item) {

	var SpecialItem = function(itemName) {
		this.color = 'Default color';
		this.weigth = 'Default weigth';
		Item.call(this, itemName);
	}

	SpecialItem.prototype = new Item;
	SpecialItem.prototype.constructor = SpecialItem;

	return (SpecialItem);

});
[/cc]

<h1><a name="source" id="source">Source code listing</a></h1>

[webapp/js/app.js]

[cc lang=javascript]
requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app',
		jquery: 'jquery'
	}
});

requirejs(['jquery', 'app/category/category', 'app/category/item', 'app/category/specialItem'],
function($, Category, Item, SpecialItem) {
	var c1 = new Category();
	c1.items.push(new Item('RequireJS in Action'));
	c1.items.push(new Item('Javascript Good parts'));
	c1.items.push(new Item('Some book'));
	c1.items.push(new SpecialItem('Special promotion book'));
	c1.showItems();
	console.log(c1);
});
[/cc]

[webapp/js/app/category/category.js]

[cc lang=javascript]
"use strict";

define(function() {
	
	var Category = function() {
		this.name = 'Default name';
		this.category = 'Default category';
		this.items = [];		
	}

	Category.prototype.showItems = function() {
		for (var i = 0, len = this.items.length; i < len; i++) {
			console.log(this.items[i]);
		}
	}

	Category.prototype.addItem = function(item) {
		this.items.push(item);
	}

	return (Category);

});
[/cc]

[webapp/js/app/category/item.js]

[cc lang=javascript]
"use strict";

define(function() {

	var Item = function(itemName) {
		this.name = itemName;
	}

	Item.prototype.getItemName = function() {
		return this.name;
	}

	return (Item);

});
[/cc]

[webapp/js/app/category/specialItem.js]

[cc lang=javascript]
"use strict";

define(['./item'], function(Item) {

	var SpecialItem = function(itemName) {
		this.color = 'Default color';
		this.weigth = 'Default weigth';
		Item.call(this, itemName);
	}

	SpecialItem.prototype = new Item;
	SpecialItem.prototype.constructor = SpecialItem;

	return (SpecialItem);

});
[/cc]

In next part of Require.js series I will talk about r.js RequireJS optimization and build tool.

Follow me on Twitter <a href="https://twitter.com/#!/svlada">click here </a>

<strong>References:</strong> 
<a href="http://addyosmani.com/writing-modular-js/">http://addyosmani.com/writing-modular-js/</a>
<a href="http://msdn.microsoft.com/en-us/magazine/hh227261.aspx">http://msdn.microsoft.com/en-us/magazine/hh227261.aspx</a>
<a href="http://tomdale.net/2012/01/amd-is-not-the-answer/">http://tomdale.net/2012/01/amd-is-not-the-answer/</a>
<a href="http://tagneto.blogspot.com/2012/01/reply-to-tom-on-amd.html">http://tagneto.blogspot.com/2012/01/reply-to-tom-on-amd.html</a>