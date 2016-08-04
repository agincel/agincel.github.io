function getItems()
{
	return {
		data: [
			{
				type: "Game",
				title: "Memory", 
				time: "SGDC Game Jam VII",
				thumbnail: "./images/items/Memory/thumb.png", 
				description: "Memory was my first place submission to SGDC's Game Jam VII. In it, the player undergoes the 'Memorysort Experiment', and goes through versions of my previous games. Along the way the experiment goes wrong, and mechanics of the various games start to get merged together.", 
				screenshots: ["./images/items/Memory/s1.png", "./images/items/Memory/s2.png"],
				links: [{text: "Download here!", link: "https://waveparadigm.itch.io/memory"}],
				shortName: "memory",
			},
			{
				type: "Game",
				title: "Maguffin", 
				time: "SGDC Game Jam VI",
				thumbnail: "./images/items/Maguffin/thumb.png", 
				description: "Maguffin was my first project using GameMaker: Studio. Over a week I learned the software from scratch and had a very respectable final product. This won second place in SGDC's Game Jam VI.", 
				screenshots: ["./images/items/Maguffin/s1.png", "./images/items/Maguffin/s2.png"], 
				links: [{text: "Download here!", link: "https://waveparadigm.itch.io/maguffin"}],
				shortName: "maguffin",
			},
			/*{
				type: "Game",
				title: "Pause", 
				time: "August 2015",
				thumbnail: "./images/items/Pause/thumb.png", 
				description: "A First Person Puzzle Platformer made in Unreal Engine 4 that brings the player through various physics and timing based puzzles wherein they can freeze time at the press of a button. Activate and control various physics objects and pause them in various states to make your way to the end of each level.", 
				screenshots: ["./images/items/test2/screenshot.png"], 
				links: [],
				shortName: "pause",
			},*/
			{ 
				type: "Game",
				title: "Spherical Saunter", 
				time: "November 2014",
				thumbnail: "./images/items/SphericalSaunter/thumb.png", 
				description: "Spherical Saunter was my first big project in Unreal Engine 4. It is a 3D Rolling Puzzle Platforming game, similar to games like Super Monkey Ball and the Kororinpa Marble series for Wii. I have learned many things since then, but the currently released beta has 22 normal levels, 2 secret levels, and 2 multiplayer levels.",
				screenshots: ["./images/items/SphericalSaunter/s1.png", "./images/items/SphericalSaunter/s2.png", "./images/items/SphericalSaunter/s3.png"], 
				links: [{text: "Download the beta here!", link: "http://1drv.ms/1H48dWi"}],
				shortName: "spherical",
			},
			{
				type: "Game",
				title: "Impulse",
				time: "Game Jam IV",
				thumbnail: "./images/items/Impulse/thumb.png",
				description: "Impulse was my game for SGDC's Game Jam IV. The theme was \"discrete.\" The game is a First Person Platformer in which the user gets one and eventually two guns that launch them backwards with an energy pulse. The finished Jam game has 5 levels.",
				screenshots: ["./images/items/test2/screenshot.png"], 
				links: [{text: "Download here!", link: "http://1drv.ms/1DsQs43"}],
				shortName: "impulse",
			},
			{
				type: "Game",
				title: "We Guys",
				time: "SGDC Game Jam III",
				thumbnail: "./images/items/WeGuys/thumb.png",
				description: "A co-op platformer inspired by I Wanna Be the Guy created for Game Jam III, where the theme was \"global\". Built to be horrifically difficult, we have seen pairs of players threaten all sorts of things on each other and on us upon playing it. This was a good learning experience, as it was my first foray into UE4's 2D workflow.",
				screenshots: ["./images/items/test2/screenshot.png"], 
				links: [{text: "Download here!", link: "http://1drv.ms/17c58IX"}],
				shortName: "weguys",
			},
			{
				type: "Game",
				title: "Rig 'er Bigger",
				time: "Summer 2015",
				thumbnail: "./images/items/RigErBigger/thumb.png",
				description: "Rig 'er Bigger was a summer 2015 project I worked on with my friend Kevin Quigley; inspired by Big Rigs: Over the Road Racing, Rig 'er Bigger is an intentionally weird and bizarre racing game. Featuring 4 levels and up to 4 player multiplayer, this project grew much bigger than the joke it was originally intended to be.",
				screenshots: ["./images/items/test2/screenshot.png"],
				links: [{text: "Download here!", link: "https://drive.google.com/file/d/0BxUwM3q0V1obaDZPel9HZWhQeTg/view"}],
				shortName: "rig",
			},
			{
				type: "Game",
				title: "Aggressive Expansion",
				time: "SGDC Game Jam V",
				thumbnail: "./images/items/AggressiveExpansion/thumb.png",
				description: "Aggressive Expansion was made for SGDC's Game Jam V. The theme was \"expansion.\" Made together with my friend Kevin Quigley, Aggressive Expansion is a 2 player racing game completely different from everybody's favorite rocket powered vehicular soccer game. A version 1.1 was released shortNamely after the closing ceremony, fixing several bugs people ran into during its first play session.",
				screenshots: ["./images/items/AggressiveExpansion/s1.png"],
				links: [{text: "Download here!", link: "https://drive.google.com/file/d/0B4V6h-fMgMqTZzhfcGF0djI2azA/view?usp=sharing"}],
				shortName: "aggressive",
			},
			{
				type: "Project",
				title: "NYC Public Wifi Visualization",
				time: "Spring 2016",
				thumbnail: "./images/items/NYCWifi/thumb.png",
				description: "An interactive data visualization of NYC's Free Public WiFi networks I made in with D3.js. Sort the networks by location or type!",
				screenshots: ["./images/items/NYCWifi/0.png"],
				links: [{text: "Try out the visualization!", link: "http://adamgincel.com/old/programming/NYCWiFi"}],
				shortName: "nycwifi",
			},
			{
				type: "Project",
				title: "Crowd Pixel",
				time: "HackRU IX",
				thumbnail: "./images/items/Crowdpixel/thumb.png",
				description: "My second experiment with Firebase: type in a hex code and a \"pixel\" of that color gets added to the image! Enjoy this effectively crowd-generated image, which updates in real time!",
				screenshots: ["./images/items/Crowdpixel/0.png"],
				links: [{text: "Contribute to Crowd Pixel!", link: "http://adamgincel.com/old/programming/crowdpixel.html"}],
				shortName: "crowdpixel",
			},
			{
				type: "Project",
				title: "Firebase Test Chat",
				time: "HackRU IX",
				thumbnail: "./images/items/Firebase/thumb.png",
				description: "I was exposed to many amazing APIs and tools when I visited Hack RU IX on October 3-4 2015; one of which was Firebase, a way to store data to database and read from it in runtime using Javascript and no PHP or SQL. I I decided to try learning it and, following their tutorial, managed to get a simple chat running. The page will only show messages posted within the past hour. Give it a try at the link below!",
				screenshots: ["./images/items/Firebase/0.png"],
				links: [{text: "Try Firebase Chat!", link: "http://adamgincel.com/old/programming/adamtestchat.html"}],
				shortName: "chat",
			},
			{
				type: "Project",
				title: "AdamTestBot",
				time: "June 2015",
				thumbnail: "./images/items/AdamTestBot/thumb.png",
				description: "AdamTestBot was my first foray into Python. After Telegram released their Core Bot API, I decided to dive in headfirst, learning basic HTTP requests and sending JSON-formatted data back and forth from a Raspberry Pi. The bot responds to commands starting with a forward slash and can do time-sensitive responses as well as leaderboard storing and dictionary lookups.",
				screenshots: ["./images/items/test2/screenshot.png"],
				links: [{text: "See live information!", link: "http://adamgincel.com/old/programming/atbstats.html"}, {text: "View the source!", link: "https://github.com/agincel/AdamTestBot"}],
				shortName: "adamtestbot",
			},
			{
				type: "Project",
				title: "Old Website",
				time: "Fall 2015",
				thumbnail: "./images/logo.png",
				description: "My first website, built because I needed something for my domain name to point to. It wasn't responsive and had a lot of code in need of refactoring. The site you're on currently was built from the ground up!",
				screenshots: ["./images/items/test/0.png"],
				links: [{text: "View my old website here!", link: "http://adamgincel.com/old"}],
				shortName: "old",
			},
			/*{
				type: ,
				title: ,
				time: ,
				thumbnail: ,
				description: ,
				screenshots: [],
				links: [],
				shortName: ,
			},*/
		],
	};
}