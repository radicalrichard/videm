
var YouTube = require('youtube-node');

var youTube = new YouTube();
youTube.setKey('AIzaSyAI_A6-ezUOwYa-v_V6jEsx3D5FbP0f8JA');

exports.index = function(req, res, next){
	var lastweek = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7);
	youTube.search('nodejs', {
		maxResults: 1,
		publishedAfter: lastweek.toISOString(),
		order: 'relevance'
	}, function(youtubeResponse) {
		res.json(youtubeResponse);
	});
};
