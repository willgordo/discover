function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")
  // classList.toggle tem a mesma função do código acima. é usado para adicionar ou remover um atributo a classe como no Button usado nesse código para a função dark e light mode.

  //pegar a tag alt imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("#profile img")

  // substituir a descrição da imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a descrição da imagem light
    img.setAttribute(
      "alt",
      "foto mayck brito sorrindo de óculos escuro e casaco preto, com fundo azul"
    )
  } else {
    // se tiver sem light mode, manter a descrição da imagem normal
    img.setAttribute(
      "alt",
      "foto mayck brito sorrindo de óculos e casaco preto, com fundo azul"
    )
  }
}
