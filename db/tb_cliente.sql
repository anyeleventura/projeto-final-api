-- CRIAR TABELA CLIENTE --
CREATE TABLE tb_cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL, 
    cpf CHAR(11) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL, 
    celular VARCHAR(16) NOT NULL,
    senha VARCHAR(20) NOT NULL,
    created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP, 
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tb_cliente
    (nome, cpf, email, celular, senha)
VALUES
    ('Rosana Marques', '12312312312', 'rosana@gmail.com', '85988889999', '1234');