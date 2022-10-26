
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

