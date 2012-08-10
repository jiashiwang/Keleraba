"use strict";

define(['backbone'], function() {

	var Person = Backbone.Model.extend({
		defaults: function() {
			return {
				name: 'default',
				languages: []
			}
		},

		// VALIDATION
		validate: function(attributes) {
			if (!attributes.name || attributes.name === 'default') {
				return "Name cannot be empty";
			}

		},

		// CONSTRUCTOR
		initialize: function() {

			this.bind("change:name", function() {
				var name = this.get("name");
				console.log("Changed name to " + name);
			});

			this.bind("error", function(model, error) {
				console.log(error);
			});
		}
	});

	return (Person);

});