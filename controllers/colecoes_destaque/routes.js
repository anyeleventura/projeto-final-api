const app = require('express').Router();

const database = require('../../connection/database');

const table = 'tb_colecoes_destaque';
const url = '/colecoesdestaque';

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
                                        (titulo, imagem, desconto)
                                    VALUES
                                        ('${corpo.titulo}', '${corpo.imagem}', '${corpo.desconto}')`)
    let listaId = await database.execute(`SELECT * FROM ${table}
                                            WHERE id=${sql.insertId};`);
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
                                titulo='${dados.titulo || jaExiste[0].titulo}',
                                imagem='${dados.imagem || jaExiste[0].imagem}',
                                desconto='${dados.desconto || jaExiste[0].desconto}',
                                updated_at='${dados.updated_at}'
                            WHERE id=${req.params.id};
                            `);
    let atual = await database.execute(`SELECT * FROM ${table} 
                                            WHERE id=${req.params.id};`);

    res.send(atual[0]);
});

app.delete(`${url}/:id`, async (req, res) => {
    await database.execute(`DELETE FROM ${table} 
                            WHERE id=${req.params.id};`)
    res.sendStatus(204);
});

module.exports = app;