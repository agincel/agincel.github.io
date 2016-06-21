var app = angular.module('page', []);
var tryJson = true;

app.controller('PageController', ['$http', function($http) {
	this.value = 2;
	this.selectedItem = 0;
	this.selectedScreenshot = 0;
	this.desiredType = "Game";

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
	};

	this.setSelectedScreenshot = function(s) {
		this.selectedScreenshot = s;
	};

	this.dropdownMembers = getNavbarDropdownMembers();
	this.navMembers = getNavbarMembers();

	this.valueMap = getValueMap();

	this.pageContents = getPageContents($http);
	//this.items = getItems($http);
	$http.get('./json/pageContents.json').success(function(data){
				this.items = data;
				console.log("Got items.");
		});
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








//should really be json
function getNavbarDropdownMembers()
{
	return [];
	/*return [
		{link:'#', display: 'Action', value: 10},
		{link:'#', display: 'Another Action', value: 11},
		{link:'#', display: 'Something Else', value: 12}
	];*/
}

function getNavbarMembers()
{
	return [
		{link: '#', display: 'Home', value: 1},
		{link: '#', display: 'Games', value: 2},
		{link: '#', display: 'Music', value: 3},
		{link: '#', display: 'Programming', value: 4},
		{link: '#', display: 'Contact', value: 5}
	];	
}

function getValueMap()
{
	return [-1, 0, 1, 2, 3, 4, -1, -1, -1, -1, 5, 6, 7];
}

function getPageContents($http)
{
	if (tryJson)
	{
		$http.get('./json/pageContents.json').success(function(data){
				return data;
		});
		console.log("JSON did not succeed.");
	}

	return {
		"data": [
			{"title": "Adam Gincel's Repository", "content": ["My name is Adam Gincel; I'm a Computer Science undergraduate student attending Stevens Institute of Technology. I program, write music, and make games. This website is a repository for some of my work. Thank you for visiting!"]},
			{"title": "Games Showcase", "content": ["Throughout my time enrolled at Stevens I have been very active in the Stevens Game Development Club. I have learned multiple game engines and have made several games on my own and for club Game Jams. Here is a list of games I have been involved in."]},
			{"title": "Music", "content": ["My music making handle is WaveParadigm, and I post most of the music I make to http://waveparadigm.bandcamp.com. I'll also be embedding some of my albums here on this page. Enjoy!"]},
			{"title": "Programming Projects", "content": ["This page is home to any side projects I develop. School projects most likely won't end up here, unless there's something special about them."]},
			{"title": "Contact Me", "content": ["Email me at my email address, or follow me on social media."]},
			{"title": "The First Dropdown Page", "content": ["The first dropdown page."]},
			{"title": "The Second Dropdown Page", "content": ["The second dropdown page.", "Second paragraph."]},
			{"title": "The Final Dropdown Page", "content": ["The third dropdown page."]},
		],
	};
}

function getItems($http)
{
	if (tryJson)
	{
		$http.get('./json/items.json').success(function(data){
				return data;
		});
		console.log("JSON did not succeed.");
	}
	return {};
	return {
		"data": [
			{
				"type": "Game",
				"title": "Memory", 
				"time": "SGDC Game Jam VII",
				"thumbnail": "./images/items/Memory/thumb.png", 
				"description": "Memory was my first place submission to SGDC's Game Jam VII. In it, the player undergoes the 'Memorysort Experiment', and goes through versions of my previous games. Along the way the experiment goes wrong, and mechanics of the various games start to get merged together.", 
				"screenshots": ["./images/items/test/screenshot.png", "./images/items/test/screenshot2.png", "./images/items/test/screenshot3.png"],
				"links": [{"text": "Download here!", "link": "https://waveparadigm.itch.io/memory"}],
			},
			{
				"type": "Game",
				"title": "Maguffin", 
				"time": "SGDC Game Jam VI",
				"thumbnail": "./images/items/Maguffin/thumb.png", 
				"description": "Maguffin was my first project using GameMaker: Studio. Over a week I learned the software from scratch and had a very respectable final product. This won second place in SGDC's Game Jam VI.", 
				"screenshots": ["./images/items/test2/screenshot.png"], 
				"links": [{"text": "Download here!", "link": "https://waveparadigm.itch.io/maguffin"}],
			},
			{
				"type": "Game",
				"title": "Pause", 
				"time": "August 2015",
				"thumbnail": "./images/items/Pause/thumb.png", 
				"description": "A First Person Puzzle Platformer made in Unreal Engine 4 that brings the player through various physics and timing based puzzles wherein they can freeze time at the press of a button. Activate and control various physics objects and pause them in various states to make your way to the end of each level.", 
				"screenshots": ["./images/items/test2/screenshot.png"], 
				"links": [],
			},
			{ 
				"type": "Game",
				"title": "Spherical Saunter", 
				"time": "November 2014",
				"thumbnail": "./images/items/SphericalSaunter/thumb.png", 
				"description": "Spherical Saunter was my first big project in Unreal Engine 4. It is a 3D Rolling Puzzle Platforming game, similar to games like Super Monkey Ball and the Kororinpa Marble series for Wii. I have learned many things since then, but the currently released beta has 22 normal levels, 2 secret levels, and 2 multiplayer levels.",
				"screenshots": ["./images/items/test2/screenshot.png"], 
				"links": [{"text": "Download the beta here!", "link": "http://1drv.ms/1H48dWi"}],
			},
			{
				"type": "Game",
				"title": "Impulse",
				"time": "Game Jam IV",
				"thumbnail": "./images/items/Impulse/thumb.png",
				"description": "Impulse was my game for SGDC's Game Jam IV. The theme was \"discrete.\" The game is a First Person Platformer in which the user gets one and eventually two guns that launch them backwards with an energy pulse. The finished Jam game has 5 levels.",
				"screenshots": ["./images/items/test2/screenshot.png"], 
				"links": [{"text": "Download here!", "link": "http://1drv.ms/1DsQs43"}],
			},
			{
				"type": "Game",
				"title": "We Guys",
				"time": "SGDC Game Jam III",
				"thumbnail": "./images/items/WeGuys/thumb.png",
				"description": "A co-op platformer inspired by I Wanna Be the Guy created for Game Jam III, where the theme was \"global\". Built to be horrifically difficult, we have seen pairs of players threaten all sorts of things on each other and on us upon playing it. This was a good learning experience, as it was my first foray into UE4's 2D workflow.",
				"screenshots": ["./images/items/test2/screenshot.png"], 
				"links": [{"text": "Download here!", "link": "http://1drv.ms/17c58IX"}],
			},
			{
				"type": "Game",
				"title": "Rig 'er Bigger",
				"time": "Summer 2015",
				"thumbnail": "./images/items/RigErBigger/thumb.png",
				"description": "Rig 'er Bigger was a summer 2015 project I worked on with my friend Kevin; inspired by Big Rigs: Over the Road Racing, Rig 'er Bigger is an intentionally weird and bizarre racing game. Featuring 4 levels and up to 4 player multiplayer, this project grew much bigger than the joke it was originally intended to be.",
				"screenshots": ["./images/items/test2/screenshot.png"],
				"links": [{"text": "Download here!", "link": "https://drive.google.com/file/d/0BxUwM3q0V1obaDZPel9HZWhQeTg/view"}],
			},
			{
				"type": "Game",
				"title": "Aggressive Expansion",
				"time": "SGDC Game Jam V",
				"thumbnail": "./images/items/AggressiveExpansion/thumb.png",
				"description": "Aggressive Expansion was made for SGDC's Game Jam V. The theme was \"expansion.\" Made together with my friend Kevin, Aggressive Expansion is a 2 player racing game completely different from everybody's favorite rocket powered vehicular soccer game. A version 1.1 was released shortly after the closing ceremony, fixing several bugs people ran into during its first play session.",
				"screenshots": ["./images/items/test2/screenshot.png"],
				"links": [{"text": "Download here!", "link": "https://drive.google.com/file/d/0B4V6h-fMgMqTZzhfcGF0djI2azA/view?usp=sharing"}],
			},
			{
				"type": "Project",
				"title": "NYC Public Wifi Visualization",
				"time": "Spring 2016",
				"thumbnail": "./images/items/NYCWifi/thumb.png",
				"description": "An interactive data visualization of NYC's Free Public WiFi networks I made in with D3.js. Sort the networks by location or type!",
				"screenshots": ["./images/items/test2/screenshot.png"],
				"links": [{"text": "Try out the visualization!", "link": "http://adamgincel.com/programming/NYCWiFi"}],
			},
			{
				"type": "Project",
				"title": "Crowd Pixel",
				"time": "HackRU IX",
				"thumbnail": "./images/items/Crowdpixel/thumb.png",
				"description": "My second experiment with Firebase: type in a hex code and a \"pixel\" of that color gets added to the image! Enjoy this effectively crowd-generated image, which updates in real time!",
				"screenshots": ["./images/items/test2/screenshot.png"],
				"links": [{"text": "Contribute to Crowd Pixel!", "link": "http://adamgincel.com/programming/crowdpixel.html"}],
			},
			{
				"type": "Project",
				"title": "Firebase Test Chat",
				"time": "HackRU IX",
				"thumbnail": "./images/items/Firebase/thumb.png",
				"description": "I was exposed to many amazing APIs and tools when I visited Hack RU IX on October 3-4 2015; one of which was Firebase, a way to store data to database and read from it in runtime using Javascript and no PHP or SQL. I I decided to try learning it and, following their tutorial, managed to get a simple chat running. The page will only show messages posted within the past hour. Give it a try at the link below!",
				"screenshots": ["./images/items/test2/screenshot.png"],
				"links": [{"text": "Try Firebase Chat!", "link": "http://adamgincel.com/programming/adamtestchat.html"}],
			},
			{
				"type": "Project",
				"title": "AdamTestBot",
				"time": "June 2015",
				"thumbnail": "./images/items/AdamTestBot/thumb.png",
				"description": "AdamTestBot was my first foray into Python. After Telegram released their Core Bot API, I decided to dive in headfirst, learning basic HTTP requests and sending JSON-formatted data back and forth from a Raspberry Pi. The bot responds to commands starting with a forward slash and can do time-sensitive responses as well as leaderboard storing and dictionary lookups.",
				"screenshots": ["./images/items/test2/screenshot.png"],
				"links": [{"text": "See live information!", "link": "http://adamgincel.com/programming/atbstats.html"}, {"text": "View the source!", "link": "https://github.com/agincel/AdamTestBot"}],
			},
			/*{
				"type": ,
				"title": ,
				"time": ,
				"thumbnail": ,
				"description": ,
				"screenshots": [],
				"links": [],
			},*/
		],
	};
}


