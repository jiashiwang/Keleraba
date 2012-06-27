"use strict";

define(['./item'], function(Item) {

	var SpecialItem = function(itemName) {
		this.color = 'Default color';
		this.weigth = 'Default weigth';
		Item.call(this, itemName);
	}

	SpecialItem.prototype = new Item;

	return (SpecialItem);

});