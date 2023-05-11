let vTempoTotalDecorrido = 1;
let eTempoTotalDecorrido = document.getElementById("lbl-tempo-decorrido");
let eTempoExecucao = document.getElementById("id-valor-tempo-execucao");

function fnStopAllTimer(){
   pararTimer();
}


function iniciarTimer(nContador) {




 return new Promise((resolve) => {

   contador = nContador;

   /* document.getElementById("id-valor-tempo-execucao").textContent = contador; */

   intervalId = setInterval(() => {

         

     if(contador == 1 ){
      //document.getElementById("id-valor-tempo-execucao").textContent = contador;
        
      clearInterval(intervalId); //Para o timer
       
      vTempoTotalDecorrido = vTempoTotalDecorrido + 1;

      eTempoTotalDecorrido.textContent = fnFormataSegundos(vTempoTotalDecorrido);
       
       
      resolve(); //Retorna a Promisse como OK

      return;

     }

     contador--;

     eTempoExecucao.textContent = contador;

     vTempoTotalDecorrido = vTempoTotalDecorrido + 1;

     eTempoTotalDecorrido.textContent = fnFormataSegundos(vTempoTotalDecorrido);
  
   }, 1000);

 }); //Fecha a Promise
}




function pararTimer() {
  
  clearInterval(intervalId);
  ligaBtnPlay();
  desligaBtnStop();

}

function retornarTimer(){

  console.log("Play");
  setInterval(1000);
  //iniciarTimer(1000);
  
  ligaBtnStop();
  desligaBtnPlay();


}

function desligaBtnPlay(){

  let btnStop = document.querySelector('#btn-play');
  btnPlay.disabled = true;

  console.log("Botão Start desligado!");

}

function ligaBtnPlay(){

  let btnStart = document.querySelector('#btn-play');
  btnPlay.disabled = false;

  console.log("Botão Start ligado!");

}

function desligaBtnStop(){

  let btnStop = document.querySelector('#btn-stop');
  btnStop.disabled = true;

  console.log("Botão Stop desligado!");

}

function ligaBtnStop(){

  let btnStop = document.querySelector('#btn-stop');
  btnStop.disabled = false;

  console.log("Botão Stop ligado!");

}