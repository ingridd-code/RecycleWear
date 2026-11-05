import db from '../config/database.js';

export const clienteModel = {
  buscarTodos: async () => {
    const [rows] = await db.query('SELECT * FROM clientes');
    return rows;
  },

  buscarPorId: async (id) => {
    const [rows] = await db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id]);
    return rows[0];
  },

  criar: async (cliente) => {
    const { nome, email, telefone, cpf } = cliente;
    const [result] = await db.query(
      'INSERT INTO clientes (nome, email, telefone, cpf) VALUES (?, ?, ?, ?)',
      [nome, email, telefone, cpf]
    );
    return { id: result.insertId, ...cliente };
  }
};

export default clienteModel;