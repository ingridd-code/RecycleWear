import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';

// 1. Inicializar a aplicação Express
const app = express();

// 2. Middlewares globais (para aceitar JSON e servir ficheiros estáticos)
app.use(express.json());
app.use(express.static('public'));

// 3. Registar todas as rotas da API
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/produtos', produtoRoutes);

// 4. Exportar a instância do app para ser usada no server.js
export default app;