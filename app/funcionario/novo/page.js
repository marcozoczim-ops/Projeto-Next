import { redirect } from 'next/navigation';
import { Funcionario } from '../../../database/tables';


async function inserefuncionario(formData) {
    'use server'
    const dados = {
        nome: formData.get('nome'),
        cargo: formData.get('cargo'),
        salario: formData.get('salario')
        
                  
    }

    await Funcionario.create(dados);
    redirect('/funcionario')

}
    

function TelaNovoFuncionario(){
    return (
        <form action={inserefuncionario}>
            
            <label htmlFor="nome">Nome </label> <br/>
            <input type="text" name="nome"></input> <br/>

            <label htmlFor="cargo">Cargo </label><br/>
            <input type="text" name="cargo"></input> <br/>
            
            <label htmlFor="salario">Salario </label> <br/>
            <input type="text" name="salario"></input> <br/>

            <br/>

            <button>Cadastrar</button>

        </form>
    );

}

export default TelaNovoFuncionario;

