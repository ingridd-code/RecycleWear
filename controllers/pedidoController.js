// Importa o model do pedido (ajusta o caminho se necessário)
import pedidoModel from '../models/pedidoModel.js';

// Listar todos os pedidos
export const listarPedidos = async (req, res) => {
  try {
    res.status(200).json({ mensagem: 'Lista de pedidos retornada com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar pedidos', detalhe: error.message });
  }
};

// Obter um pedido por ID
export const obterPedidoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ mensagem: `Pedido ${id} encontrado` });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar pedido', detalhe: error.message });
  }
};

// Criar um novo pedido
export const criarPedido = async (req, res) => {
  try {
    const dadosPedido = req.body;
    res.status(201).json({ mensagem: 'Pedido criado com sucesso', pedido: dadosPedido });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar pedido', detalhe: error.message });
  }
};