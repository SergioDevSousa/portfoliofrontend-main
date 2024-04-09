/*
1 - objetivo: quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estãodisponivel no html

passo 1 - pegar o botão mostrar mais no js para poder verificar quando o usuário clicar em cima dele

passo 2 - identificar o clique no tao

passo 3 - adicionar a classe 'ativo' nos projetos escondidos

2 - esconder o botão de mostrar mais

passo 1 - pegar o botao e esconder ele
  */

//1 - objetivo: quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estãodisponivel no html


//passo 1 - pegar o botão mostrar mais no js para poder verificar quando o usuário clicar em cima dele

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
//estrutura função de setas
botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    //objetivo 2
    esconderBotao();
});

function esconderBotao() {
  botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetosInativo => {
    projetosInativo.classList.add('ativo');
  });
}
