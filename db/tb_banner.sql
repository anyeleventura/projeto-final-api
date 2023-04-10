CREATE TABLE tb_banner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (50) NOT NULL,
    descricao VARCHAR (255),
    imagem VARCHAR(255) NOT NULL
);

INSERT INTO tb_banner
    (titulo, descricao, imagem)
VALUES
    ('Titulo da imagem', 'Descricao da imagem', 'https://static.lojadointer.com.br/produtos/tenis-adidas-coreracer-masculino/05/NQQ-4635-205/NQQ-4635-205_zoom1.jpg?ts=1665494053');
