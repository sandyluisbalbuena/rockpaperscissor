//ILOVEXUXA

var loaderbackground = document.getElementById("preloader-background");
var preloader = document.getElementById("preloader");

window.addEventListener("load", function(){

	new Promise((resolve) => {
		loaderbackground.classList.add('animate__animated', 'animate__fadeOut');
		
		setTimeout(() => resolve(), 1000); // Delay execution by 3 seconds
	}).then(() => {
		loaderbackground.style.display = "none";
	});
});

function flavor_text(text){
	document.getElementById('pokemonDescription').textContent = text;
}