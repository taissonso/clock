/**
 * 
 */

 var chamaConteudo = cronometro(); 

function cronometro () {
    var ondeEscrever = document.getElementById('stopwatch');
    criaEstruturaHTML(ondeEscrever);
    
}

/** --- Cria a estrutura HTML ---
 * Uma section, uma h2 e dois buttons
 */
function criaEstruturaHTML (ondeEscrever) {
    
    var elemento = criarElemento('section');
    var section = adicionaElemento(ondeEscrever, elemento);
    elemento = criarElemento('h2');
    elemento.innerHTML = '00:00.000';
    adicionaElemento(section, elemento);
    elemento = criarElemento('button');
    elemento.classList.add('botoes');
    elemento.id = 'start';
    elemento.innerHTML = 'Start';
    adicionaElemento(section, elemento);
    elemento = criarElemento('button');
    elemento.classList.add('botoes');
    elemento.id = 'stop';
    elemento.innerHTML = 'Stop';
    adicionaElemento(section, elemento);
}
        
/** --- Cria Elementos --- 
 *  - Parâmetros:
 *      elemento: o nomne do elemento HTML a ser criado.
 */
function criarElemento (elemento){
    return document.createElement(elemento);
}

/** --- Adiciona os elementos no HTML ---
 * - Parâmetros:
 *      1º local: onde vai ser adicionado o elemento no HTML.
 *      2º elemento que vai ser adicionado ao HTML. 
 * */
function adicionaElemento(ondeEscrever, elemento){
    return ondeEscrever.appendChild(elemento);
}
