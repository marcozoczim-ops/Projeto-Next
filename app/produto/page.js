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
        <a href="/produto/novo" class="novos">Novo Produto</a>

        <table className="tabela-produtos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Validade</th>
                    <th>Estoque</th>
                    <th>IDcategoria</th>
                    <th>IDfornecedor</th>
                    <th>Ações</th> 
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
                                <td>{pro.CategoriumId}</td>
                                <td>{pro.FornecedorId}</td>
                                <td>
                                    
                                    <div>
                                        <form action={'/produto/altera'} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={pro.id}/>
                                            <button type="submit" class="btn-editar">Editar</button>
                                        </form>
                                        <form action={deletaProduto} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={pro.id}/>
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

export default Produtos;
