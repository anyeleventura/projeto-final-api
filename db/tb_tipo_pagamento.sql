-- TABELA tb_tipo_pagamento --
CREATE TABLE tb_tipo_pagamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(10) NOT NULL
);

INSERT INTO tb_tipo_pagamento
    (tipo)
VALUES 
    ('Cartao');

INSERT INTO tb_tipo_pagamento
    (tipo)
VALUES 
    ('Boleto');