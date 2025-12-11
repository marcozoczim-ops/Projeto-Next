import { redirect } from "next/navigation";
import { Fornecedor } from "../../../database/tables";


async function inserefornecedor(formData){
    'use server'
    const dados = {
        nome: formData.get('nome'),
        cnpj: formData.get('cnpj'),
        telefone: formData.get('telefone')
    }

    await Fornecedor.create(dados);
    redirect('/fornecedor')
}

function TelaNovoFornecedor(){
    return(
        <form action={inserefornecedor} className="form-cadastro">
    
            <label htmlFor="nome">Nome</label> <br/>
            <input type="text" name="nome"></input> <br/>

            <label htmlFor="cnpj">CNPJ</label> <br/>
            <input type="text" name="cnpj"></input> <br/>

            <label htmlFor="telefone">Telefone</label> <br/>
            <input type="text" name="telefone"></input> <br/>
            <br/>

            <button className="btn-cadastrar">Cadastrar</button>         
        </form>
    )
}

export default TelaNovoFornecedor;