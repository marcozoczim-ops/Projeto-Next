import { ItemCompra } from "../../database/tables.js"
import { redirect } from "next/navigation";


async function deletacompra(formData) {
    'use server';
    const id = formData.get('id');
    const compra = await ItemCompra.findByPk(id);
    await compra.destroy();
    redirect('/compra')
}

async function Compras(){
    const vendas = await ItemCompra.findAll({ raw: true });
    return(
            <div>
        <h1>Lista de Compras</h1>
        <a href="/compra/novo" class="novos">Nova Compra</a>

        <table className="tabela-produtos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Preço Unitario</th>
                    <th>SubTotal</th>
                    <th>Quantidade</th>
                    <th>IDproduto</th>
                    <th>IDfornecedor</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {
                    vendas.map(function(com){
                        return (
                            <tr key={com.id}>
                                <td>{com.id}</td>
                                <td>{com.PrecoUni}</td>
                                <td>{com.SubTot}</td>
                                <td>{com.quantidade}</td>
                                <td>{com.ProdutoId}</td>
                                <td>{com.FornecedorId}</td>
                                <td>
                                    
                                    <div>
                                        <form action={'/compra/altera'} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={com.id}/>
                                            <button type="submit" class="btn-editar">Editar</button>
                                        </form>
                                        <form action={deletacompra} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={com.id}/>
                                            <button type="submit" class="btn-excluir">Excluir</button>
                                        </form>
                                    </div>
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

export default Compras;
