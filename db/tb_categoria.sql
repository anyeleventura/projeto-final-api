CREATE TABLE tb_categoria (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(30) NOT NULL,
    descricao VARCHAR(255),
    categoria_status INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO tb_categoria 
    (titulo, descricao) 
VALUES
    ('Camisetas', 'Camisetas de varios estilos');

INSERT INTO tb_categoria 
    (titulo, descricao) 
VALUES
    ('Calcas', 'Calcas de varios estilos');