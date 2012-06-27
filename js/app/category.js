"use strict";

define(function() {
	
	var Category = function() {
		this.name = 'Default name';
		this.category = 'Default category';
		this.items = [];		
	}

	Category.prototype.showItems = function() {
		for (var i = 0, len = this.items.length; i < len; i++) {
			console.log(this.items[i]);
		}
	}

	Category.prototype.addItem = function(item) {
		this.items.push(item);
	}

	return (Category);

});