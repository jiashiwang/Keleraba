"use strict"

define(['backbone', 'jquery'], function(Backbone, $) {

	var TemplateManager = function() {
		this.templates = {};
		this.promises = {};
	};

	TemplateManager.prototype.get = function(id, callback) {
		var self = this;
		var template = this.templates[id];

		// if (template) {

		// 	callback(template);

		// } else {

		// 	$.ajax({

		// 		type: 'GET',
		// 		url: '/js/app/template/' + id,
		// 		dataType: 'html',

		// 		success: function(data) {
		// 			self.templates[id] = data;
		// 			callback(data);
		// 		},

		// 		error: function(request, status, error) { }

		// 	});

		// }

		if (!self.promises[id]) {
			var promise = $.ajax({ type: 'GET', url: '/js/app/template/' + id, dataType: 'html' });
			self.promises[id] = promise;
		}

		self.promises[id].done(function(data) {
			self.templates[id] = data;
			callback(data);
		});

		self.promises[id].fail(function(data) {	});

	};

	TemplateManager.prototype.preload = function() {
		
	};
	
	return (TemplateManager);

});