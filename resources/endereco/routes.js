const app = require('express').Router();
const database = require('../../connection/database');

const table = 'tb_endereco';
const url = '/enderecos';

app.get(url, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${table}
    `);

    res.send(dados);
});

app.get(`${url}-cliente`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${table} 
        JOIN tb_cliente ON tb_cliente.id = ${table}.cliente_id;
    `);

    res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {
    let jaExiste = await database.execute(`
        SELECT * FROM ${table} 
        WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
    res.sendStatus(404);
    return;
    }

    let dados = await database.execute(`
        SELECT * FROM ${table} 
        WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post(url, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO ${table} 
            (logradouro, numero, cliente_id)
        VALUES 
            ('${corpo.logradouro}', '${corpo.numero}','${corpo.cliente_id}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.patch(`${url}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`
        SELECT * FROM ${table} 
        WHERE id='${req.params.id}'
    `);

    if (undefined === jaExiste[0]) {
        res.sendStatus(404);
        return;
    }

    await database.execute(`
        UPDATE ${table} SET 
            logradouro='${req.body.logradouro || jaExiste[0].logradouro}', 
            numero='${req.body.numero || jaExiste[0].numero}', 
            cliente_id='${req.body.cliente_id || jaExiste[0].cliente_id}'
        WHERE id = '${req.params.id}'
    `);

    dados.id = req.params.id;

    res.send(dados);
});

app.delete(`${url}/:id`, async (req, res) => {
    await database.execute(`
        DELETE FROM ${table} 
        WHERE id='${req.params.id}'
    `);
    
    res.sendStatus(204);
});

module.exports = app;