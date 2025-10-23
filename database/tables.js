import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Produto = mysql.define('Produto', {
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    descricao: DataTypes.STRING,
    validade: DataTypes.DATEONLY,
    estoque: DataTypes.INTEGER
});

const Categoria = mysql.define('Categoria', {
    nome: DataTypes.STRING
});

const Cliente = mysql.define('Cliente', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    senha: DataTypes.STRING
});

const Venda = mysql.define('Venda', {
    ValorTotal: DataTypes.DECIMAL,
    DataVenda: DataTypes.DATEONLY
});

const Pagamento = mysql.define('Pagamento', {
    tipo: DataTypes.STRING
});

const Fornecedor = mysql.define('Fornecedor', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    telefone: DataTypes.STRING
});

const Compra = mysql.define('Compra', {
    valor: DataTypes.DECIMAL,
    data: DataTypes.DATEONLY
});

const ItemCompra = mysql.define('ItemCompra', {
    PrecoUni: DataTypes.DECIMAL,
    SubTot: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER
});

const ItemVenda = mysql.define('ItemVenda', {
    SubTot: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER
});

const Funcionario = mysql.define('Funcionario', {
    salario: DataTypes.DECIMAL,
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING
});


// RELACIONAMENTOS

// Venda
Cliente.hasMany(Venda);
Venda.belongsTo(Cliente);

Funcionario.hasMany(Venda);
Venda.belongsTo(Funcionario);

Pagamento.hasMany(Venda);
Venda.belongsTo(Pagamento);

// ItemVenda
Venda.hasMany(ItemVenda);
ItemVenda.belongsTo(Venda);

Produto.hasMany(ItemVenda);
ItemVenda.belongsTo(Produto);

// Produto
Categoria.hasMany(Produto);
Produto.belongsTo(Categoria);

Fornecedor.hasMany(Produto);
Produto.belongsTo(Fornecedor);

// Compra
Fornecedor.hasMany(Compra);
Compra.belongsTo(Fornecedor);

// ItemCompra
Compra.hasMany(ItemCompra);
ItemCompra.belongsTo(Compra);

Produto.hasMany(ItemCompra);
ItemCompra.belongsTo(Produto);

Fornecedor.hasMany(ItemCompra);
ItemCompra.belongsTo(Fornecedor);


// Sincronizar com o banco
mysql.sync();

export {
    Categoria, Cliente, Compra, Fornecedor,
    ItemCompra, ItemVenda, Pagamento,
    Produto, Venda, Funcionario
};
