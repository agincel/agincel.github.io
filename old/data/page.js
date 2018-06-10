function getNavbarMembers()
{
	return ['Home', 'Programming', "Games/Music", 'About'];
}

function getPageContents($http)
{
	return {
		"data": [
			{"title": "Repository", "content": ["My name is Adam Gincel; I'm a Computer Science undergraduate student attending Stevens Institute of Technology. I program, write music, and make games -- this website is a repository for some of my work. Thank you for visiting!"]},
			{"title": "Programming Projects", "content": ["This page is home to some of my programming endeavors. Personal projects, academic works, and others will be featured and given screenshots and other info."]},
			{"title": "Games and Music", "content": ["I write music and make games under the alias WaveParadigm. Check out http://waveparadigm.bandcamp.com, http://waveparadigm.itch.io, and http://twitter.com/wave_paradigm for more info!"]},
			{"title": "About Me", "content": [""]},
		],
	};
}