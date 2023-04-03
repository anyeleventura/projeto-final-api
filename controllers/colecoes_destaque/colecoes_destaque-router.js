const app = require('express').Router();

const database = require('../../connection/database');

const table = 'tb_colecoes_destaque';

app.get('/colecoesdestaque', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${table};`);
    res.send(dados);
});

app.get('/colecoesdestaque/:id', async (req, res) => {
    let dadosId = await database.execute(`SELECT * FROM ${table}
                                        WHERE id=${req.params.id};`);
    res.send(dadosId[0]);
});

app.post('/colecoesdestaque', async (req, res) => {
    let corpo = req.body;
    let sql = await database.execute(`INSERT INTO ${table}
                                        (titulo, imagem, desconto)
                                        VALUES
                                        ('${corpo.titulo}', '${corpo.imagem}', '${corpo.desconto}')`)
    let listaId = await database.execute(`SELECT * FROM ${table}
                                            WHERE id=${sql.insertId};`);
    res.status(201).send(listaId[0]);
});

app.put('/colecoesdestaque/:id', async (req, res) => {
    res.send('ta funfando');
});

app.delete('/colecoesdestaque/:id', async (req, res) => {
    res.send('ta funfando');
});

module.exports = app;