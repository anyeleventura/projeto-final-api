const express = require('express');

const bannerRoutes = require('./resources/banner/routes');
const categoriaRoutes = require("./resources/categoria/routes");
const clienteRoutes = require('./resources/cliente/routes');
const enderecoRoutes = require('./resources/endereco/routes');
const tipopagamentoRoutes = require('./resources/tipo-pagamento/routes');

const app = express();

app.use(express.json());
app.use(bannerRoutes);
app.use(categoriaRoutes);
app.use(clienteRoutes);
app.use(enderecoRoutes);
app.use(tipopagamentoRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
