import { Fornecedor } from "../../database/tables";

async function Fornecedores (){
    const fornecedores = await Fornecedor.findAll({ raw: true });
    return(
        <div>
            <h1>Lista de Fornecedores</h1>
            <a href="/fornecedor/novo" class="novos">Novo Fornecedor</a>

            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Telefone</th>
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