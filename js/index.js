const data = [
  {
    id: 1,
    img: "../img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "../img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "../img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "../img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "../img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "../img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];

let ulCarrinho = document.querySelector(".ulCarrinho")
let remover = document.querySelector(".removerTexto")

function createCards(arr) {

  let divVitrine = document.querySelector(".vitrine")

  for (let i = 0; i < arr.length; i++) {

    let cards = document.createElement("div")
    let imagem = document.createElement("img")
    let nome = document.createElement("h4")
    let descricao = document.createElement("p")
    let valor = document.createElement("p")
    let adicionarCarrinho = document.createElement("button")
    let marcacao = document.createElement("ul")

    cards.className = "divVitrine"
    imagem.className = "imagemVitrine"
    nome.className = "nomeVitrine"
    descricao.className = "descricaoVitrine"
    valor.className = "valorVitrine"
    adicionarCarrinho.className = "adicionarCarrinhoVitrine"
    marcacao.className = "marcacaoVitrine"

    imagem.src = arr[i].img
    imagem.alt = arr[i].nameItem
    nome.innerText = arr[i].nameItem
    descricao.innerText = arr[i].description
    valor.innerHTML = `R$ ${arr[i].value},00`
    adicionarCarrinho.innerHTML = arr[i].addCart

    for (let j = 0; j < arr[i].tag.length; j++) {
      let tag = arr[i].tag[j]

      let liMarcacao = document.createElement("li")
      liMarcacao.innerText = tag
      marcacao.appendChild(liMarcacao)
    }


    adicionarCarrinho.addEventListener("click", function (e) {

      let valorTotal = parseInt(document.querySelector(".valorTotal").innerText.substring(3))

      let data = procurarProduto(arr[i].id)

      let elementoProduto = criarCarrinho(data)

      ulCarrinho.appendChild(elementoProduto)

      let cont = document.querySelector(".contador")
      cont.innerText = ulCarrinho.children.length

      valorTotal += arr[i].value

      let total = document.querySelector(".valorTotal")
      total.innerText = `R$ ${valorTotal},00`

      remover.className = "removerTextoReal"
    })



    cards.append(imagem, marcacao, nome, descricao, valor, adicionarCarrinho)
    divVitrine.append(cards)
  }
}
createCards(data)


function procurarProduto(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return "Produto não encontrado"
}
procurarProduto()

function criarCarrinho(arr) {

  let li = document.createElement("li")
  let img = document.createElement("img")
  let title = document.createElement("h5")
  let p = document.createElement("p")
  let button = document.createElement("button")

  li.className = "liCarrinho"
  img.className = "imgCarrinho"
  title.className = "tittleCarrinho"
  p.className = "pCarrinho"
  button.className = "buttonCarrinho"

  img.src = arr.img
  img.alt = arr.nameItem
  title.innerText = arr.nameItem
  p.innerText = `R$ ${arr.value},00`
  button.innerText = "Remover produto"

  button.addEventListener("click", function (e) {
    let li = document.querySelector(".liCarrinho")
    li.remove()

    let valorTotal = parseInt(document.querySelector(".valorTotal").innerText.substring(3))

    let cont = document.querySelector(".contador")
    cont.innerText = ulCarrinho.children.length

    valorTotal -= arr.value
    
    let total = document.querySelector(".valorTotal")
    total.innerText = `R$ ${valorTotal},00`

    if (ulCarrinho.children.length == 0) {
      remover.className = "removerTexto"
    }
  })

  li.append(img, title, p, button)
  return li
}
criarCarrinho(data)


