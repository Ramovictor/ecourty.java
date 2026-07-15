// quadra.js

const quadras = [];

function cadastrarQuadra() {
  const inputNome = document.querySelector("#nome");
  const inputTipo = document.querySelector("#tipo");
  const inputValorHora = document.querySelector("#valorHora");

  const quadra = {
    nome: inputNome.value,
    tipo: inputTipo.value,
    valorHora: inputValorHora.value,
  };

  quadras.push(quadra);

  popularTabela();

  inputNome.value = "";
  inputTipo.selectedIndex = 0;
  inputValorHora.value = "";
}

function popularTabela() {
  const tbody = document.querySelector("#tabela_quadras tbody");

  let html = "";

  for (const quadra of quadras) {
    html += `
            <tr>
                <td>${quadra.nome}</td>
                <td>${quadra.tipo}</td>
                <td>R$ ${quadra.valorHora}</td>
            </tr>
        `;
  }

  tbody.innerHTML = html;
}
