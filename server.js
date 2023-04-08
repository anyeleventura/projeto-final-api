const express = require('express');

const colecoesRouter = require('./resources/colecoes/routes');
const cuponsRouter = require('./resources/cupom/routes');

const app = express();

app.use(express.json());
app.use(colecoesRouter);
app.use(cuponsRouter);

app.listen(8000, () => {
    console.log('ta on');
});