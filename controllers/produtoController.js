import {
    listarProdutos,
    buscarProdutoPorId,
    cadastrarProduto,
    alterarProduto,  // Adicionado para o PUT
    removerProduto   // Adicionado para o DELETE
} from '../models/produtoModel.js';

export async function buscarProdutos(req, res) {
    try {
        const produtos = await listarProdutos();
        res.json(produtos);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao buscar produtos',
            detalhe: erro.message
        });
    }
}

export async function buscarProduto(req, res) {
    try {
        const id = req.params.id;
        const produto = await buscarProdutoPorId(id);

        if (!produto) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });
        }

        res.json(produto);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao buscar produto',
            detalhe: erro.message
        });
    }
}

export async function criarProduto(req, res) {
    try {
        const id = await cadastrarProduto(req.body);

        res.status(201).json({
            mensagem: 'Produto cadastrado com sucesso!',
            id_produto: id
        });
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao cadastrar produto',
            detalhe: erro.message
        });
    }
}

export async function atualizarProduto(req, res) {
    try {
        const id = req.params.id;
        const dadosAtualizados = req.body;

        // 1. Verifica se o produto existe no banco antes de atualizar
        const produtoExiste = await buscarProdutoPorId(id);
        if (!produtoExiste) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });
        }

        // 2. Chama a função do Model para atualizar
        await alterarProduto(id, dadosAtualizados);

        res.json({
            mensagem: 'Produto atualizado com sucesso!',
            id_produto: id
        });
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao atualizar produto',
            detalhe: erro.message
        });
    }
}

export async function deletarProduto(req, res) {
    try {
        const id = req.params.id;

        // 1. Verifica se o produto existe antes de deletar
        const produtoExiste = await buscarProdutoPorId(id);
        if (!produtoExiste) {
            return res.status(404).json({
                mensagem: 'Produto não encontrado'
            });
        }

        // 2. Chama a função do Model para remover
        await removerProduto(id);

        res.json({
            mensagem: 'Produto deletado com sucesso!',
            id_produto: id
        });
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao deletar produto',
            detalhe: erro.message
        });
    }
}