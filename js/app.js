requirejs.config({

	baseUrl: 'js/lib',

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

});

requirejs(
[
'jquery', 'underscore', 'backbone', 'handlebars',
'app/category/category', 'app/category/item', 'app/category/specialItem'
],

function($, _, Backbone, HandleBars, Category, Item, SpecialItem) {

	console.log(Handlebars);

	var c1 = new Category();
	
	c1.items.push(new Item('Neka kategorija'));
	c1.items.push(new Item('Automobili'));
	c1.items.push(new Item('Knjige'));

	c1.items.push(new SpecialItem('Specijal Promo Knjiga'));

	c1.showItems();

	console.log(c1);


	var x = $("#main");

});