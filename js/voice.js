responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");

$('.falar').on('click', function(){
	// responsiveVoice.speak(document.getElementById('paragrafo').textContent);
	const paragrafos = document.getElementsByClassName('paragrafo');
	let texto = "";
	for (let i = 0; i < paragrafos.length; i++){
		texto = texto.concat(paragrafos[i].textContent)
	}
	responsiveVoice.speak(texto);
});

$('.parar').on('click', function(){
	responsiveVoice.cancel();
});