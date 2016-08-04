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
	return ['Home', 'Games', 'Music', 'Programming', 'Contact'];
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
			{"title": "Contact Me", "content": [""]},
			{"title": "The First Dropdown Page", "content": ["The first dropdown page."]},
			{"title": "The Second Dropdown Page", "content": ["The second dropdown page.", "Second paragraph."]},
			{"title": "The Final Dropdown Page", "content": ["The third dropdown page."]},
		],
	};
}