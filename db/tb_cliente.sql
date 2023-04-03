-- CRIAR TABELA CLIENTE --
CREATE TABLE tb_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL, 
    cpf CHAR (11) NOT NULL UNIQUE, -- DOCUMENTACAO: no local de entrada dos dados nao pode ter ponto ou traço, apenas os 11 numeros
    email VARCHAR(100) NOT NULL, 
    celular INT NOT NULL,
    senha VARCHAR(20) NOT NULL
);

-- INSERINDO DADOS MANUALMENTE --
INSERT INTO tb_cliente
    (nome, cpf, email, celular, senha)
VALUES 
    ('Rosana Marques', 98765478944, 'rosana@gmail.com', 85988889999, '123456');