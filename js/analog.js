/** --- Pegando os valores das div's (ponteiros). --- */
var horsAnalog = document.querySelector('.hor-analog');
var minAnalog = document.querySelector('.min-analog');
var segAnalog = document.querySelector('.seg-analog');

/** Função para fazer os ponteiros girarem!!! 
 * - Cria o elemento Date para passar os valores de Horas, segundos e minutos para as varáveis
 *  Assim como foi feito com o relógio digital. 
 * - Pega os segundos e divide por 60 para ver onde ele vai ficar em determinado momento.
 *   Pois o ponteiro tem que fazer 1 volta a cada 60 segundos, caso contrário faria 60 voltas
 *   por minuto, o mesmo vale para minutos e horas. 
 * - Multiplica por 360 (pulo do gato), da o angulo na qual o ponteiro dever estar naquele momento.
 *   Passando esse falor para a propriedade CSS rotate (=D) que precisa de um angulo para girar 
 *   o elemento. PROBLEMA: ainda não consegui fazer o ponteiro girar com a ponto no centro somente no 
 *   proprio eixo. 
 * - Usar a propriedade tranformOrigin, que posiciona o elemento depois de ser transformado. 
*/
function relogioAnalogico(){
    var data = new Date();
    var hora = data.getHours();
    var minu = data.getMinutes();
    var segs = data.getSeconds();

    // 1/60 = 0.0166666666666667 é a fração do segundo
    // 30/60 = 0.5
    var segsFracao = segs / 60;
    //Ao multiplicar por 360 da o angulo que o ponteiro vai ficar.
    var segsAngulo = segsFracao * 360;

    /*  Usa template strings, que permite usar expressões com strings (interpolação).
    *   Assim sincroniza o valor de graus com a rotação em CSS. 
    *   Problema, a rotação fica no proprio eixo no centro do ponteiro.
    *   
    */
    segAnalog.style.transform = `rotate(${segsAngulo}deg)`;
    segAnalog.style.transformOrigin = 'top';

    /** Minutos e Horas parece não estar se posicionando corretamente. Vou deixar comentado aqui
    var minFracao = minu / 60;
    var minuAngulo = minFracao * 360;
    minAnalog.style.transform = `rotate(${minuAngulo}deg)`;
    minAnalog.style.transformOrigin = 'top';

    var horFracao = hora / 60;
    var horaAngulo = horFracao * 360;
    horsAnalog.style.transform = `rotate(${horaAngulo}deg)`;
    horsAnalog.style.transformOrigin = 'top';
*/
}

setInterval(relogioAnalogico, 1000);