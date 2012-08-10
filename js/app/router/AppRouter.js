"use strict";

define(
	['backbone', 'app/view/LeftNav', 'app/collection/TagCollection'],
	function(Backbone, LeftNav, TagCollection) {
	
	var AppRouter = Backbone.Router.extend({

		routes: {
			"*actions": "defaultRoute"
		},

		defaultRoute: function(actions) {

			var tagsCollection = new TagCollection();

			var leftNavigation = new LeftNav({model: tagsCollection }); 

			tagsCollection.fetch({
				success: function() {
					$('#left-nav').html(leftNavigation.render().el);
				}
			});

			
		}

	});

	return (AppRouter);

});