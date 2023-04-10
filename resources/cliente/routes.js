const app = require('express').Router();
const database = require('../../connection/database');

const table = 'tb_cliente';
const url = '/clientes';

app.get(url, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${table}
    `);

    res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM ${table} 
        WHERE id='${req.params.id}'
    `);

    // se certifica se existe
    let jaExiste = await database.execute(`
        SELECT * FROM ${table} 
        WHERE id='${req.params.id}'
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
        INSERT INTO ${table} 
            (nome, cpf, email, celular, senha)
        VALUES 
            ('${corpo.nome}', '${corpo.cpf}','${corpo.email}', '${corpo.celular}', '${corpo.senha}')
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
            nome='${req.body.nome || jaExiste[0].nome}', 
            cpf='${req.body.cpf || jaExiste[0].cpf}', 
            email='${req.body.email || jaExiste[0].email}', 
            celular='${req.body.celular || jaExiste[0].celular}', 
            senha='${req.body.senha || jaExiste[0].senha}' 
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