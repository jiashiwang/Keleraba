svlada@gmail.com

Require.js dependency managment and asynchronous script loading

This is introducary practical RequireJS tutorial. Reading material about AMD and RequireJS is in references section of article.

Before or after reading this article I strongly recommend to read documentation on RequireJS website. => http://requirejs.org/docs/start.html. James Burke did great job here.

RequireJS is a JavaScript file and module loader which allows for asynchronous JavaScript loading and dependency management.

RequireJS is AMD library. What that means?

AMD stands for Asynchronous Module Definition.

RequireJS is asynchronous which means that you can do non-blocking and parallel fetch of your javascript files.

RequireJS is built around Module pattern. Modern web applications tend to have fairly complex front-ends. Module pattern should improve maintability of our bloated javascript code. Javascript code should consists of smaller components enforcing separation of concerns.

RequireJS is well defined and standardized. While we wait ES-Harmony to knock on our doors, libraries like RequireJS are giving us hint how we should structure our applications. 
===========
Require has the biggest learning curve, but arguably the biggest payoff when applied correctly.
 solid module-loader/namespace management tool.

Clean separation of concerns - no more enormous 3000 line JS file that nobody wants to work on for fear of merge conflicts.

Global-protecting sandbox without all the boilerplate.

Ability to lazy load modules (load in background while user is preoccupied)

Works in current browsers, no need to wait for Harmony.

Is asynchronous by nature.
Can load more than just JavaScript files.

Avoid globals by default since modules are wrapped by closures.
============
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

