

var games = [
	{
		title: "Paul's Piano",
		description: "My brother Paul is two years younger than me, and has Autism. We bonded over my piano playing, and I taught him how to ask for specific songs by hitting certain keys on the keyboard. As I was leaving for college we needed an alternative to listen to my piano playing while I was away, and Paul's Piano was born. It started as an iOS app, and now has a Web version for easier access.",
		image: "./img/projects/piano.png",
		links: [["./piano/index.html", "Try out Paul's Piano online!"]]
	},
	{
		title: "Gifkin",
		description: "Icons: Combat Arena is a Free to Play Platform Fighting Game for PC. I am a community moderator on the game's official Discord server, and have been developing and maintaining Gifkin, a server bot capable of many features needed by the mod team and Wavedash Games.",
		image: "./img/projects/gifkin.png",
		links: [["https://github.com/agincel/Gifkin", "Source on Github"]]
	},
	{
		title: "Stevens Game Development Club Website",
		description: "I was the President of the Stevens Game Development Club from 2016-2017. During that time and afterwards I have helped the organization maintain its website, which features club created content, hosted events, and more. The site was built in AngularJS and is live to this day.",
		image: "./img/projects/sgdc.png",
		links: [["https://sgdc.github.io", "Visit the SGDC Website"]]
	},
	{
		title: "Meltdown",
		description: "Experience the intricacies of Nuclear Reactor operation. Made in conjunction with James Romph (<a href=\"http://tehpilot.com\">website</a>) and Professor Alex Wellerstein, Meltdown aims to teach a realistic story about the events that lead up to nuclear reactor meltdown. Fall 2016.",
		image: "img/projects/meltdown.png",
		links: [["https://waveparadigm.itch.io/meltdown", "itch.io"]]
	},
]






window.onload = function() {
	populateList();
}


function populateList() {
	var list = document.getElementById("gamesList");

	var htmlString = "";

	for (var i = 0; i < games.length; i++) {
		htmlString += "<div class=\"game\">\n";
		htmlString += "<div class=\"imagewrapper\">\n";
		htmlString += "<img src=\"" + games[i].image + "\" /> </div>\n<section>\n";
		htmlString += "<h1>" + games[i].title + "</h1>\n";
		htmlString += "<p>" + games[i].description + "</p>\n\n";

		for (var j = 0; j < games[i].links.length; j++) {
			htmlString += "<a href=\"" + games[i].links[j][0] + "\">" + games[i].links[j][1] + "</a> ";
		}

		htmlString += "\n</section>\n</div>"
	}

	list.innerHTML = htmlString;

}