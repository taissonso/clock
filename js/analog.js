
let linhas = document.getElementsByClassName("linhas");
let relogio = document.getElementsByClassName("analogico")[0];

for (let i = 1; i < 60; i++) {
  relogio.innerHTML += "<div class='linhas'></div>";
  linhas[i].style.transform = "rotate(" + 6 * i + "deg)";
//   linhas[i].style.transform = "rotate(" + 30 * i + "deg)";
  
//    if (i % 5){
//        linhas[i].style.transform = "rotate(" + 6 * i + "deg)";
//     console.log("VALOR DE i=" + i + ": --> "+ i % 5)
//    } else {
//        linhas[i].style.transform = "rotate(" + 30 * i + "deg)";
//     console.log("VALOR DE PONTEIRO MAIOR " + i + ": --> "+ i % 5)
//    }

}


function analogic() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    horasGraus = horas * 30 + minutos * (360 / 720);
    minutosGraus = minutos * 6 + segundos * (360 / 3600),
    segundoGraus = segundos * 6;

    hora = document.querySelector(".ponteiro-horas");
    minuto = document.querySelector(".ponteiro-minutos");
    segundo = document.querySelector(".ponteiro-segundos");

    hora.style.transform = "rotate(" + horasGraus + "deg)";
    minuto.style.transform = "rotate(" + minutosGraus + "deg)";
    segundo.style.transform = "rotate(" + segundoGraus + "deg)";
}

setInterval("analogic()", 100);