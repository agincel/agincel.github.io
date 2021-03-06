var myGfys = [
	["https://gfycat.com/ifr/GrandWarmheartedBlowfish", "Pause"],
	["https://gfycat.com/ifr/WetHoarseAnnelid", "Spherical Saunter M"], 
];

var blogEntries = [
	/*["2017-5-9", "Finally got a WaveParadigm website up and running! Development is still in progress, and I have a lot to show. Acquisition of the waveparadigm .com domain is ongoing."],
	["2017-6-20", "Added some more gifs and fixed IE support for the site. Got ahold of the @WaveParadigm Twitter handle, though .com remains illustrious. For now the site is at waveparadigm.tk just to give it a shorter name. Big Palladium is in progress plus level design for Spherical Saunters R/M, Pause, and We 2 Guys. Hoo boy."],
	["2017-7-5", "Updated the We 2 Guys gif. Big Palladium is approaching a very playable state, which is exciting. Once that's wrapped up I'm going to go back to work on a playable demo of We 2 Guys, then continue work on Spherical Saunters R and M."],
	["2017-7-27", "Big Palladium is almost feature complete. Updated its gif in the indicator -- all that's left is some new map designs and some QoL changes."],
	["2017-9-27", "Big Palladium 0.9.4 is out! All but a few stretch goals have been met and the game is fully playable. It's even seen some great playtime! Souloist was an involved project with midi sequencing, parsing midis to use as beatmaps, and Unity gameplay."],
	["2017-10-12", "Finally purchased and properly set up http://waveparadigm.net!"],
	["2017-11-29", "Innis Gambit won SGDC's Game Jam 14! I plan on fleshing it out some more so stay tuned."]
	*/
];

let social = [
	{
		img: "./img/facebook.png",
		link: "https://facebook.com/adam.gincel"
	},
	{
		img: "./img/twitter.png",
		link: "https://twitter.com/waveparadigm"
	},
	{
		img: "./img/github.png",
		link: "https://github.com/waveparadigm"
	},
	{
		img: "./img/linkedin.png",
		link: "https://www.linkedin.com/in/adam-gincel-483536ba"
	}
]

blogEntries.reverse();

var a = -1;

window.onload = function() {
	a = Math.floor(Math.random() * (myGfys.length - 1));
	

	fillBlog();
	fillSocial();
	fillGifIndicator();
	nextGfy();
}

function prevGfy() {
	var gfy = document.getElementById("gfy");
	a -= 1;
	if (a < 0)
		a = myGfys.length - 1;
	gfy.src = myGfys[a][0];

	updateIndicators();
}

function nextGfy() {
	var gfy = document.getElementById("gfy");
	a = Math.floor((a + 1) % myGfys.length);
	chosenGfy = myGfys[a][0];
	console.log(a);

	gfy.src = chosenGfy;

	updateIndicators();
}

function fillBlog() {
	var blog = document.getElementById("blog");
	var htmlString = "";
	for (var i = 0; i < blogEntries.length; i++) {
		htmlString += "<li>\n<div class=\"date\">" + blogEntries[i][0] + "</div> " + blogEntries[i][1] + "\n</li>\n";
	}
	blog.innerHTML = htmlString;
}

function fillSocial() {
	let s = document.getElementById("social");
	let htmlString = "";
	for (let i = 0; i < social.length; i++) {
		htmlString += "<a href=\"" + social[i].link + "\"><img src=\"" + social[i].img + "\" /></a>";
	}
	s.innerHTML = htmlString;
}

function fillGifIndicator() {
	var gifIndicator = document.getElementById("gifIndicator");

	var htmlString = "";
	for (var i = 0; i < myGfys.length; i++) {
		htmlString += "<div class=\"indicator";

		if (i == a) {
			htmlString += " active";
		}

		htmlString += "\" id=\"indicator" + i.toString() + "\"></div>";
	}

	gifIndicator.innerHTML = htmlString;
}

function updateIndicators() {
	for (var i = 0; i < myGfys.length; i++) {
		var ind = document.getElementById("indicator" + i.toString());
		ind.classList.remove("active");

		if (i == a) 
			ind.classList.add("active");
	}

	document.getElementById("gifTitle").innerHTML = myGfys[a][1];
}