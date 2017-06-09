var contadorJogadas = 0;
var turno = 1;
var O_val = 	"O";
var X_val = 	"X";
var EMPTY_val = " ";

function rodada(sqr){
	if(sqr.value == EMPTY_val){
		if(turno==1){
			sqr.value = X_val;
			sqr.style.backgroundColor = "blue";
			sqr.style.backgroundImage = "url(img/vergil.jpg)";
		}else{
			sqr.value = O_val;
			sqr.style.backgroundColor = "red";
			sqr.style.backgroundImage = "url(img/dante.jpg)";
		}
		turno = turno*(-1);
		validaJogada();
	}
}
function validaJogada(){
	contadorJogadas = 0;
	var sqr1 = document.velha.sqr1.value;
	var sqr2 = document.velha.sqr2.value;
	var sqr3 = document.velha.sqr3.value;
	var sqr4 = document.velha.sqr4.value;
	var sqr5 = document.velha.sqr5.value;
	var sqr6 = document.velha.sqr6.value;
	var sqr7 = document.velha.sqr7.value;
	var sqr8 = document.velha.sqr8.value;
	var sqr9 = document.velha.sqr9.value;
	
	var valorTurno;
	if(turno == -1){
		valorTurno = X_val;
	}else if(turno == 1){
		valorTurno = O_val;
	}
	
	if(
	(sqr1 == valorTurno && sqr2 == valorTurno && sqr3 == valorTurno) ||
	(sqr4 == valorTurno && sqr5 == valorTurno && sqr6 == valorTurno) ||
	(sqr7 == valorTurno && sqr8 == valorTurno && sqr9 == valorTurno) ||
	(sqr1 == valorTurno && sqr4 == valorTurno && sqr7 == valorTurno) ||
	(sqr2 == valorTurno && sqr5 == valorTurno && sqr8 == valorTurno) ||
	(sqr3 == valorTurno && sqr6 == valorTurno && sqr9 == valorTurno) ||
	(sqr1 == valorTurno && sqr5 == valorTurno && sqr9 == valorTurno) ||
	(sqr7 == valorTurno && sqr5 == valorTurno && sqr3 == valorTurno)){
		alert("Jogador " + valorTurno + " ganhou!");
		reset();
	}else{
		if(sqr1 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}	
		if(sqr2 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr3 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr4 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr5 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr6 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr7 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr8 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(sqr9 != EMPTY_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(contadorJogadas >= 9){
			alert("Empate =/");
			reset();
		}
		
	}
}
function reset(){
	document.velha.sqr1.value = EMPTY_val;
	document.velha.sqr2.value = EMPTY_val;
	document.velha.sqr3.value = EMPTY_val;
	document.velha.sqr4.value = EMPTY_val;
	document.velha.sqr5.value = EMPTY_val;
	document.velha.sqr6.value = EMPTY_val;
	document.velha.sqr7.value = EMPTY_val;
	document.velha.sqr8.value = EMPTY_val;
	document.velha.sqr9.value = EMPTY_val;
	
	document.velha.sqr1.style.backgroundColor = "green";
	document.velha.sqr2.style.backgroundColor = "green";
	document.velha.sqr3.style.backgroundColor = "green";
	document.velha.sqr4.style.backgroundColor = "green";
	document.velha.sqr5.style.backgroundColor = "green";
	document.velha.sqr6.style.backgroundColor = "green";
	document.velha.sqr7.style.backgroundColor = "green";
	document.velha.sqr8.style.backgroundColor = "green";
	document.velha.sqr9.style.backgroundColor = "green";
	
	document.velha.sqr1.style.backgroundImage = null;
	document.velha.sqr2.style.backgroundImage = null;
	document.velha.sqr3.style.backgroundImage = null;
	document.velha.sqr4.style.backgroundImage = null;
	document.velha.sqr5.style.backgroundImage = null;
	document.velha.sqr6.style.backgroundImage = null;
	document.velha.sqr7.style.backgroundImage = null;
	document.velha.sqr8.style.backgroundImage = null;
	document.velha.sqr9.style.backgroundImage = null;
	
	turno = 1;
	contadorJogadas = 0;
}

/*Genius*/
var sequencia = "";
var minhaSequencia = "";
var pontos = 0;

function meuClique(n){
	minhaSequencia += n;
	mudaBorda(n);
	if(sequencia.indexOf(minhaSequencia)== -1){
		document.all.fail.style.display = "block";
		sequencia = "";
		pontos = 0;
		document.all.count.innerHTML = pontos;
		return;
	}
	if(sequencia == minhaSequencia){
		minhaSequencia = "";
		pontos++;
		document.all.count.innerHTML = pontos;
		setTimeout ("inicia()",1000);
	}
}
function inicia(){
	document.all.start.style.display = "none";
	document.all.fail.style.display = "none";
	sequencia += Math.floor(Math.random () *4);
	exibeSequencia();
}
function reinicia(){
	sequencia = "";
	minhaSequencia = "";
	inicia();
}
function mudaBorda(n){
	switch(n){
		case 0:
			var elem = document.all.a;
			var color1 = "#1aff00";
			var color2 = "#0b7000";
			var noneElemento = "a"
			break
		case 1:
			var elem = document.all.b;
			var color1 = "#ff0b00";
			var color2 = "#c30800";
			var noneElemento = "b"
			break
		case 2:
			var elem = document.all.c;
			var color1 = "#ffec00";
			var color2 = "#c3b400";
			var noneElemento = "c"
			break
		case 3:
			var elem = document.all.d;
			var color1 = "#29abd0";
			var color2 = "#196d85";
			var noneElemento = "d"
			break
	}
	elem.style.borderColor = color1;
	setTimeout("document.all."+noneElemento +".style.borderColor= '"+color2 +"'",200);
}
function exibeSequencia(){
	var num="";
	for(n = 0; n<sequencia.length; n++){
		num = sequencia.substr(n,1);
		setTimeout("mudaBorda("+num+")", 500 * n);
	}
}
/*Fim - Genius*/

/*Começa RPG */

//Criando o canvas
var canvas = document.createElement("canvas");
//Definindo um contexto em 2D
var ctx = canvas.getContext("2d");
//Largura e Altura do Canvas
canvas.width = 500;
canvas.height = 500;
//Canvas é filho do BODY, ou seja, será criado dentro da tag BODY
document.body.appendChild(canvas);

//Background
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
	bgReady = true;
	};
bgImage.src = "./image/background.jpg";

//Jogador
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
	heroReady = true;
	};
