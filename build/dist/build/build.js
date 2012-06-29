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