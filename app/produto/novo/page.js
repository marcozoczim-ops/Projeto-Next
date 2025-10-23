import { redirect } from 'next/navigation';
import { Produto } from '../../../database/tables';


async function insereproduto(formData) {
    'use server'
    const dados = {
        nome: formData.get('produto'),
        tipo: formData.get('tipo'),
        preco: formData.get('preco'),
        descricao: formData.get('descricao'),
        validade: formData.get('validade'),
        estoque: formData.get('estoque')
                  
    }

    await Produto.create(dados);
    redirect('/produto')

}
    

function TelaNovoProduto(){
    return (
        <form action={insereproduto}>
            <br/><br/> 
            <label htmlFor="produto">Produto </label> <br/>
            <input type="text" name="produto"></input> <br/>
            
            <label htmlFor="tipo">Tipo </label> <br/>
            <input type="text" name="tipo"></input> <br/>

            <label htmlFor="preco">Preço </label><br/>
            <input type="number" name="preco"></input> <br/>

            <label htmlFor="descricao">Descrição </label> <br/>
            <input type="text" name="descricao"></input> <br/>

            <label htmlFor="validade">Validade </label> <br/>
            <input type="date" name="validade"></input> <br/>

            <label htmlFor="estoque">Estoque </label> <br/>
            <input type="number" name="estoque"></input> <br/>

            <br/>

            <button>Cadastrar</button>

        </form>
    );

}

export default TelaNovoProduto;

