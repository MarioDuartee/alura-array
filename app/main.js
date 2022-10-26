//se cria uma variavel vazia tipo array
let livros = []
// cria uuma variavel chamada endpoint, onde vai guardar a url
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

// fazemos uma função assincrona, no qual ela vai esperar algo, promeças (promises)
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

