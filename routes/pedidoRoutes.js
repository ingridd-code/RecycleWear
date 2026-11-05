import express from 'express';
import { 
  listarPedidos, 
  obterPedidoPorId, 
  criarPedido 
} from '../controllers/pedidoController.js';

const router = express.Router();

// Rota para listar todos os pedidos (GET /pedidos)
router.get('/', listarPedidos);

// Rota para buscar um pedido por ID (GET /pedidos/:id)
router.get('/:id', obterPedidoPorId);

// Rota para criar um novo pedido (POST /pedidos)
router.post('/', criarPedido);

export default router;