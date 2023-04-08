const app = require('express').Router();

const database = require('../../connection/database');

const table = 'tb_cupom';
const url = '/cupons';

app.get(`${url}`, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${table};`);
    res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {
    let dadosId = await database.execute(`SELECT * FROM ${table}
                                            WHERE id=${req.params.id};`);
    if(undefined === dadosId[0]) {
        res.sendStatus(404);
        return;
    };
    res.send(dadosId[0]);
});

app.post(`${url}`, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`INSERT INTO ${table}
                                        (referencial, desconto)
                                        VALUES
                                        ('${corpo.referencial}', '${corpo.desconto}')
                                    `);
    let listaId = await database.execute(`SELECT * FROM ${table}
                                            WHERE id=${sql.insertId};
                                        `);
    res.status(201).send(listaId[0]);
});

app.patch(`${url}/:id`, async (req, res) => {
    let dados = req.body;

    let jaExiste = await database.execute(`SELECT * FROM ${table} 
                                            WHERE id=${req.params.id};`);

    if(undefined === jaExiste[0]) {
            res.sendStatus(404);
            return;
    };
    await database.execute(`UPDATE ${table} SET
                                referencial='${dados.referencial || jaExiste[0].referencial}',
                                desconto='${dados.desconto || jaExiste[0].desconto}',
                                status='${dados.status || jaExiste[0].status}'
                                WHERE id=${req.params.id};
                            `);
    let atual = await database.execute(`SELECT * FROM ${table} WHERE id=${req.params.id};`);
    
    res.send(atual[0]);
});

app.put(`${url}/:id`, async (req, res) => {
    await database.execute(`UPDATE ${table} SET status = 0 
                                WHERE id=${req.params.id};`)
    res.sendStatus(204);
});

module.exports = app;