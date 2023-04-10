const app = require('express').Router();

const database = require('../../connection/database');

const table = 'tb_produto';
const url = '/produtos';

app.get(`${url}`, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${table} WHERE status = 1;`);
    res.send(dados);
});

app.get(`${url}/inativos`, async (req, res) => {
    let dados = await database.execute(`SELECT * FROM ${table} WHERE status = 0;`);
    res.send(dados);
});

app.get(`${url}/:id`, async (req, res) => {
    let dadosId = await database.execute(`SELECT tb_produto.nome, tb_marca.marca, tb_produto.descricao, tb_cupom.cupom, tb_cupom.desconto
    FROM tb_produto
    INNER JOIN tb_marca ON tb_marca.id = tb_produto.marcaID
    INNER JOIN tb_cupom ON tb_cupom.id = tb_produto.cupomID 
    WHERE tb_produto.id=${req.params.id} AND tb_produto.status = 1;`);
    if(undefined === dadosId[0]) {
        res.sendStatus(404);
        return;
    };
    res.send(dadosId[0]);
});

app.post(`${url}`, async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`INSERT INTO ${table}
                                        (nome, imagem, descricao, valor, marcaID, categoriaID, tamanho, cor, qtd, ref)
                                        VALUES
                                        ('${corpo.nome}', 
                                        '${corpo.imagem}', 
                                        '${corpo.descricao}', 
                                        '${corpo.valor}', 
                                        '${corpo.marcaID}', 
                                        '${corpo.categoriaID}', 
                                        '${corpo.tamanho}', 
                                        '${corpo.cor}', 
                                        '${corpo.qtd}', 
                                        '${corpo.ref}')
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
                                nome='${dados.nome || jaExiste[0].nome}',
                                imagem='${dados.imagem || jaExiste[0].imagem}',
                                descricao='${dados.descricao || jaExiste[0].descricao}',
                                valor='${dados.valor || jaExiste[0].valor}',
                                desconto='${dados.desconto || jaExiste[0].desconto}',
                                marcaID='${dados.marcaID || jaExiste[0].marcaID}',
                                categoriaID='${dados.categoriaID || jaExiste[0].categoriaID}',
                                tamanho='${dados.tamanho || jaExiste[0].tamanho}',
                                cor='${dados.cor || jaExiste[0].cor}',
                                qtd='${dados.qtd || jaExiste[0].qtd}',
                                ref='${dados.ref || jaExiste[0].ref}',
                                status='${dados.status || jaExiste[0].status}'
                                WHERE id=${req.params.id};
                            `);
    let atual = await database.execute(`SELECT * FROM ${table} WHERE id=${req.params.id};`);
    
    res.send(atual[0]);
});

app.put(`${url}/cupom/:id`, async (req, res) => {
    await database.execute(`UPDATE ${table} SET
                            cupomID='${req.body.cupomID}'
                            WHERE id='${req.params.id}';
                            `);
    let cupom = await database.execute(`SELECT * FROM ${table}
                                        WHERE id=${req.params.id};
                                        `);
    res.send(cupom[0]);
});

app.put(`${url}/colecao/:id`, async (req, res) => {
    await database.execute(`UPDATE ${table} SET
                            colecaoID='${req.body.colecaoID}'
                            WHERE id='${req.params.id}';
                            `);
    let cupom = await database.execute(`SELECT * FROM ${table}
                                        WHERE id=${req.params.id};
                                        `);
    res.send(cupom[0]);
});

app.put(`${url}/:id`, async (req, res) => {
    await database.execute(`UPDATE ${table} SET status = 0 
                                WHERE id=${req.params.id};
                                `)
    res.sendStatus(204);
});

module.exports = app;