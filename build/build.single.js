{
    baseUrl: "../js/lib",
    name: "../app",
    out: "app-built.js",

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