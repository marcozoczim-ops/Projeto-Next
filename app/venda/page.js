import { Venda } from "../../database/tables.js"
import { redirect } from "next/navigation";


async function deletaVenda(formData) {
    'use server';
    const id = formData.get('id');
    const produto = await Venda.findByPk(id);
    await produto.destroy();
    redirect('/venda')
    
}

async function Vendas(){
    const vendas = await Venda.findAll({ raw: true });
    return(
            <div>
        <h1>Lista de Vendas</h1>
        <a href="/venda/novo" class="novos">Nova Venda</a>

        <table class="tabela-produtos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Valor Total</th>
                    <th>Data da Venda</th>
                    <th>IDcliente</th>
                    <th>IDfuncionario</th>
                    <th>IDpagamento</th>
                </tr>
            </thead>

            <tbody>
                {
                    vendas.map(function(ven){
                        return (
                            <tr key={ven.id}>
                                <td>{ven.id}</td>
                                <td>{ven.ValorTotal}</td>
                                <td>{ven.DataVenda}</td>
                                <td>{ven.ClienteId}</td>
                                <td>{ven.FuncionarioId}</td>
                                <td>{ven.PagamentoId}</td>
                                <td>
                                    
                                    <div>
                                        <form action={'/venda/altera'} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={ven.id}/>
                                            <button type="submit" class="btn-editar">Editar</button>
                                        </form>
                                        <form action={deletaVenda} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={ven.id}/>
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

export default Vendas;
