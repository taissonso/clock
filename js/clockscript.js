 /** --- Ao carregar a página ---
  * - Ao carregar a página, percorre os links do menu e verifica se algum deles
  *   está marcado com a #hash habilitada, caso contrário carrega o primeiro link.
  * - Se algum link estiver com o #hash habilitado então aplica a classe mudafocus
  *   para mostrar a aba que está selecionada.
  */
 window.addEventListener('load', () => {
 	document.querySelectorAll('nav a').forEach(() => {
 		if (location.hash) {
 			document.querySelector('a[href="' + location.hash + '"]').classList.add('mudafocus');
 		} else {
 			location.hash = "#analog";
 		}
 	})
 });

 /** --- Deixa em foco a aba selecionada ---  
  * - Verifica qual o link que está com a classe "a.mudafocus" habilitada,
  *   usando parentNode.querySelector('nome da classe'). 
  * - Então remove a classe desse link e adiciona a classe ao link que foi clicado.
  * - Usando forEach, mais fácil de interagir entre os elementos junto com o uso 
  *   de arrow functions.
  */
 document.querySelectorAll('nav a').forEach((link) => {
 	link.addEventListener('click', () => {
 		let tenhoFocus = link.parentNode.querySelector('a.mudafocus');
 		if (tenhoFocus) {
 			tenhoFocus.classList.remove('mudafocus');
 			link.classList.add('mudafocus');
 		}
 	})
 });

 /**
  * --- Relógio digital. --- 
  * - Seleciona a aba onde vai mostrar o relógio. 
  * - Cria o elemento Date para cada variável de horas, minutos e segundos e atribui 
  * aos seus respectivos valores. 
  * 
  * - Depois da função chama uma variável com setInterval para ficar atualizando.
  */
 function relogioDigital() {
 	var ondeEscrever = document.querySelector('section h2');
						
 	var data = new Date();
 	var hor = data.getHours();
 	var min = data.getMinutes();
 	var seg = data.getSeconds();

	hor = (hor < 10) ? "0" + hor : hor;
	min = (min < 10) ? "0" + min : min;
	seg = (seg < 10) ? "0" + seg : seg;

 	var horasCompleta = hor + ":" + min + ":" + seg;
	ondeEscrever.innerHTML = horasCompleta;	
 }
 var tempo = setInterval(relogioDigital, 1000);