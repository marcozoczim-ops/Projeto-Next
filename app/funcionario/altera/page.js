import { redirect } from "next/navigation";
import { Funcionario } from "../../../database/tables";

async function editafuncionario(formData) {
    'use server'

    const id = formData.get('id');
    const sal = formData.get('salario');
    const nom = formData.get('nome');
    const cargo = formData.get('cargo');
 

    /*salario: DataTypes.DECIMAL,
        nome: DataTypes.STRING,
        cargo: DataTypes.STRING */

    const fun = await Funcionario.findByPk(id);

    fun.nome = nom;
    fun.salario = sal;
    fun.cargo = cargo;
   

    await fun.save();
    redirect('/funcionario')

}

async function TelaEditaFuncionario ({searchParams}){
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id);
    return(

        <>
            <h1>Editando Cliente</h1>

            <form action={editafuncionario} className="form-cadastro">
                
                <input type="hidden" name="id" defaultValue={funcionario.id}/>
           
                <label htmlFor="nome">Nome</label> <br/>
                <input type="text" name="nome" defaultValue={funcionario.nome}></input> <br/>

                <label htmlFor="cargo">Cargo</label> <br/>
                <input type="text" name="cargo" defaultValue={funcionario.cargo}></input> <br/>

                <label htmlFor="salario">salario</label> <br/>
                <input type="text" name="salario" defaultValue={funcionario.sal}></input> <br/>

                <button className="btn-cadastrar">Cadastrar</button>   

                <br/>
            </form>
        </>
    )
}

export default TelaEditaFuncionario;