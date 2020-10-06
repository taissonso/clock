/** --- Pegando os valores das div's (ponteiros). --- */
var horsAnalog = document.querySelector('.hor-analog');
var minAnalog = document.querySelector('.min-analog');
var segAnalog = document.querySelector('.seg-analog');

/** Função para fazer os ponteiros girarem!!! 
 * - Cria o elemento Date para passar os valores de Horas, segundos e minutos para as varáveis
 *  Assim como foi feito com o relógio digital. 
 * - 
*/
function relogioAnalogico(){
    var data = new Date();
    var hora = data.getHours();
    var minu = data.getMinutes();
    var segs = data.getSeconds();
}

setInterval(relogioAnalogico, 1000);