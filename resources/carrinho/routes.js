const app = require('express').Router();

const database = require('../../connection/database');

const tabela = 'tb_carrinho';
const url = '/carrinhos';

//Lista todos
app.get(`${url}`, async (req, res) => {
    let dados = await database.execute (`
    SELECT * FROM ${tabela}
`);

    res.send(dados);
});

//Lista um (através do id)
app.get(`${url}/:id`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${tabela}
        WHERE id='${req.params.id}'
`);

    //É um dado existente? Se sim, executa
    let jaExiste = await database.execute (`
        SELECT * FROM ${tabela} 
        WHERE id='${req.params.id}'
`);
   //Se não existe retorna uma mensagem de erro
    if (undefined === jaExiste[0]) {
    res.sendStatus(404);
    return;
    }

    res.send(dados[0]);
});

//Cria um novo
app.post(url, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute (`
        INSERT INTO ${tabela} (nome, imagem, valor, tipos_pagamento)
        VALUES ('${corpo.nome}', '${corpo.imagem}', '${corpo.valor}', '${corpo.tipos_pagamento}')
`);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

//Edita (por meio do ID)
app.patch(`${url}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute (`
        SELECT * FROM ${tabela}
        WHERE id='${req.params.id}'
    `);

    //É um dado existente? Se sim, executa
    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${tabela} SET 
            nome='${req.body.nome || jaExiste[0].nome}',
            imagem='${req.body.imagem || jaExiste[0].imagem}',
            valor='${req.body.valor || jaExiste[0].valor}',
            tipos_pagamento='${req.body.tipos_pagamento || jaExiste[0].tipos_pagamento}'
        WHERE id = '${req.params.id}'
`);

    dados.id = req.params.id;

    res.send(dados);
});

//Exclui
app.delete(`${url}/:id`, async (req, res) => {
    await database.execute (`
        DELETE FROM ${tabela} 
        WHERE id='${req.params.id}'
`);
    
    res.sendStatus(204);
});

module.exports = app;