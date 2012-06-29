svlada@gmail.com

Require.js dependency managment and asynchronous script loading management tool.

This is introducary RequireJS tutorial. Reading material about AMD and RequireJS is in references section of article.

Before or after reading this article I strongly recommend to read documentation on RequireJS website. => http://requirejs.org/docs/start.html. James Burke did great job here.

RequireJS is a JavaScript file and module loader which allows for asynchronous JavaScript loading and dependency management. To be correct RequireJS can load more than Javascript files.

RequireJS is AMD library. What that means?

AMD stands for Asynchronous Module Definition.

RequireJS is asynchronous which means that you can do non-blocking and parallel fetch of your javascript files.

RequireJS is built around Module pattern. Modern web applications tend to have fairly complex front-ends. Module pattern should improve maintability of our bloated javascript code. Remmember those giant javascript files and svn merge conflict hell on your last project? Javascript code should consist of smaller components enforcing separation of concerns and avoiding globals since modules are wrapped by closures. 

RequireJS is well defined and standardized. While we wait ES-Harmony to knock on our doors, libraries like RequireJS are giving us hint how we should structure our applications. Require.js works in current browsers.

STEP 1 - How to structure RequireJS project

This is our sample RequireJS project structure

|-[wepapp]
|--- [build]
|----- r.js
|----- build.js
|----- build.single.js
|--- [js]
|------ [app]
|------ [lib]
|----- app.js
|----- app-built.js*
|-index.html
|-readme.md

Build scripts nad RequireJS optimization tool r.js are inside [build] directory.

Application code reside in [webapp/js/app] directory. This is place where you should place all of your /Model/View/Router/Template code.

Libraries like jQuery, Backbone, Handlebars and others are inside [webapp/js/lib] directory.

Application config and main entry point is [webapp/js/app.js]

STEP 2 - How to include RequireJS

Your [webapp/index.html] should look like this

[cc lang="php"]
<html>
<head></head>
<body>
<div id="test">Some sample content</div>
<script data-main="js/app.js" src="js/lib/require.js"></script>
</body>
</html>
[/cc]

Attribute [data-main="js/app.js"] is entry point of our application. This means that RequireJS will first load [js/app.js] after initialization.

STEP 3 - How to configure RequireJS

Open your [webapp/js/app.js] file.

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


require(), define()

define() - Used for module definition
module wrapper, dependency list, definition function;


require() - Used for dependency loading
public api, dependency list, callback function


 
References: 
http://addyosmani.com/writing-modular-js/
http://msdn.microsoft.com/en-us/magazine/hh227261.aspx
http://tomdale.net/2012/01/amd-is-not-the-answer/
http://tagneto.blogspot.com/2012/01/reply-to-tom-on-amd.html


Basic structure

Prototypial inheritance and Require.js

Require.js optimizer

Require.js optimizer dump dependencies to single file

