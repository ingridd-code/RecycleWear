async function carregarProdutos() {
    const resposta = await fetch('/produtos');

    const produtos = await resposta.json();

    const lista = document.getElementById('lista-produtos');

    lista.innerHTML = '';

    produtos.forEach(produto => {
        lista.innerHTML += `
            <div class="card-produto">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao || ''}</p>
                <p>Tamanho: ${produto.tamanho || 'Único'}</p>
                <strong>R$ ${Number(produto.preco).toFixed(2)}</strong>
                <p>Estoque: ${produto.quantidade_estoque}</p>
            </div>
        `;
    });
}

carregarProdutos();