 /**
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
          location.hash = "#aba1";
       }
    })
 });

 /**  
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