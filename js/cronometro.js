/**Pega os botões pelo ID */
var startStopwatch = document.getElementById('btn-stopwatch-start'); 
var pauseStopwatch = document.getElementById('btn-stopwatch-pause'); 
var stopStopwatch = document.getElementById('btn-stopwatch-stop'); 

/** --- Define as variáveis para usar no cronômetro --- */
var hor = 0,
    min = 0,
    seg = 0,
    mil = 0,
    tempo;

/** --- Oculta os botões pause e stop--- */
pauseStopwatch.style.display = 'none';
stopStopwatch.style.display = 'none';

/** --- Inicia o cronômetro ---
 *  - Oculta o botão Start, mostra os botões Pause e Stop.
 *  - Chama set interval para iniciar o cronômetro com as regras em if. 
 *  - Formata o cronômetro para mostrar zeros a esquerda caso o número seja menor que 10 (Usa if ternário!).
 parar
 */
startStopwatch.addEventListener('click', ()=> {
    startStopwatch.style.display = 'none';
    pauseStopwatch.style.display = 'inline-block';
    stopStopwatch.style.display = 'inline-block';

    tempo = setInterval(() => {
        var formato;
        mil++;
        if (mil == 100) {
            mil = 0;
            seg++;
            if (seg == 60) {
                seg = 0;
                min++;
                if (min == 60) {
                    min = 0;
                    hor++
                }
            }
        }
        formato = (hor < 10 ? "0" + hor : hor) + ":" + (min < 10 ? "0" + min : min) +
         ":" + (seg < 10 ? "0" + seg : seg) + "." + (mil < 10 ? "0" + mil : mil);
        document.getElementById('tempo').innerHTML = formato;
    }, 10);
});

/** --- Pause ---
 *  - Para o tempo do cronômetro sem zerar os valores.
 *  - Oculta o botão pause. Renomeia o botão Start e mostra o botão Stop.
 */
pauseStopwatch.addEventListener('click', ()=> {
    pauseStopwatch.style.display = 'none';
    startStopwatch.setAttribute('value','Resume');
    startStopwatch.style.display = 'inline-block';
    stopStopwatch.style.display = 'inline-block';
    clearInterval(tempo);
});

/** ---  --- Ao clicar em Stop zero o cronômetro ---
 *  Irá zerar os valores do cronômetro, ocultara o botão stop e pause. 
 *  Mostrara o botão Start.
 */
stopStopwatch.addEventListener('click', () => {
    hor = 0;
    min = 0;
    seg = 0;
    mil = 0;
    document.getElementById('tempo').innerHTML = "00:00:00.00";
    stopStopwatch.style.display = 'none';
    pauseStopwatch.style.display = 'none';
    startStopwatch.setAttribute('value','Start');
    startStopwatch.style.display = 'inline-block';
    clearInterval(tempo);
});
