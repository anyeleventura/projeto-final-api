CREATE TABLE tb_colecoes_destaque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(35) NOT NULL,
    desconto_status INT DEFAULT 1,
    imagem VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL
);

ALTER TABLE tb_colecoes_destaque
DROP COLUMN desconto_status;

ALTER TABLE tb_colecoes_destaque
ADD COLUMN desconto INT;

RENAME TABLE tb_colecoes_destaque TO tb_colecoes;

ALTER TABLE tb_colecoes
ADD COLUMN cupomID INT;

-- ALTER TABLE tb_colecoes
-- ADD CONSTRAINT FK_colecoescupons
-- ADD FOREIGN KEY (`cupomID`) REFERENCES tb_cupons(`id`);