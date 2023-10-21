const fs = require('fs');

//Validar se uma pasta existe
if(fs.existsSync('./public')){
    console.log('A pasta existe!');
} else{
    console.log('A pasta não existe!');
}

//Criar uma pasta

const nomeDoDiretorio = 'meuDiretorio';

try {
    // Cria o diretório sincronamente
    fs.mkdirSync(nomeDoDiretorio);
    console.log(`Diretório '${nomeDoDiretorio}' criado com sucesso.`);
} catch (err) {
    // Se houver um erro, exibe a mensagem de erro
    console.error(`Erro ao criar o diretório: ${err.message}`);
}


//Renomear uma pasta
const nomeDoDiretorioAntigo = 'meuDiretorio';
const nomeDoDiretorioNovo = 'meuDiretorioRenomeado';

try {
    //Valido se existe diretório com o nome novo
    if(!fs.existsSync(nomeDoDiretorioNovo)){
        // Renomeia o diretório sincronamente
        fs.renameSync(nomeDoDiretorioAntigo, nomeDoDiretorioNovo);
        console.log(`Diretório '${nomeDoDiretorioAntigo}' renomeado para '${nomeDoDiretorioNovo}' com sucesso.`);
    }else{
        console.error(`Já existe um diretório com o nome novo!`);
    }
    
} catch (err) {
    // Se houver um erro, exibe a mensagem de erro
    console.error('Erro inesperado!');
}



//Excluir uma pasta

const nomeDoDiretorio1 = 'meuDiretorio';

//Verifico se o diretório existe
if(!fs.existsSync(nomeDoDiretorio1)){
    fs.rm(nomeDoDiretorio1, { recursive: true }, (err) => {
        if (err) {
            // Se houver um erro, exibe a mensagem de erro
            //console.error(`Erro ao excluir o diretório: ${err.message}`);
            console.error(`Erro ao excluir o diretório:`)
        } else {
            console.log(`Diretório '${nomeDoDiretorio1}' excluído com sucesso.`);
        }
    });
}else{
    console.log("Não foi possível encontrar o diretório a ser excluído!");
}
