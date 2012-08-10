"use strict"

define(['backbone'], function(Backbone) {

	var Tag = Backbone.Model.extend({

		defaults: function() {
			return {
				name: "default", 
				level: 0
			}
		}

	});

	return (Tag);

});