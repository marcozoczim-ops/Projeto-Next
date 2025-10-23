// Chama o SEQUELIZE 
import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

// CONECTA COM O BANCO
const mysql = new Sequelize({
    dialect: 'mysql', 
    dialectModule: mysql2,
    host: 'localhost',
    port: '3306',
    database: 'farma_teste',
    username: 'root',
    password: 'root'
});

export default mysql; 