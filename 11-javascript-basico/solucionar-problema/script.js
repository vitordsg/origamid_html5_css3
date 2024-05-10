const imagens = document.querySelectorAll("#galeria li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#imagem-principal");
  const imagemClicada = event.currentTarget;
  principal.src = imagemClicada.src;
  principal.alt = imagemClicada.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);
