//“IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.
import BotaoConclui from '../../componentes/concluiTarefa.js';
import BotaoDeleta from '../../componentes/deletaTarefa.js';

const criarTarefa = (evento) => {
            evento.preventDefault();
        
            const lista = document.querySelector('[data-list]'); //buscando data atributtes data-list do html
            const input = document.querySelector('[data-form-input]'); //buscando data atributtes data-form-input do html
            const valor = input.value; 
        
            const tarefa = document.createElement('li'); //Criando um elemento li
            tarefa.classList.add('task'); //Adicionando ao li, uma classe chamada task
            const conteudo = `<p class="content">${valor}</p>`; //Incluíndo uma string literals com o valor recebido do input, na cost conteudo
        
            tarefa.innerHTML = conteudo; //Inserindo na tarefa (ou seja, na li) o html que está dentro da const conteudo
        
            tarefa.appendChild(BotaoConclui()); //Adicionando o botão de concluir como elemento filho
            tarefa.appendChild(BotaoDeleta()) //Adicionando o botão de Deletar como elemento filho
            lista.appendChild(tarefa); //Na lista (ou seja, na ul) será adicionado um filho que será a tag li com a classe adicionada e o html que está dentro da li
            input.value = " " //Limpando o valor do input
        }

        const novaTarefa = document.querySelector('[data-form-button]'); //buscando data atributtes data-form-button do html

        novaTarefa.addEventListener('click', criarTarefa); //Escutando um evento de click, executa a função criarTarefa
