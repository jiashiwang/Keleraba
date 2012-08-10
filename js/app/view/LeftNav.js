"use strict"

define(['backbone', 'app/view/TagItemView'], 
	function(Backbone, TagItemView) {

	var LeftNav = Backbone.View.extend({

		tagName: 'ul',

		initialize: function() { },

		render: function(eventName) {
			
			_.each(this.model.models, function(tag) {
				
				var data = tag.toJSON();
				var template = "{{ name }}";

				var tagItem = new TagItemView({model: tag});

				$(this.el).append(tagItem.render(template).el);

			}, this);

			return this;
		}

	});

	return (LeftNav);
	
});