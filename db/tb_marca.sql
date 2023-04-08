CREATE TABLE tb_marca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    desconto INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tb_marca
    (nome, desconto)
VALUES 
    ("nike", "20");

    INSERT INTO tb_categoria 
    (nome)
VALUES 
    ("Bonês");