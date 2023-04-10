---- Criando a tabela Pedido ----
CREATE TABLE tb_pedido (
  id INT NOT NULL AUTO_INCREMENT,
  num_pedido INT NOT NULL,
  PRIMARY KEY (id)
);

---- Alterando a tabela ----
ALTER TABLE tb_pedido ADD  titulo VARCHAR(50);

ALTER TABLE tb_pedido ADD  imagem VARCHAR(50);

ALTER TABLE tb_pedido ADD  status VARCHAR(50);

---- Adicionando valores manualmente a tabela ----
INSERT INTO tb_pedido 
    (num_pedido, titulo, imagem, status)
VALUES
    ('123456', 'Coturno', 'exemplo-img' '');

---- Exibindo o conteúdo da tabela selecionada ----
SELECT * FROM tb_pedido;