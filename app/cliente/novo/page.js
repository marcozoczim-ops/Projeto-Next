
import { redirect } from "next/navigation";
import {Cliente } from "../../../database/tables";

async function inserecliente(formData){
    'use server'
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        cpf: formData.get('cpf'),
        senha: formData.get('senha')
    }

    await Cliente.create(dados);
    redirect('/cliente')
}

function TelaNovoCliente (){
    return(
        <form action={inserecliente} class="form">
       
            <label htmlFor="nome">Nome</label> <br/>
            <input type="text" name="nome"></input> <br/>

            <label htmlFor="email">Email</label> <br/>
            <input type="email" name="email"></input> <br/>

            <label htmlFor="cpf">CPF</label> <br/>
            <input type="text" name="cpf"></input> <br/>

            <label htmlFor="senha">Senha</label> <br/>
            <input type="text" name="senha"></input> <br/>

            <button>Cadastrar</button>   

            <br/>
        </form>
    )
}

export default TelaNovoCliente;