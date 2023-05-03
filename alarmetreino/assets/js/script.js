function fnFocoNoTxtBoxTempoPreparacao() {
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
}

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

  //Popular as variáves para exibição e cálculo do tempo total
  const vTempoPreparacao = parseInt(document.getElementById("idTxtBoxTempoPreparacao").value);
  const vTempoExercicio = parseInt(document.getElementById("idTxtBoxTempoExercicio").value);
  const vTempoDescanso = parseInt(document.getElementById("idTxtBoxTempoDescanso").value);
  const vQtdRepeticoes = parseInt(document.getElementById("idTxtBoxQtdRepeticoes").value);

  let meuH1 = document.getElementById("teste");
  meuH1.textContent = vTempoPreparacao;


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
  vTempoTotal = ( 
    (vTempoDescanso * vAuxDescanso) +
    (vTempoExercicio * vQtdRepeticoes) +
    (vTempoPreparacao));

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
    vMinuto = Math.trunc((vTempoTotal % (60 * 60)) / 60 ) ;
    console.log("Minutos: " + vMinuto);
    vSegundo = vTempoTotal % 60;
    console.log("Segundos: " + vSegundo);

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

function fnTimerSair() {
  var ctimer = document.getElementById("id-ctn-timer");
  var cPrinc = document.getElementById("id-ctn-principal");

  ctimer.style.display = "none";

  cPrinc.style.display = "flex";
}

function fnPrep() {
  return;
}
