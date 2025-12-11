import { Fornecedor } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletaFornecedor(formData) {
    'use server';
    const id = formData.get('id');
    const fornecedor = await Fornecedor.findByPk(id);
    await fornecedor.destroy();
    redirect('/fornecedor')
    
}

async function Fornecedores (){
    const fornecedores = await Fornecedor.findAll({ raw: true });
    return(
        <div>
            <h1>Lista de Fornecedores</h1>
            <a href="/fornecedor/novo" class="novos">Novo Fornecedor</a>

            <table className="tabela-produtos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        fornecedores.map(function(forn){
                            return (
                                <tr key={forn.id}>
                                    <td>{forn.id}</td>
                                    <td>{forn.nome}</td>
                                    <td>{forn.cnpj}</td>
                                    <td>{forn.telefone}</td>

                                    <td>
                                        <form action={'/fornecedor/altera'} class="form-acoes">
                                                <input type="hidden" name="id" defaultValue={forn.id}/>
                                                <button type="submit" class="btn-editar">Editar</button>
                                            </form>
                                            <form action={deletaFornecedor} class="form-acoes">
                                                <input type="hidden" name="id" defaultValue={forn.id}/>
                                                <button type="submit" class="btn-excluir">Excluir</button>
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

export default Fornecedores;