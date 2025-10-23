import { Produto } from "../../database/tables.js"

async function Produtos(){
    const produtos = await Produto.findAll({ raw: true });
    return(
        <div>
            <h1>Lista de Produtos</h1>

            <table border = "1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Preco</th>
                        <th>Descrição</th>
                        <th>Validade</th>
                        <th>Estoque</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        produtos.map(function(pro){
                            return (
                                <tr key={pro.id}>
                                    <td>{pro.id}</td>
                                    <td>{pro.nome}</td>
                                    <td>{pro.tipo}</td>
                                    <td>{pro.preco}</td>
                                    <td>{pro.descricao}</td>
                                    <td>{pro.validade}</td>
                                    <td>{pro.estoque}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Produtos;
