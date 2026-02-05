function verLinguagem() {

    linguagem = navigator.language;

    console.log("Linguagem do navegador: " + linguagem);

    return linguagem;
}

function changetoEn(nomeDaClasse) {

    const elementoBr = document.querySelector('.meuTitulo .cl-titulo-ptbr');

    if (elementoBr) {
        elementoBr.remove();
    }


    const elemento = document.querySelector('.meuTitulo .cl-titulo-en');

    if (elemento) {
        console.log("Elemento encontrado!");



    } else {
        console.log("Elemento não encontrado!");

        eTitleEn = document.createElement('h1');

        eTitleEn.id = 'id-titulo';
        eTitleEn.className = 'cl-titulo-en';
        eTitleEn.textContent = 'Welcome to HTML Test';


        document.querySelector('.meuTitulo').appendChild(eTitleEn);

    }

}

function changetoPtBr(nomeDaClasse) {

    const elementoEn = document.querySelector('.meuTitulo .cl-titulo-en');

    if (elementoEn) {
        elementoEn.remove();
    }

    const elemento = document.querySelector('.meuTitulo .cl-titulo-ptbr');

    if (elemento) {
        console.log("Elemento encontrado!");

    } else {
        console.log("Elemento não encontrado!");

        eTitleEn = document.createElement('h1');

        eTitleEn.id = 'id-titulo';
        eTitleEn.className = 'cl-titulo-ptbr';
        eTitleEn.textContent = 'Bem-vindo ao Teste de HTML';


        document.querySelector('.meuTitulo').appendChild(eTitleEn);
    }



}

document.addEventListener("DOMContentLoaded", function () {

    let slinguagem = verLinguagem();

    slinguagem = slinguagem.toLowerCase();

    if (1 == 1) {
        console.log('Entrou no if')
    } else {
        console.log('Nao entrou no if'); 
    }

    console.log('Linguagem detectada: ' + slinguagem);

    if (slinguagem == 'pt-br') {

        console.log('Detectada linguagem pt-br');
        console.log('Linguagem detectada: ' + slinguagem) /

            changetoPtBr();

    } else {
        changetoEn();
        console.log('Não foi detectada linguagem pt-br');
    }

});