"use strict"

define(['backbone', 'app/model/Tag'], function(Backbone, Tag) {

	var TagCollection = Backbone.Collection.extend({
		model: Tag,

		url: function() {
			return "/rest/rest.php";
		}

	});

	return (TagCollection);

});