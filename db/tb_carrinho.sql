---- Criando a tabela Carrinho ----
CREATE TABLE tb_carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (50) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    valor INT,
    produtoID INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (produtoID) REFERENCES tb_produto(id)
);

---- Alterando a tabela ----
ALTER TABLE tb_carrinho ADD COLUMN tipos_pagamento VARCHAR(50);

---- Adicionando valores manualmente a tabela ----
INSERT INTO tb_carrinho 
    (nome, imagem, valor, tipos_pagamento)
VALUES
    ('Tênis Nike Revolution 6 Next Nature Masculino', 'exemplo-img', '219.00');

INSERT INTO tb_carrinho 
    (nome, imagem, valor, tipos_pagamento)
VALUES
    ('Tênis Nike Air Force 1 Feminino', 'exemplo-img', '199.00');

---- Exibindo o conteúdo da tabela selecionada ----
SELECT * FROM tb_carrinho;

