const inputItem = document.getElementById("input_item");
const botao = document.getElementById("adicionar_Button");
const listaDeFilmes = document.getElementById("lista_de_filmes");

function adicionarFilme() {

    const filme = inputItem.value;
    const li = document.createElement("li");
     li.textContent = filme;
      listaDeFilmes.appendChild(li);
       inputItem.value = "";
}
botao.addEventListener("click", adicionarFilme);


