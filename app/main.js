let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

const elementoParaInserirLivros = document.getElementById('livros')

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}">
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

//função para aplicar desconto
function aplicarDesconto(livros) {
    // cria a variavel com o percentual de desconto
    const desconto = 0.3
    // pega a variavel livrocomdesconto e faz o map (lembrando que o map cria um novo array)
    livrosComDesconto = livros.map(livro => {

        //...faz uma cópia do objeto livro, pega o preço dele e: faz
        // nesse caso ele pega o objeto no array e subtrai pelo desconto. sendo assim,
        // no novo objeto o livro vai ter outro preço
        // e retorna ele
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    // depois retorna a variavel que chamou, para retornar os valores.
    return livrosComDesconto
}

