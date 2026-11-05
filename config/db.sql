CREATE DATABASE IF NOT EXISTS recyclewear;
USE recyclewear;

-- 1. TABELA CLIENTE
CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(20)
) ENGINE=InnoDB;

-- 2. TABELA FORNECEDOR
CREATE TABLE fornecedor (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contato VARCHAR(100),
    local_coleta VARCHAR(150)
) ENGINE=InnoDB;

-- 3. TABELA MATERIAL
CREATE TABLE material (
    id_material INT AUTO_INCREMENT PRIMARY KEY,
    id_fornecedor INT NOT NULL,
    tipo_plastico VARCHAR(50) NOT NULL,
    quantidade_kg DECIMAL(10,2),
    origem VARCHAR(150),
    data_coleta DATE,
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedor(id_fornecedor)
) ENGINE=InnoDB;

-- 4. TABELA PRODUTO
CREATE TABLE produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    tamanho VARCHAR(10),
    cor VARCHAR(30),
    preco DECIMAL(10,2) NOT NULL,
    quantidade_estoque INT DEFAULT 0
) ENGINE=InnoDB;

-- 5. TABELA PRODUTO_MATERIAL
CREATE TABLE produto_material (
    id_produto INT NOT NULL,
    id_material INT NOT NULL,
    quantidade_utilizada_kg DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_produto, id_material),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto) ON DELETE CASCADE,
    FOREIGN KEY (id_material) REFERENCES material(id_material) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6. TABELA PEDIDO
CREATE TABLE pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    data_pedido DATE NOT NULL DEFAULT (CURRENT_DATE),
    valor_total DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'Pendente',
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
) ENGINE=InnoDB;

-- 7. TABELA ITEM_PEDIDO
CREATE TABLE item_pedido (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido) ON DELETE CASCADE,
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
) ENGINE=InnoDB;

-- INSERÇÃO DE PRODUTOS INICIAIS
INSERT INTO produto (nome, descricao, tamanho, cor, preco, quantidade_estoque) VALUES
('Camiseta Ocean', 'Camiseta feita com plástico reciclado retirado do oceano', 'M', 'Azul', 79.90, 50),
('Jaqueta Recycle', 'Jaqueta produzida com fibras de plástico reciclado', 'G', 'Verde', 199.90, 20),
('Shorts Eco', 'Shorts sustentável feito com material reciclado', 'P', 'Preto', 89.90, 35);

-- CONSULTAS DE VERIFICAÇÃO
SHOW TABLES;
SELECT * FROM produto;