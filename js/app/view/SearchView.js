"use strict";

define(['jquery', 'backbone', 'app/util/TemplateManager'], function($, Backbone, TemplateManager) {

	var SearchView = Backbone.View.extend({
		template: 'leftNavigationBar.html',

		initialize: function() { },

		render: function(data, templateManager) {
			var self = this;

			// var templateManager = new TemplateManager();

			var tplAjax = templateManager.get(self.template, function(template) {
				var rawTemplate = $(template).html();
				var compiledTemplate = Handlebars.compile(rawTemplate);
				var out = compiledTemplate(data);
				$(self.el).html(out);
			});

			var tplAjax1 = templateManager.get(self.template, function(template) {
				var rawTemplate = $(template).html();
				var compiledTemplate = Handlebars.compile(rawTemplate);
				var out = compiledTemplate(data);
				$(self.el).html(out);
			});

			return this;
		},

		events: {
			"click #action-info": "showInfo"
		},

		showInfo: function() {
			$(this.el).append('Moj info');
		}

	});

	return (SearchView);

});