heroImage.src = "./image/player.png";

//Monstro
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
	monsterReady = true;
	};
monsterImage.src = "./image/monster.png";

//Objetos do Jogo
var hero ={
	speed: 256
};
var monster = {};
//Quantidade de monstros capturados
var monsterCought = 0;
//Controlando pelo teclado
var keysDown = {};

//Manipulador de evento do teclado, verifica o que esta acontecendo com o teclado
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

//Resetando o jogo
var reset = function (){
	//O player é criado no meio da tela(layout)
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	//Criação do monstro de forma randômica
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
}
//Controle de Direções
var update = function (modifier) {
	if (38 in keysDown){//Cima
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown){//Baixo
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown){//Esquerda
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown){//Direita
		hero.x += hero.speed * modifier;
	}

	//Colisão
	if(hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32) && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)){
		++monsterCought;
		reset();
	}
};
//Desenhar na Tela
var render = function (){
	if(bgReady){
		ctx.drawImage(bgImage, 0, 0);
	}
	if(heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if(monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	//Placar
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "22px Verdana";
	ctx.textAlign= "left";
	ctx.textBaseline = "top";
	ctx.fillText("Capturados: " + monsterCought, 32, 32);
};

//Loop do Jogo
var main = function(){
	//Retornar número em milissegundos
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
	render();
	then = now;
};

//Inicia o Jogo
reset();
var then = Date.now();
//O método setInterval chama uma função ou avalia uma expressão em intervalos específicos (em milissegundos) 
setInterval(main, 1);

/*Termina RPG*/