import express from 'express';
import { 
  listarClientes, 
  obterClientePorId, 
  criarCliente 
} from '../controllers/clienteController.js';

const router = express.Router();

// Rota para listar todos os clientes (GET /clientes)
router.get('/', listarClientes);

// Rota para buscar um cliente por ID (GET /clientes/:id)
router.get('/:id', obterClientePorId);

// Rota para criar um novo cliente (POST /clientes)
router.post('/', criarCliente);

export default router;