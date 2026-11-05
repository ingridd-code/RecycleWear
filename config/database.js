import mysql from 'mysql2/promise';

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'root',
    database: 'recyclewear',
});

export default conexao;