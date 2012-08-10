"use strict"

define(['backbone', 'app/model/Tag'], function(Backbone, Tag) {

	var TagItemView = Backbone.View.extend({

		tagName: 'li',

		render: function(rawTemplate) {
			
			var compiledTemplate = Handlebars.compile(rawTemplate);

			var out = compiledTemplate(this.model.toJSON());
			
			$(this.el).html(out);
			
			return this;
		}

	});

	return (TagItemView);

});