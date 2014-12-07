
var YouTube = require('youtube-node');

var youTube = new YouTube();
youTube.setKey('AIzaSyAI_A6-ezUOwYa-v_V6jEsx3D5FbP0f8JA');

exports.index = function(req, res, next){
	youTube.search('Star Wars VII Trailer', 1, function(youtubeResponse) {
		res.render('index', {
			title: 'video',
			video: youtubeResponse
		});
	});
};
