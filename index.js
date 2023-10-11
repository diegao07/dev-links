function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver modo claro, colocar imagem clara
    img.setAttribute('src', './assets/diegolight.jpeg')
  } else {
    // se tiver modo escuro colocar imagem escura
    img.setAttribute('src', './assets/diegomoon.jpeg')
  }
}


