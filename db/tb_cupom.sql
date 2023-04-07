-- 0 = inativo, 1 = ativo

CREATE TABLE tb_cupom (
    id INT AUTO_INCREMENT PRIMARY KEY,
    referencial VARCHAR(30) NOT NULL,
    desconto INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL
);

ALTER TABLE tb_cupom
ADD COLUMN status INT DEFAULT 1;