import { Cliente } from "../../database/tables.js"
import { redirect } from "next/navigation";

 async function deletacliente(formData){
    'use server';
    const id = formData.get('id');
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
    redirect('/cliente')
}




async function Clientes(){
    const clientes = await Cliente.findAll({ raw: true });
    return(
        <div>
            <h1>Lista de Clientes</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Senha</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        clientes.map(function(cli){
                            return (
                                <tr key={cli.id}>
                                    <td>{cli.id}</td>
                                    <td>{cli.nome}</td>
                                    <td>{cli.email}</td>
                                    <td>{cli.cpf}</td>
                                    <td>{cli.senha}</td>
                                    <td>
                                        <form action = {deletacliente}>
                                            <input type="hidden" name="id" defaultValue={cli.id}/> 
                                            <button>Excluir</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action = {'/cliente/altera'}>
                                            <input type="hidden" name="id" defaultValue={cli.id}/> 
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
    )
}

export default Clientes;