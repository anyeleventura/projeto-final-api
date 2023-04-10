const express = require('express');

const marcasRouter = require('./resources/marca/routes');
const usuariosRouter = require('./resources/usuario/routes');

const app = express();

app.use(express.json());
app.use(marcasRouter);
app.use(usuariosRouter);

app.listen(8000, () => {
    console.log('ta on');
});