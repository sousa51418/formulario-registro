document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos do formulário
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var telefone = document.getElementById('telefone').value;

    // Exibir os valores obtidos (você pode enviar esses valores para o backend)
    console.log('Nome Completo:', nomeCompleto);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Telefone:', telefone);

    // Limpar os campos do formulário após o envio
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('telefone').value = '';

    // Aqui você pode enviar os dados para o backend, armazená-los em um banco de dados, etc.
});
