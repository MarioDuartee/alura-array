let btnOrdenarPorPreco = document.querySelector("#btnOrdenarPorPreco")
btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco)

// nessa função, é feito a comparação para poder ordenar do menos para o maior, como base se usa a biblioteca UNICODE, ou seja, respeitando maiusculo, minusculo..
function ordernarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    // aqui chama a função exibir... como parametro se usa livrosOrdenados, pois ali foi feito uma modificação
    exibirOsLivrosNaTela(livrosOrdenados)
}