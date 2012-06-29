{
    appDir: "..",
    baseUrl: "js/lib",
    dir: "dist",
    modules: [
        {
            name: "app"
        }, 
        {
        	name: "app/category/specialItem"
        }
    ],
	paths: {
		app: '../app',
		jquery: 'jquery',
		underscore: 'underscore',
		backbone: 'backbone'
	},

	shim: {

		underscore: {
			exports: '_'
		}, 

		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
}