import express from 'express';
import {
    buscarProdutos,
    buscarProduto,
    criarProduto,
    atualizarProduto,
    deletarProduto
} from '../controllers/produtoController.js';

const router = express.Router();

// Rota para listar todos os produtos
router.get('/', buscarProdutos);

// Rota para buscar um produto por ID
router.get('/:id', buscarProduto);

// Rota para cadastrar um novo produto
router.post('/', criarProduto);

// Rota para atualizar um produto por ID
router.put('/:id', atualizarProduto);

// Rota para deletar um produto por ID
router.delete('/:id', deletarProduto);

export default router;