const express = require('express');

const colecoesdestaqueRouter = require('./controllers/colecoes_destaque/colecoes_destaque-router');

const app = express();

app.use(express.json());
app.use(colecoesdestaqueRouter);

app.listen(8000, () => {
    console.log('ta on');
});