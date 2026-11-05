import db from '../config/database.js';

export const pedidoModel = {
  buscarTodos: async () => {
    const [rows] = await db.query('SELECT * FROM pedidos');
    return rows;
  },

  buscarPorId: async (id) => {
    const [rows] = await db.query('SELECT * FROM pedidos WHERE id_pedido = ?', [id]);
    return rows[0];
  },

  criar: async (pedido) => {
    const { id_cliente, data_pedido, valor_total, status } = pedido;
    const [result] = await db.query(
      'INSERT INTO pedidos (id_cliente, data_pedido, valor_total, status) VALUES (?, ?, ?, ?)',
      [id_cliente, data_pedido, valor_total, status]
    );
    return { id: result.insertId, ...pedido };
  }
};

export default pedidoModel;