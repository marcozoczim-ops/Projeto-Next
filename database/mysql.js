// Chama o SEQUELIZE 
import { Sequelize } from "sequelize";
import pg from 'pg';

const mysql = new Sequelize({
    dialect: 'postgres', 
    dialectModule: pg,
    host: 'dpg-d4omn8mr433s73cvb570-a',
    port: '5432',
    database: 'database_next',
    username: 'marco_i3a',
    password: 'jauNuS0GQCaGKQGrsii42SmzZUlr6AxT'
});

/*
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
*/
export default mysql; 