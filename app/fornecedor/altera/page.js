import { redirect } from "next/navigation";
import { Fornecedor } from "../../../database/tables";

async function editafornecedor(formData) {
    'use server'

    const id = formData.get('id');
    const tel = formData.get('telefone');
    const nom = formData.get('nome');
    const cnpj = formData.get('cnpj');
 

    /*nome: DataTypes.STRING,

        cnpj: DataTypes.STRING,
        telefone: DataTypes.STRING */

    const forn = await Fornecedor.findByPk(id);

    forn.nome = nom;
    forn.telefone = tel;
    forn.cnpj = cnpj;
   

    await forn.save();
    redirect('/fornecedor')

}

async function TelaEditaFornecedor ({searchParams}){
    const id = searchParams.id;
    const fornecedor = await Fornecedor.findByPk(id);
    return(

        <>
            <h1>Editando Fornecedor</h1>

            <form action={editafornecedor} className="form-cadastro">

            <input type="hidden" name="id" defaultValue={fornecedor.id}/>
                
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={fornecedor.nome}></input> <br/>

                <label htmlFor="cnpj">CNPJ</label> <br/>
                <input type="text" name="cnpj" defaultValue={fornecedor.cnpj}></input> <br/>

                <label htmlFor="telefone">Telefone</label> <br/>
                <input type="text" name="telefone" defaultValue={fornecedor.telefone}></input> <br/>
                <br/>

                <button className="btn-cadastrar">Cadastrar</button>  

                <br/>
            </form>
        </>
    )
}

export default TelaEditaFornecedor;