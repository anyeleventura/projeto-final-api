const app = require('express').Router();
const database = require('../../connection/database');

const table = 'tb_tipo_pagamento';
const url = '/tipo-pagamentos';

app.get(url, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${table}`);

    res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

    // se certifica se existe
    let jaExiste = await database.execute(`
    SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
    res.sendStatus(404);
    return;
    }

    res.send(dados[0]);
});

app.post(url, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO ${table} (tipo)
        VALUES ('${corpo.tipo}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch(`${url}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM ${table} WHERE id='${req.params.id}'
    `);

    //testa se existe algum cliente com aquele id
    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${table} SET 
            tipo='${req.body.tipo || jaExiste[0].tipo}' 
        WHERE id = '${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${url}/:id`, async (req, res) => {
    await database.execute(`
        DELETE FROM ${table} WHERE id='${req.params.id}'
    `);
    
    res.sendStatus(204);
});

module.exports = app;