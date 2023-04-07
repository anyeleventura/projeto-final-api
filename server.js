const express = require('express');

const colecoesdestaqueRouter = require('./controllers/colecoes_destaque/routes');
const cuponsRouter = require('./controllers/cupom/routes');

const app = express();

app.use(express.json());
app.use(colecoesdestaqueRouter);
app.use(cuponsRouter);

app.listen(8000, () => {
    console.log('ta on');
});