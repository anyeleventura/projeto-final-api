CREATE DATABASE db_projeto_final;

USE db_projeto_final;

SELECT  tb_produto.nome, tb_marca.marca, tb_produto.descricao, tb_cupom.cupom, tb_cupom.desconto
FROM tb_produto
INNER JOIN tb_marca ON tb_marca.id = tb_produto.marcaID
INNER JOIN tb_cupom ON tb_cupom.id = tb_produto.cupomID;