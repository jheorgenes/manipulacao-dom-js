
const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button'); //criando um elemento de botão

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui; //retornando o botão
}

const concluirTarefa = (evento)=> {
    const botaoConclui = evento.target; //target função aponta o alvo do evento, ou seja, aponta em qual botão a pessoa clicou

    const tarefaCompleta = botaoConclui.parentElement; //Subindo um nível de elemento, ou seja, pegando o pai do botão Conclui (usando a propriedade parentElement)

    tarefaCompleta.classList.toggle('done'); //Toggle  função é como um botão de liga e desliga, e a classList done é para riscar (pelo css) a tag li
}

export default BotaoConclui