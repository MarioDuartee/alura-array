const botoes = document.querySelectorAll('.btn')
// para cada item dos botoes, faça a funçao filtrar livros
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))
console.log(botoes.value)


// na função filtrar livros
function filtrarLivros(botoes) {
    // elementoBtn pega o ID do botão clicado
    const elementoBtn = document.getElementById(this.id)
    // categoria pega o value do elementoBtn
    const categoria = elementoBtn.value
    // se o value da categoria for disponivel faz um filtro de livros que tenha acima de 0 quantidade, se não, faça um filtro com os livros dda categoria que temos.
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    // exibir os livros da variavel livrosFiltrados
    exibirOsLivrosNaTela(livrosFiltrados)

    //faz a condicional para calcular metodoReduce e preencher o html
    if (categoria == 'disponivel') {
        // valorTotal somemente se a categoria for disponivel, calcule os valores
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        // e mostre na tela o html dessa função usando o valor obtido na função valorTotal
        exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal)
    }
}

// aqui retorna o value da const categoria, cada value tem um nome, front-end, dados, back-end
// a variavel livrosFiltrados tem q ser igual a categoria
// la em cima vai se ler, exibirOslivrosNatela(front-end) por exemplo
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}
// aqui faz o teste se o livro esta disponivel ou não, se a quantidade for maior que 0, filtrar e mostrar, por si so ele ja descatam os que estão zerados ou negativos
// la em cima vai se ler, exibirOslivrosNatela(livros com quantidade maior que 0) por exemplo
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

// função para mostrar no html com template string
function exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}