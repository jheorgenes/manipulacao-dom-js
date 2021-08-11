
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button'); //adicionando um elemento de botão

    botaoDeleta.innerText = 'deletar'; //Inserindo o texto no botão
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target; //target função aponta o alvo do evento, ou seja, aponta em qual botão a pessoa clicou
    
    const tarefaCompleta = botaoDeleta.parentElement; //Subindo um nível de elemento, ou seja, pegando o pai do botão Deleta (usando a propriedade parentElement)

    tarefaCompleta.remove(); //remove método é utilizado para remover objetos da arvore do DOM. Então tudo que estiver dentro de tarefaCompleta será excluído.

    return botaoDeleta;
}

export default BotaoDeleta