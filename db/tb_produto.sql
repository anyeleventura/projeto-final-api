-- 0 = inativo, 1 = ativo

CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    status INT DEFAULT 1,
    imagem VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    preco INT NOT NULL,
    desconto INT,
    marcaID INT,
    cupomID INT,
    categoriaID INT,
    colecaoID INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (marcaID) REFERENCES tb_marca(id),
    FOREIGN KEY (cupomID) REFERENCES tb_cupom(id),
    FOREIGN KEY (categoriaID) REFERENCES tb_categoria(id),
    FOREIGN KEY (colecaoID) REFERENCES tb_colecao(id)
);

ALTER TABLE tb_produto
ADD COLUMN tamanho VARCHAR(10) NOT NULL;

ALTER TABLE tb_produto
ADD COLUMN cor VARCHAR(20) NOT NULL;

ALTER TABLE tb_produto
ADD COLUMN qtd INT NOT NULL;

ALTER TABLE tb_produto
ADD COLUMN ref VARCHAR(25) NOT NULL;

ALTER TABLE tb_produto
RENAME COLUMN preco to valor;

ALTER TABLE tb_produto
MODIFY COLUMN descricao VARCHAR(255) NOT NULL;

ALTER TABLE tb_produto
MODIFY COLUMN desconto INT DEFAULT 0;
