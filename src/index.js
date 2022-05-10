function criptografar() {
  const texto = document.getElementById("texto").value;
  const textoCodificado = codificar(texto);
  document.getElementById("text-codificado").innerHTML = textoCodificado;
  document.getElementById("card-imagem").classList.add("hidden");
  document.getElementById("card-conteudo").classList.remove("hidden");
}

function descriptografar() {
  const texto = document.getElementById("texto").value;
  const textoDecodificado = decodificar(texto);
  document.getElementById("text-codificado").innerHTML = textoDecodificado;
}

function copiar() {
  const textoDecodificado = document.getElementById("text-codificado");
  navigator.clipboard
    .writeText(textoDecodificado.innerHTML);
}

function codificar(frase) {
  const fraseLista = frase.split("");
  const fraseCodificada = fraseLista
    .map((letra) => {
      const opcoes = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
      };
      return opcoes[letra] || letra;
    })
    .join("");

  return fraseCodificada;
}

function decodificar(frase) {
  const fraseDecodificada = frase
    .replace(/\ai/g, "a")
    .replace(/\enter/g, "e")
    .replace(/\imes/g, "i")
    .replace(/\ober/g, "o")
    .replace(/\ufat/g, "u");
  return fraseDecodificada;
}
