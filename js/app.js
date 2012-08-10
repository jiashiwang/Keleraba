requirejs.config({

	baseUrl: 'js/lib',

	paths: {
		app: '../app',
		jquery: 'jquery',
		json: 'json',
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
'jquery', 'underscore', 'backbone', 'handlebars', 'app/util/TemplateManager',
'app/model/person', 'app/view/SearchView', 'app/router/AppRouter'
],

function($, _, Backbone, HandleBars, TemplateManager, Person, SearchView, AppRouter) {

$(function () {
	var appRouter = new AppRouter();
	var templateManager = new TemplateManager();

	Backbone.history.start();

	var vent = _.extend({}, Backbone.Events);

	var person1 = new Person();
	person1.get("languages").push('javascript');
	person1.get("languages").push('requirejs');
	person1.set("name", "Vlada");


	

	var searchView = new SearchView({el: $("#user-details") });
	
	searchView.render(person1.toJSON(), templateManager);

	function Developer(skill) {
		this.skill = skill;
		this.says = function() {
			console.log(this.skill + ' rocks!');
		}
	}

	var vlada = new Developer('Python');
	var func = vlada.says;
	func();

	// requirejs(["text!app/template/leftNavigationBar.html"], function(template) {
	// 	var rawTemplate = $(template).html();
	// 	searchView.render(rawTemplate, person1.toJSON());		
	// });


	// start test

	  var SomeModel = Backbone.Model.extend({
	  	
	  	raiseIt: function(data) {
	    	
	    	this.set({data: data});

	      	this.trigger("someEvent");

	  	}

	  });

	  var SomeView = Backbone.View.extend({
	    el: "#input",

	    events: { "change #input": "showIt" },

	    initialize: function() {
	    	
	    	_.bindAll(this, "showIt");
	      	
	      	this.model.bind("someEvent", this.showIt);

	      	$("#input").change(this.showIt);

	    },

	    showIt: function() {
	    	
	    	if (this.model) {
	        
	        	alert(this.model.get('data'));

	        } else {
	        	
	        	alert("there is no model attribute!");

	        }

	    }

	  });

	  var someModel = new SomeModel();
	  var someView = new SomeView({model: someModel});

	  // what do you expect the alert boxes to show for these two lines?
	  // what do you expect it to show when you change the text input field?
	  someModel.raiseIt("foo");
	  someView.showIt();



	// end test
});

});