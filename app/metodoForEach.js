const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirOsLivrosNaTela(listaDeLivros) {
  // esvazia a tag em qlqr momento da pagina, só preenche depois de chamada
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''

  //quando for filtrar, ele tira tudo e aparece apenas os itens filtrados
  elementoParaInserirLivros.innerHTML = ''

  //nessa função forEach iremos preencher no html com as informaçoes que possui no .json, um por um, fazendo assim varios itens
  listaDeLivros.forEach(livro => {

    //aqui testamos a disponibilidade e preenchemos a classe da img
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

    // aqui fazemos todo o preenchimento do html a partir do json e outras funcoes
    elementoParaInserirLivros.innerHTML +=
      `<div class="livro">`

        //aqui, feito o teste, preenche, depois preenche com o arquivo json guardado e convertido na variavel livro
        `  <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}">
          "${livro.titulo}"
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
    <div class="tags" >
        <span class="tag">${livro.categoria}</span>
        </div >
      </div > `
  })
}

