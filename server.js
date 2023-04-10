const express = require('express');

const marcaRouter = require('./resources/marca/routes');
const usuarioRouter = require('./resources/usuario/routes');
const bannerRoutes = require('./resources/banner/routes');
const categoriaRoutes = require("./resources/categoria/routes");
const clienteRoutes = require('./resources/cliente/routes');
const enderecoRoutes = require('./resources/endereco/routes');
const tipopagamentoRoutes = require('./resources/tipo-pagamento/routes');
const colecoeRouter = require('./resources/colecao/routes');
const cuponRouter = require('./resources/cupom/routes');
const produtoRouter = require('./resources/produto/routes');

const swagger = require('swagger-ui-express');
const docs = require('./docs.json');

const app = express();

app.use(express.json());

app.use('/documentacao', swagger.serve, swagger.setup(docs));
app.use(marcaRouter);
app.use(usuarioRouter);
app.use(bannerRoutes);
app.use(categoriaRoutes);
app.use(clienteRoutes);
app.use(enderecoRoutes);
app.use(tipopagamentoRoutes);
app.use(colecoeRouter);
app.use(cuponRouter);
app.use(produtoRouter);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
