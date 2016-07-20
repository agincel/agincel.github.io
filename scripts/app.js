var app = angular.module('page', []);
var tryJson = false;

app.controller('PageController', ['$http', function($http) {
	this.value = 1;
	this.selectedItem = 0;
	this.selectedScreenshot = 0;
	this.desiredType = "Game";


	this.dropdownMembers = getNavbarDropdownMembers();
	this.navMembers = getNavbarMembers();

	this.valueMap = getValueMap();

	this.pageContents = getPageContents();
	this.items = getItems();

	this.checkPage = function (){
		var url = window.location.href;

		var pieces = url.split("#");
		var newPageName = "";
		for (var i = 0; pieces.length > 1 && i < this.navMembers.length; i++) {	
			var pageName = pieces[1].split("&")[0];
			console.log(pageName);

			if(pageName.toLowerCase() == this.navMembers[i].display.toLowerCase()) {
				this.value = this.navMembers[i].value;
				newPageName += this.navMembers[i].display.toLowerCase();
				var frag = pieces[1].split("&");
				if(frag.length > 1) {
					for(var j = 0; j < this.items.data.length; j++) {
						if (this.items.data[j].shortName == frag[1]) {
							this.selectedItem = j;
							newPageName += "&" + this.items.data[j].shortName;
						}	
					}
				}

				if (i == 1)
					this.desiredType = "Game";
				else
					this.desiredType = "Project";
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

			if (this.value == 2)
			{
				this.desiredType = "Game";
			}
			else if (this.value == 4)
			{
				this.desiredType = "Project";
				this.selectedItem = 8;
			}

			for(var i = 0; i < this.navMembers.length; i++) {
				if (v == this.navMembers[i].value) {
					window.location.hash = this.navMembers[i].display.toLowerCase();
				}
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

	this.setSelectedItem = function(i) {
		this.selectedScreenshot = 0;
		this.selectedItem = i;

		scroll(0, 100);

		var currentHash = window.location.hash;
		currentHash = currentHash.split("&")[0];
		currentHash += "&" + this.items.data[i].shortName;
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
