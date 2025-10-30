import { Produto } from "../../database/tables.js"
import { redirect } from "next/navigation";


async function deletaProduto(formData) {
    'use server';
    const id = formData.get('id');
    const produto = await Produto.findByPk(id);
    await produto.destroy();
    redirect('/produto')
    
}

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
                                    <td>
                                        <form action={deletaProduto}>
                                            <input type="hidden" name="id" defaultValue={pro.id}/>
                                            <button>Excluir</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action={'/produto/altera'}>
                                            <input type="hidden" name="id" defaultValue={pro.id}/>
                                            <button>Editar</button>
                                        </form>
                                    </td>
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
