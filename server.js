// server.js
import app from './app.js';
import db from './config/database.js';

const PORTA = 3000;

async function iniciarServidor() {
  try {
    await db.query('SELECT 1');
    console.log(' Conexão com o MariaDB (recyclewear) realizada com sucesso!');

    app.listen(PORTA, () => {
      console.log(` Servidor rodando na porta ${PORTA}`);
    });
  } catch (error) {
    console.error(' Erro ao conectar com o banco de dados:', error.message);
  }
}

iniciarServidor();