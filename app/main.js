//se cria uma variavel vazia tipo array
let livros = []
// cria uuma variavel chamada endpoint, onde vai guardar a url
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

// função assincrona, no qual ela vai esperar algo, promeças (promises)
// se não tive nada, executa nada, se tiver, faça!
async function getBuscarLivrosDaAPI() {
    // aqui em quase todas os casos fetch, se usa assim!
    // espera um resposta da url, status OK, url ok, codigo 200(codigo ok)
    const res = await fetch(endPointDaApi)
    // estando tudo ok, guarda na variavel livros o objeto daaquela url, .json
    livros = await res.json()
    // aqui a variavel livro... recebe a função aplicarDesconto como parametro ele usa o arquivo json
    let livrosComDesconto = aplicarDesconto(livros)
    //aqui a função de exibir... recebe como parametro a variavel livros com desconto, pois na variavel existe os preços atualizados com desconto para mostrar na tela, e dentro da função existe outras funçoes
    exibirOsLivrosNaTela(livrosComDesconto)
}

