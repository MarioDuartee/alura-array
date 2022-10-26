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
    // se o value da categoria for disponivel faã um filtro de livros que tenha acima de 0 quantidade, se não, faça um filtro com os livros dda categoria que temos.
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    // exibir os livros da variavel livrosFiltrados
    exibirOsLivrosNaTela(livrosFiltrados)

    //faz a condicional para calcular metodoReduce e preencher o html
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal)
    }
}

// aqui faz o teste para mostrar se livro esta disponivel
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}
// aqui faz o teste se o livro esta disponivel ou não, se tiver disponivel, filtrar e mostrar
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

// função para mostrar no html com template string
function exibirValorTotalDeLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}