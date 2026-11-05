// Importa o model do cliente (ajusta o caminho se necessário)
import clienteModel from '../models/clienteModel.js';

// Listar todos os clientes
export const listarClientes = async (req, res) => {
  try {
    // Exemplo: const clientes = await clienteModel.buscarTodos();
    res.status(200).json({ mensagem: 'Lista de clientes retornada com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar clientes', detalhe: error.message });
  }
};

// Obter um cliente por ID
export const obterClientePorId = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ mensagem: `Cliente ${id} encontrado` });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar cliente', detalhe: error.message });
  }
};

// Criar um novo cliente
export const criarCliente = async (req, res) => {
  try {
    const dadosCliente = req.body;
    res.status(201).json({ mensagem: 'Cliente criado com sucesso', cliente: dadosCliente });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar cliente', detalhe: error.message });
  }
};