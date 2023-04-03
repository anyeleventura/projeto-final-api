-- CRIAR BANCO --
CREATE DATABASE db_projeto_final;
-- USAR O BANCO --
USE db_projeto_final;

-- CRIAR TABELA CLIENTE --
CREATE TABLE tb_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL, 
    cpf CHAR(11) NOT NULL UNIQUE, -- DOCUMENTACAO: no local de entrada dos dados nao pode ter ponto ou traço, apenas os 11 numeros
    email VARCHAR(100) NOT NULL, 
    celular INT NOT NULL,
    senha VARCHAR(20) NOT NULL
);


