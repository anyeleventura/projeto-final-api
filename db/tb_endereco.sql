CREATE TABLE tb_endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(12) NOT NULL,
    cliente_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id)
);

INSERT INTO tb_endereco
    (logradouro, numero, cliente_id)
VALUES
    ('Rosana Marques', 'Rua das praias', '198 apto 2', 1);

