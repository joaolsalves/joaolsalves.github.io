/* function fnFocoNoTxtBoxTempoPreparacao() {
  //txtBoxTempoPreparacao.focus();
  idTxtBoxTempoPreparacao.select();
}

function fnFocoNoTxtBoxTempoExercicio() {
  idTxtBoxTempoExercicio.select();
}

function fnFocoNoTxtBoxTempoDescanso() {
  idTxtBoxTempoDescanso.select();
}

function fnFocoNoTxtBoxQtdRepeticoes() {
  idTxtBoxQtdRepeticoes.select();
} */

function fnDefineTabata() {
  //window.open("https://www.google.com", "_blank");
  //window.location.href = "https://www.google.com";
  var elementoDefineTabata = document.getElementById("id-ctn-define-tabata");
  var elementoPrincipal = document.getElementById("id-ctn-principal");

  elementoDefineTabata.style.display = "block";
  elementoPrincipal.style.display = "none";
  elementoPrincipal.style.opacity = 1;
  elementoPrincipal.style.display = "opacity 10s";
}

function fnExibePrincipal() {
  var elementoDefineTabata = document.getElementById("id-ctn-define-tabata");
  var elementoPrincipal = document.getElementById("id-ctn-principal");

  elementoDefineTabata.style.display = "none";
  elementoPrincipal.style.display = "flex";
}

function fnIniciarTimer() {
  //Popular os ids dos containers que serão exibidos/ocultados
  var ctimer = document.getElementById("id-ctn-timer");
  var cPrinc = document.getElementById("id-ctn-principal");

  //Exibe o timer que estava oculto
  ctimer.style.display = "flex";
  ctimer.style.position = "fixed";

  //Oculta a tela inicial
  cPrinc.style.display = "none";

  /*

       Executar preparação

            Mudar o título do contador para o tipo de contador(prep, exercício, descanso)

            Alerta INICIO
            Executar TimerExercicio

            Validar descanso
                Se executar descanso = sim
                    Alerta DESCANSO
                    Executar TimerDescanso
                Se não
                    Alerta FIM DE TREINO

    
    */
}

function fnTempoTotal() {
  //Popular as variáves para exibição e cálculo do tempo total
  const vTempoPreparacao = parseInt(
    document.getElementById("id-lbl-tempo-preparacao").textContent
  );
  
  console.log(vTempoPreparacao);

  const vTempoExercicio = parseInt(
    document.getElementById("id-lbl-tempo-exercicio").textContent);

    console.log(vTempoExercicio);

  const vTempoDescanso = parseInt(
    document.getElementById("id-lbl-tempo-descanso").textContent);
  
    console.log(vTempoDescanso);
  
  const vQtdRepeticoes = parseInt(
    document.getElementById("id-lbl-qtd-repeticoes").textContent);

    console.log(vQtdRepeticoes);

  

  //Para auxiliar na contagem de descanso
  let vAuxDescanso = 0;
  if (vQtdRepeticoes == 1) {
    vAuxDescanso = 0;
  } else {
    vAuxDescanso = vQtdRepeticoes - 1;
  }

  let vTempoEmExercicio = 0;
  let vTempoTotal = 0;

  //Calcular o tempo total do exercício
  vTempoTotal =
    vTempoDescanso * vAuxDescanso +
    vTempoExercicio * vQtdRepeticoes +
    vTempoPreparacao;

  console.log("Preparação: " + vTempoPreparacao);
  console.log("Exercício: " + vTempoExercicio);
  console.log("Descanso:" + vTempoDescanso);
  console.log("Repetições: " + vQtdRepeticoes);
  console.log("Tempo total: " + vTempoTotal);

  //Deu certo a contagem do tempo total
  //Vamos para a distribuição no formato 00:00

  let vHora = 0;
  let vMinuto = 0;
  let vSegundo = 0;

  //Separar minutos das horas
  vHora = Math.trunc(vTempoTotal / 60 / 60);
  console.log("Horas: " + vHora);
  vMinuto = Math.trunc((vTempoTotal % (60 * 60)) / 60);
  console.log("Minutos: " + vMinuto);
  vSegundo = vTempoTotal % 60;
  console.log("Segundos: " + vSegundo);

  let vTempoFormatado = "00:00:00";

  vTempoFormatado =
    vHora.toString().padStart(2, "0") +
    ":" +
    vMinuto.toString().padStart(2, "0") +
    ":" +
    vSegundo.toString().padStart(2, "0");

  console.log(vTempoFormatado);

  let labelTempoTotal = document.getElementById("id-lbl-tempo-total");
  labelTempoTotal.textContent = vTempoFormatado;
}

function fnTimerSair() {
  var ctimer = document.getElementById("id-ctn-timer");
  var cPrinc = document.getElementById("id-ctn-principal");

  ctimer.style.display = "none";

  cPrinc.style.display = "flex";
}


function fnAdicionarTempoPreparacao(vElemento){

  var vTempoPreparacao = document.getElementById(vElemento);

  switch(vElemento){

    case 'id-lbl-qtd-repeticoes':

      if (parseInt(vTempoPreparacao.textContent) < 1000){

        vTempoPreparacao.textContent = parseInt(vTempoPreparacao.textContent) + 1;

        console.log("Acionou o botão +");
        console.log(vTempoPreparacao.textContent);

      }

      break;
    

    default:

      if (parseInt(vTempoPreparacao.textContent) < 1000){

        vTempoPreparacao.textContent = parseInt(vTempoPreparacao.textContent) + 5;

        console.log("Acionou o botão +");
        console.log(vTempoPreparacao.textContent);

      }

  }
  fnTempoTotal();
}

function fnSubtrairTempoPreparacao(vElemento){

  var vTempoPreparacao = document.getElementById(vElemento);

switch(vElemento){

  case 'id-lbl-qtd-repeticoes':

    if (parseInt(vTempoPreparacao.textContent) > 1){

      vTempoPreparacao.textContent = parseInt(vTempoPreparacao.textContent) - 1;
    
      console.log("Acionou o botão -");
      console.log(vTempoPreparacao.textContent);
    
     }
     break;

  default: 
    if (parseInt(vTempoPreparacao.textContent) > 5){

      vTempoPreparacao.textContent = parseInt(vTempoPreparacao.textContent) - 5;

      console.log("Acionou o botão -");
      console.log(vTempoPreparacao.textContent);

    }
  }
  fnTempoTotal();
}