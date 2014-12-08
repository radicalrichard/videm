$(function() {
	
	var $video = $('#video'),
			$iframe = $video.find('iframe');
	
	$.getJSON('/videos', function(data) {
		$iframe.attr('src', '//www.youtube.com/embed/' + data.items[0].id.videoId);
	});

});