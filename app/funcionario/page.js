import { Funcionario } from "../../database/tables.js"
import { redirect } from "next/navigation";

async function deletaFuncionario(formData) {
    'use server';
    const id = formData.get('id');
    const funcionario = await Funcionario.findByPk(id);
    await funcionario.destroy();
    redirect('/funcionario')
    
}

async function Funcionarios(){
    const funcionarios = await Funcionario.findAll({ raw: true });
    return(
        <div>
            <h1>Lista de Funcionarios</h1>
            <a href="/funcionario/novo" class="novos">Novo Funcionario</a>

            <table className="tabela-produtos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                   
                <tbody>
                    {
                        funcionarios.map(function(fun){
                            return (
                                <tr key={fun.id}>
                                    <td>{fun.id}</td>
                                    <td>{fun.nome}</td>
                                    <td>{fun.cargo}</td>
                                    <td>{fun.salario}</td>     
                                    <td>
                                    <div>
                                        <form action={'/funcionario/altera'} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={fun.id}/>
                                            <button type="submit" class="btn-editar">Editar</button>
                                        </form>
                                        <form action={deletaFuncionario} class="form-acoes">
                                            <input type="hidden" name="id" defaultValue={fun.id}/>
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

export default Funcionarios;
