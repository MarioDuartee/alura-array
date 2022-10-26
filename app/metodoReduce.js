function calcularValorTotalDeLivrosDisponiveis(livros) {
    // no metodo reduce, o primeiro parametro é o acumulado, no segundo parametro é o valor do indice atual, e o terceiro parametro  
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}
