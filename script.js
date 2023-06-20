function toggleMode() {
  const html = document.documentElement
  // adcionando o click no switch
  if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  // realizando a troca de imagem quando troca o tema 
  const img = document.querySelector("#profile img")

  if(html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "João no carro com cara de sério")
  } else {
    img.setAttribute("src", "assets/avatar-dark.png")
    img.setAttribute("alt", "Foto de perfil de João Miguez no espelho")
  }
}