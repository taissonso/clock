/** --- Para a ação dos botões */
var startTimer = document.getElementById('btn-timer-start');
var pauseTimer = document.getElementById('btn-timer-pause');
var stopTimer = document.getElementById('btn-timer-stop');

/** Para entrada inválida*/
var erroTimer = document.getElementById('error-timer');
erroTimer.innerHTML = '* Preencha um dos campos!';

/** Onde vai mostrar o timer */
var mostrarTimer = document.getElementById('timer-tempo');

/** --- Oculta os botões pause e stop--- */
pauseTimer.style.display = 'none';
stopTimer.style.display = 'none';

/** --- Valores de entrada: deixa a entrada Global. */
var hors = document.getElementById('timer-horas');
var mins = document.getElementById('timer-minutos');
var segs = document.getElementById('timer-segundos');

/** --- Eventos keyup para as entradas chamando uma function para tratar
 *      do valor de this do campo input.
 * */
hors.addEventListener('keyup', function () {
    var horas = hors.value;
    return this.value = validarEntrada(horas);
});

/** --- Se o valor digitado for maior que 5 força o primeiro digito a virar os minutos
 *      pois não há minutos maior que 60 minutos. Caso queira mais de 60 minutos digita em horas.
  */
mins.addEventListener('keyup', function () {
    var minutos = mins.value;
    this.value = validarEntrada(minutos);
    if (this.value[0] > 5) {
        this.value = this.value[0];
    }
});

/** --- Mesma coisa se aplica aos segundos, se quiser mais de 60 segundo digita em minutos.
  */
segs.addEventListener('keyup', function () {
    var segundos = segs.value;
    this.value = validarEntrada(segundos);
    if (this.value[0] > 5) {
        this.value = this.value[0];
    }
});

/** --- Só aceita números e caso a mensagem de erro esteja aparecendo faz ela ficar oculta --- */
function validarEntrada(entrada) {
    erroTimer.style.visibility = 'hidden';
    var captura = entrada;
    captura = captura.replace(/\D+/, "");
    return captura;
}

/** --- Start ---
 *  - Testa se as entradas não estão vazias, caso true mostra mensagem de erro e não inicia o timer.
 *  - Caso contrário mostra o h2 que vai mostrar o timer e oculta as labels e inputs.
 *  - Oculta o botão start e mostra os botões Pause e Stop.
 *  - Faz um if ternário para verificar se algum dos input's está vazio e atribui 0 (zero) a ele.
 *  - Formato os valores para serem mostrados no padrão 00:00:00 chamando a função formataPadrao().
 *  - Mostra o tempo no h2.
 *  - Entra na função setInterval verifica se o contador chegou a 00:00:00 e mostra uma mensagem
 *    que o contador chegou ao fim caso contrario segue a contagem.
 *  - Formata a saida e mostra na tela.
 */
var tempoTimer;
startTimer.addEventListener('click', () => {
    if ((hors.value == '') && (mins.value == '') && (segs.value == '')) {
        erroTimer.style.visibility = 'visible';
    } else {
        mostrarTimer.style.display = 'block';
        document.querySelector('.entrada-timer').style.display = 'none';
        startTimer.style.display = 'none';
        pauseTimer.style.display = 'flex';
        stopTimer.style.display = 'flex';

        hors.value = (hors.value == '' ? 0 : hors.value);
        mins.value = (mins.value == '' ? 0 : mins.value);
        segs.value = (segs.value == '' ? 0 : segs.value);


        
        formato = formataPadrao(hors.value, mins.value, segs.value);
        mostrarTimer.innerHTML = formato;
        
        tempoTimer = setInterval(() => {

            if ((hors.value == 0) && (mins.value == 0) && (segs.value == 0)) {
                let modal = document.getElementById("modal-timer");
                modal.style.display = "flex";

                let span = document.getElementById("close-x");
                span.addEventListener("click", ()=> { modal.style.display = "none"; });

                let btnClose = document.getElementById("btn-close");
                btnClose.addEventListener("click", ()=>{ modal.style.display = "none"; });

                hors.value = '';
                mins.value = '';
                segs.value = '';
                mostrarTimer.style.display = 'none';
                document.querySelector('.entrada-timer').style.display = 'flex';
                stopTimer.style.display = 'none';
                pauseTimer.style.display = 'none';
                document.getElementById('span-timer-start').innerHTML = 'Start';
                startTimer.style.display = 'flex';
                
                clearInterval(tempoTimer);
            }

            if (segs.value > 0) {
                segs.value--;
            } else if (segs.value == 0 && mins.value > 0) {
                mins.value--;
                segs.value = 59;
            } else if (mins.value == 0 && hors.value > 0) {
                hors.value--;
                mins.value = 59;
                segs.value = 59;
            }
            formato = formataPadrao(hors.value, mins.value, segs.value);
            mostrarTimer.innerHTML = formato;
        }, 1000);
    }
});

/** --- Formata os valores para serem exibidos no h2
 *  Parâmetros: 
 *      Horas, minutos e segundos.
 */
function formataPadrao(hora, minutos, segundos) {
    var formato = (hora < 10 ? "0" + hora : hora) +
        ":" + (minutos < 10 ? "0" + minutos : minutos) +
        ":" + (segundos < 10 ? "0" + segundos : segundos);
    return formato;
}

/** --- Pause ---
 *  - Para o tempo do timer sem zerar os valores.
 *  - Oculta o botão pause. Renomeia o botão Start e mostra o botão Stop.
 */
pauseTimer.addEventListener('click', () => {
    pauseTimer.style.display = 'none';
    document.getElementById('span-timer-start').innerHTML = 'Resume';
    startTimer.style.display = 'flex';
    stopTimer.style.display = 'flex';
    clearInterval(tempoTimer);
});

/** --- Stop ---
 *  - Zera os valores dos inputs.
 *  - Oculta o h2.
 *  - Mostra os labels e os input's.
 *  - Oculta os botões pause e stop
 *  - Mostra o botão start e para o tempo. 
 */
stopTimer.addEventListener('click', () => {
    hors.value = '';
    mins.value = '';
    segs.value = '';
    mostrarTimer.style.display = 'none';
    document.querySelector('.entrada-timer').style.display = 'flex';
    stopTimer.style.display = 'none';
    pauseTimer.style.display = 'none';
    document.getElementById('span-timer-start').innerHTML = 'Start';
    startTimer.style.display = 'flex';
    clearInterval(tempoTimer);
});