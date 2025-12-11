import { Funcionario } from "../../database/tables.js"

async function Funcionarios(){
    const funcionarios = await Funcionario.findAll({ raw: true });
    return(
        <div>
            <h1>Lista de Funcionarios</h1>
            <a href="/funcionario/novo" class="novos">Novo Funcionario</a>

            <table border = "1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        
                        
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
