responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");

$('.falar').on('click', function(){
	responsiveVoice.speak(document.getElementById('paragrafo').textContent);
});