-- CRIAR BANCO --
CREATE DATABASE db_testes;
-- USAR O BANCO --
USE db_testes;

-- CRIAR TABELA CLIENTE --
CREATE TABLE tb_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL, 
    cpf CHAR(11) NOT NULL UNIQUE, -- DOCUMENTACAO: no local de entrada dos dados nao pode ter ponto ou traço, apenas os 11 numeros
    email VARCHAR(100) NOT NULL, 
    celular VARCHAR(16) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- gerar a data e hora automatico
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


