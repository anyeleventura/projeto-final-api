CREATE TABLE tb_marca (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    desconto INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE tb_marca
ADD COLUMN logo VARCHAR(255) NOT NULL;

ALTER TABLE tb_marca
MODIFY COLUMN desconto INT;

ALTER TABLE tb_marca
ADD COLUMN status INT DEFAULT 1;

ALTER TABLE tb_marca
RENAME COLUMN nome to marca;

ALTER TABLE tb_marca
MODIFY COLUMN desconto INT DEFAULT 0;