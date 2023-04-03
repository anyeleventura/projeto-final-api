const app = require('express').Router();
const database = require('../../connection/database');

app.get('/clientes', async (req, res) => {
    let dados = await database.execute(`SELECT * FROM tb_cliente`);

    res.send(dados);
});

app.get('/clientes/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_cliente WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/clientes', async (req, res) => {
    let corpo = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_cliente (nome, cpf, email, celular, senha)
        VALUES ('${corpo.nome}', '${corpo.cpf}','${corpo.email}', ${corpo.celular}, '${corpo.senha}')
    `);

    corpo.id = sql.insertId;
    
    res.send(corpo);
});

app.put('/clientes/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_cliente SET nome='${dados.nome}', cpf='${dados.cpf}', email='${dados.email}', celular='${dados.celular}', senha='${dados.senha}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});

app.delete("/clientes/:id", async (req, res) => {
    await database.execute(`
        DELETE FROM tb_cliente WHERE id='${req.params.id}'
    `);
    
    res.sendStatus(204);
});


module.exports = app;