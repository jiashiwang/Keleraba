"use strict";

define(function() {

	var Item = function(itemName) {
		this.name = itemName;
	}

	Item.prototype.getItemName = function() {
		return this.name;
	}

	return (Item);

});