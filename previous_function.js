$('.backward').click( function previous() {
	var next_audio = $('#playlist .active').prev().prev().addClass('active');

	next_audio.next().next().removeClass('active');

	var path = $('#playlist .active a').attr('href');

	var audio = $('audio');

	audio.attr('src', path);
});

$('.forward').click( function next() {
	var next_audio = $('#playlist .active').next().next().addClass('active');
	
	next_audio.prev().prev().removeClass('active');

	var path = $('#playlist .active a').attr('href');

	var audio = $('audio');

	audio.attr('src', path);

});