function cadastrarCliente() {
  const inputNome = document.querySelector("#nome");
  const inputTelefone = document.querySelector("#telefone");
  const inputEmail = document.querySelector("#email");

  const cliente = {
    nome: inputNome.value,
    telefone: inputTelefone.value,
    email: inputEmail.value,
  };

  clientes.push(cliente);

  popularTabela();

  inputNome.value = "";
  inputTelefone.value = "";
  inputEmail.value = "";
}
