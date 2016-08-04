var app = angular.module('page', []);
var tryJson = false;

app.controller('PageController', ['$http', function($http) {
	this.value = 0;
	this.selectedItem = 0;
	this.selectedScreenshot = 0;
	this.desiredType = "Game";


	this.dropdownMembers = getNavbarDropdownMembers();
	this.navMembers = getNavbarMembers();

	this.pageContents = getPageContents();
	this.items = getItems();

	this.contactLinks = getContactLinks();

	this.checkPage = function (){
		var url = window.location.href;

		var pieces = url.split("#");
		var newPageName = "";
		for (var i = 0; pieces.length > 1 && i < this.navMembers.length; i++) {	
			var pageName = pieces[1].split("&")[0];

			if(pageName.toLowerCase() == this.navMembers[i].toLowerCase()) {
				this.value = i;
				newPageName += this.navMembers[i].toLowerCase();
				var frag = pieces[1].split("&");
				if(frag.length > 1) {
					for(var j = 0; j < this.items.data.length; j++) {
						if (this.items.data[j].shortName == frag[1]) {
							this.selectedItem = j;
							newPageName += "&" + this.items.data[j].shortName;
						}	
					}
				}
				if (this.value == 1)
					this.desiredType = "Game";
				else {
					this.desiredType = "Project";
					this.selectedItem = 8;
				}
			}
			if (newPageName != "")
				window.location.hash = newPageName;
		}
	};

	this.setValue = function(v){
		if (this.value != v)
		{
			this.value = v;
			this.selectedItem = 0;
			this.selectedScreenshot = 0;
			this.desiredType = "Game";

			if (this.value == 3)
			{
				this.desiredType = "Project";
				this.selectedItem = 8;
			}

			for(var i = 0; i < this.navMembers.length; i++) { /* update page hash */
				if (v == i) 
					window.location.hash = this.navMembers[i].toLowerCase();
			}

		}
	};
	this.valueIsInArray = function(v){
		for(var i = 0; i < v.length; i++)
		{
			if (v[i] === this.value)
				return true;
		}
		return false;
	};
	this.valueIs = function (v) {
		return this.value === v;
	}

	this.setSelectedItem = function(i) {
		this.selectedScreenshot = 0;
		this.selectedItem = i;

		scroll(0, 100); /* scroll to approximate top of game display */

		var currentHash = window.location.hash;
		currentHash = currentHash.split("&")[0];
		currentHash += "&" + this.items.data[i].shortName; /* set shortname */
		window.location.hash = currentHash;
	};

	this.setSelectedScreenshot = function(s) {
		this.selectedScreenshot = s;
	};

}]);


app.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/navbar.html',
	};
});

app.directive('jumbotron', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/jumbotron.html',
	};
});

app.directive('itemOnDisplay', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/item-on-display.html',
	};
});

app.directive('itemGallery', function(){
	return {
		restrict: 'E',
		templateUrl: './comp/item-gallery.html',
	};
});
