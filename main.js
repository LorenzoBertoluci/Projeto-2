function adicionarLinha(nome, telefone) {
    var tabela = document.getElementById('tabelaContatos');
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);


	for (var i = 1; i < tabela.rows.length; i++) {
        if (tabela.rows[i].cells[1].innerHTML === telefone) {
            alert('Este número de telefone já existe na agenda.');
            return;
        }
    }

    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;
}


function validarNome(nome) {
    return nome.trim().split(' ').length >= 2;
}

function validarTelefone(telefone) {
    var telefoneRegex = /^[0-9]{10}$/;
    return telefone.match(telefoneRegex);
}

document.getElementById('formularioContato').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (validarNome(nome) && validarTelefone(telefone)) {
        adicionarLinha(nome, telefone);

        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        if (!validarNome(nome)) {
            alert('Por favor, insira um nome completo.');
        }
        if (!validarTelefone(telefone)) {
            alert('Por favor, insira um número de telefone válido (apenas números, 10 dígitos).');
        }
    }
});
