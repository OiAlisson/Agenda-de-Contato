let contatos = [];

function adicionarContato() {
let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;

let contato = { nome: nome, telefone: telefone };
contatos.push(contato);

atualizarTabela();

document.getElementById("nome").value = "";
document.getElementById("telefone").value = "";
}

function atualizarTabela() {
let tabela = document.getElementById("tabelaContatos");
tabela.innerHTML = "";

for (let i = 0; i < contatos.length; i++) {
    let contato = contatos[i];
    
    let linha = tabela.insertRow();
    let celulaNome = linha.insertCell(0);
    let celulaTelefone = linha.insertCell(1);
    
    celulaNome.innerHTML = contato.nome;
    celulaTelefone.innerHTML = contato.telefone;
}
}