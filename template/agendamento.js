const agendamentos = [];

function cadastrarAgendamento() {
  const inputDataInicio = document.querySelector("#dataInicio");
  const inputDataFinal = document.querySelector("#dataFinal");
  const inputCliente = document.querySelector("#cliente");
  const inputQuadra = document.querySelector("#quadra");
  const inputValor = document.querySelector("#valor");
  const inputStatus = document.querySelector("#status");

  const agendamento = {
    dataInicio: inputDataInicio.value,
    dataFinal: inputDataFinal.value,
    cliente: inputCliente.value,
    quadra: inputQuadra.value,
    valor: inputValor.value,
    status: inputStatus.value,
  };

  agendamentos.push(agendamento);

  popularTabela();

  inputDataInicio.value = "";
  inputDataFinal.value = "";
  inputCliente.value = "";
  inputQuadra.value = "";
  inputValor.value = "";
  inputStatus.value = "Pendente";
}

function popularTabela() {
  const tbody = document.querySelector("#tabela_agendamentos tbody");

  let html = "";

  for (const agendamento of agendamentos) {
    html += `
            <tr>
                <td>${agendamento.dataInicio}</td>
                <td>${agendamento.dataFinal}</td>
                <td>${agendamento.cliente}</td>
                <td>${agendamento.quadra}</td>
                <td>R$ ${agendamento.valor}</td>
                <td>${agendamento.status}</td>
            </tr>
        `;
  }

  tbody.innerHTML = html;
}
