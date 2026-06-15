<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$dados = "Nome: $nome\nEmail: $email\nMensagem: $mensagem\n\n";
file_put_contents('contato.txt', $dados, FILE_APPEND);
header('Location: index.html');
exit();
?>
