
async function fnEscalonaTimer(){

    let cTempoPreparacao = document.getElementById("id-lbl-tempo-preparacao").textContent;
    let cTempoExercicio  = document.getElementById("id-lbl-tempo-exercicio").textContent;
    let cTempoDescanso   = document.getElementById("id-lbl-tempo-descanso").textContent;
    let cQtdRepeticoes   = document.getElementById("id-lbl-qtd-repeticoes").textContent;
    let eTempoExecucao   = document.getElementById("id-valor-tempo-execucao");
    
    let btnStop = document.querySelector('#btn-stop');

    let vVoltaAtual = document.getElementById("id-lbl-volta-atual");

    vTempoTotalDecorrido = 0;
    eTempoTotalDecorrido.textContent = fnFormataSegundos(0);


    /* Mudar o título do contador para o tipo de contador(Preparação) */
    let vTipoTimer = document.getElementById("id-texto-tempo-execucao");

    /* Exibe o timer com base no tempo de preparação */
    let vTempoDecorrido = document.getElementById("id-valor-tempo-execucao");
    vTempoDecorrido.textContent = cTempoPreparacao;

    //Limpar variáveis populadas de outras execuções
    vVoltaAtual.textContent = '01';
    btnStop.disabled = false;

    
    /* Alerta Preparação */
    //const audioPreparacao = new Audio("\assets\\audio\\audio-azul.mp34");
    //audioPreparacao.play();

    
    //Desabilito o botão "Play"
    var btnPlay = document.querySelector('#btn-play');
    btnPlay.disabled = true;

    /* Executar timer da preparação */

    vTipoTimer.textContent = 'Preparação';

    await iniciarTimer(cTempoPreparacao);

    // Alertar o fim da preparação
    //Pendente

    

    //Tratar as voltas

    var vVolta = 0;
    

    for (let i = cQtdRepeticoes; i > 0; i-- ) {

        eTempoExecucao.textContent = cTempoExercicio;

        vVolta = vVolta + 1;

        vVoltaAtual.textContent = vVolta.toString().padStart(2, "0");

        cQtdRepeticoes --;
              
        /* Mudar o título do contador para o tipo de contador(Exercício) */
        vTipoTimer.textContent = 'Exercício';

        // Iniciar o exercício
        await iniciarTimer(cTempoExercicio);

        //Alerta fim do exercício
        //Pendente

        //Iniciar o descanso, se não for a última volta
        if (cQtdRepeticoes > 0){

            eTempoExecucao.textContent = cTempoDescanso;

            /* Mudar o título do contador para o tipo de contador(Exercício) */
            vTipoTimer.textContent = 'Descanso';

            // Iniciar o descanso
            await iniciarTimer(cTempoDescanso);

            //Alerta fim descanso
            //Pendente
        }

    }

    //Mudar o rótulo para fim de treino
    vTipoTimer.textContent = 'Finalizado';

    eTempoExecucao.textContent = 0;
    

}

function fnStartTimer(){
    timerInterval = setInterval(incrementTimer, 1000);
}

