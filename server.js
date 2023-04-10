const express = require('express');

const colecoesRouter = require('./resources/colecao/routes');
const cuponsRouter = require('./resources/cupom/routes');
const produtosRouter = require('./resources/produto/routes');

const app = express();

app.use(express.json());
app.use(colecoesRouter);
app.use(cuponsRouter);
app.use(produtosRouter);

app.listen(8000, () => {
    console.log('ta on');
});