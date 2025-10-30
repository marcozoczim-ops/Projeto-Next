import { redirect } from "next/navigation";
import {Cliente } from "../../../database/tables";

async function editacliente(formData) {
    'use server'

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const cpf = formData.get('cpf');
    const senha = formData.get('senha')  

    const cli = await Cliente.findByPk(id);

    cli.nome = nome;
    cli.email = email;
    cli.cpf = cpf;
    cli.senha = senha;

    await cli.save();
    redirect('/cliente')

}

async function TelaEditaCliente ({searchParams}){
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return(

        <>
            <h1>Editando Cliente</h1>

            <form action={editacliente}>
                <br/>
                
                <input type="hidden" name="id" defaultValue={cliente.id}/>

                <br/>
           
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={cliente.nome}></input> <br/>

                <label htmlFor="email">Email</label> <br/>
                <input type="email" name="email" defaultValue={cliente.email}></input> <br/>

                <label htmlFor="cpf">CPF</label> <br/>
                <input type="text" name="cpf" defaultValue={cliente.cpf}></input> <br/>

                <label htmlFor="senha">Senha</label> <br/>
                <input type="text" name="senha" defaultValue={cliente.senha}></input> <br/>

                <button>Cadastrar</button>   

                <br/>
            </form>
        </>
    )
}

export default TelaEditaCliente;