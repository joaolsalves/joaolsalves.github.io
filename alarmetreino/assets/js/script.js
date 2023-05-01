function fnFocoNoTxtBoxTempoPreparacao() {
    //txtBoxTempoPreparacao.focus();
    txtBoxTempoPreparacao.select();
}

function fnFocoNoTxtBoxTempoExercicio() {
    txtBoxTempoExercicio.select();
}

function fnFocoNoTxtBoxTempoDescanso() {
    txtBoxTempoDescanso.select();
}

function fnFocoNoTxtBoxQtdRepeticoes() {
    txtBoxQtdRepeticoes.select();
}

function fnDefineTabata(){
    //window.open("https://www.google.com", "_blank");
    //window.location.href = "https://www.google.com";
    var elementoDefineTabata = document.getElementById("id-ctn-define-tabata");
    var elementoPrincipal = document.getElementById("id-ctn-principal");

    elementoDefineTabata.style.display = "block";
    elementoPrincipal.style.display = "none";
    elementoPrincipal.style.opacity = 1;
    elementoPrincipal.style.display = "opacity 10s";

}

function fnExibePrincipal(){
    var elementoDefineTabata = document.getElementById("id-ctn-define-tabata");
    var elementoPrincipal = document.getElementById("id-ctn-principal");

    elementoDefineTabata.style.display = "none";
    elementoPrincipal.style.display = "flex";
}

function fnIniciarTimer(){
   var ctimer = document.getElementById("id-ctn-timer");
   var cPrinc = document.getElementById("id-ctn-principal");

    ctimer.style.display = "flex";
    ctimer.style.position = "fixed";
        
    cPrinc.style.display = "none";
    
}