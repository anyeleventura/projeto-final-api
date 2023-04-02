-- 0 = inativo, 1 = ativo

CREATE TABLE tb_colecoes_destaque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(35) NOT NULL,
    desconto_status INT DEFAULT 1,
    imagem VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL
);