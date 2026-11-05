import conexao from '../config/database.js';

// Model para listar todos os produtos
export async function listarProdutos() {
    const sql = 'SELECT * FROM produto';

    const [resultado] = await conexao.query(sql);

    return resultado;
}

// Model para buscar um produto por ID
export async function buscarProdutoPorId(id) {
    const sql = 'SELECT * FROM produto WHERE id_produto = ?';

    const [resultado] = await conexao.query(sql, [id]);

    return resultado[0];
}

// Model para cadastrar um novo produto
export async function cadastrarProduto(produto) {
    const sql = `
        INSERT INTO produto
        (nome, descricao, tamanho, cor, preco, quantidade_estoque)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [resultado] = await conexao.query(sql, [
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.cor,
        produto.preco,
        produto.quantidade_estoque
    ]);

    return resultado.insertId;
}

// Model para atualizar um produto existente
export async function alterarProduto(id, produto) {
    const sql = `
        UPDATE produto
        SET nome = ?, descricao = ?, tamanho = ?, cor = ?, preco = ?, quantidade_estoque = ?
        WHERE id_produto = ?
    `;

    const [resultado] = await conexao.query(sql, [
        produto.nome,
        produto.descricao,
        produto.tamanho,
        produto.cor,
        produto.preco,
        produto.quantidade_estoque,
        id
    ]);

    return resultado;
}

// Model para remover um produto por ID
export async function removerProduto(id) {
    const sql = 'DELETE FROM produto WHERE id_produto = ?';

    const [resultado] = await conexao.query(sql, [id]);

    return resultado;
}