// 1) Pega o botão da página, usando o id que está no HTML
const botao = document.getElementById("botao-tema");   // LACUNA 1: id do botão
 
// 2) Diz o que fazer QUANDO o botão for clicado
botao.addEventListener("click", function () {     // LACUNA 2: evento de clique
 
  // 3) Liga/desliga a classe escuro no body
  document.body.classList.toggle("escuro");        // LACUNA 3: liga/desliga
 
  // 4) Troca o texto do botão
  if (document.body.classList.contains("escuro")) {
    // ERRO PROPOSITAL: o texto não muda. Compare com o else logo abaixo.
    botao.textcontent = "Tema claro";
  } else {
    botao.textContent = "Tema escuro";
  }
 
  // 5) Escreve um aviso no console (aperte F12 para ver)
  console.log("Tema mudou!");
});

