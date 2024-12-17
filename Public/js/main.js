console.log("ssss");
/*Musica*/
var sound = new Howl({
	src: ['../hbd.mp3'],
	volume: 1.0,
	onend: function () {
		alert('We finished with the setup!');
	}
});

function Modal() {
	$("#sobreModal").modal("show")
}

function CerrarModal() {
	$("#sobreModal").modal("toggle")
	SobreAbierto()
}


function SobreAbierto() {
	sound.play(); 
	const Cancion = `Hola mi vidaaa ❤❤❤ feliz cumpleaños mi mor!! <br>
    Mira este es un pequeño detalle porque no puedo estar ahorita contigo,
    sabes que te deseo lo mejor mi mor... y obvio soy yoooo así que ya la llevas de gane,
    es broma corazón ya sabes como digo cosas, este es el primer cumpleaños que celebramos, 
	ya es diciembre y eres lo más bonito que ha pasado en este año tan malo, me alegra
    mucho como comenzaron las cosas entre nosotros, todo se dio tan natural, sin forzar absolutamente nada... ya sabes tantas personas y terminamos nosotros juntos 😘😘😘 <br>
    en un periodo corto ya pasamos muchas cosas, momentos de todo tipo, como si fuera ya una vieja relación<br>
    Mi vida espero que el resto del día realmente lo puedas disfrutar mucho y no te estrese el horario del trabajo...o yo 😅😅😘😘 ojala también te den muchos regalos
    porque no te pude dar ahorita algo más, pero que si me entero que te regaloooo algo un sugar o un amiguitooo te lo tirooo YUUMIKOOOOOO 🤬🤬😮‍💨😮‍💨 ya ya me calme
    jajaja mi vidaaaa haaaa te amooooo te amo mucho 💜💜💜 creo que escribí casi una carta para 14 de febrero que de cumpleaños jajaja ni modo vas a repetir
    regalo ese día 😅😅😘😘 mi vida hermosaaa me guardas pastel... y si dan tamales tambien jajajajaja te mandoo muchos besos 💜 😘😘😘`


	const typed = new Typed('.typed', {
		strings: [
			'<i class="mascota">HBD!!....mmm no, así no</i>',
			'<i class="mascota">Holiii que onda... hay no eso fue muy seco 😅</i>',
			'<i class="mascota">Que onda mamiii... mmmm... no, muy naco 🙃</i>',
			'<i class="mascota">' + Cancion + '</i>',
		],

		//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
		typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
		startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
		backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
		smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
		shuffle: false, // Alterar el orden en el que escribe las palabras.
		backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
		loop: true, // Repetir el array de strings
		loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
		showCursor: true, // Mostrar cursor palpitanto
		cursorChar: '|', // Caracter para el cursor
		contentType: 'html', // 'html' o 'null' para texto sin formato
	});



	/**FIREWORKS*/

	setInterval(() => {
		var duration = 15 * 1000;
	var animationEnd = Date.now() + duration;
	var defaults = { startVelocity: 10, spread: 350, ticks: 90, zIndex: 0 };

	function randomInRange(min, max) {
		return Math.random() * (max - min) + min;
	}

	var interval = setInterval(function () {
		var timeLeft = animationEnd - Date.now();

		if (timeLeft <= 0) {
			return clearInterval(interval);
		}

		var particleCount = 35 * (timeLeft / duration);
		// since particles fall down, start a bit higher than random
		confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
		confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
	}, 250);
	}, 22000);
	 
}