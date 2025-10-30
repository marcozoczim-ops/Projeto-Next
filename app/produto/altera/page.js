import { redirect } from 'next/navigation';
import { Produto } from '../../../database/tables';

async function editaProduto(formData) {

    'use server'
    const id = formData.get('id');
    const nome = formData.get('produto');
    const tipo = formData.get('tipo');
    const preco = formData.get('preco');
    const desc = formData.get('descricao');
    const val = formData.get('validade');
    const est = formData.get('estoque');

    const pro = await Produto.findByPk(id);
    pro.nome = nome;
    pro.tipo = tipo;
    pro.preco = preco;
    pro.descricao = desc;
    pro.validade = val;
    pro.estoque = est;

    await pro.save();
    redirect('/produto')


}

async function TelaEditaProduto({ searchParams }) {

    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    return(
        <>
            <h1>Editando Produto</h1> 

            <form action={editaProduto}>
                <br/>
                
                <input type="hidden" name="id" defaultValue={produto.id}/>

                <br/> 
                <label htmlFor="produto">Produto </label> <br/>
                <input type="text" name="produto" defaultValue={produto.nome}></input> <br/>
            
                <label htmlFor="tipo">Tipo </label> <br/>
                <input type="text" name="tipo" defaultValue={produto.tipo}></input> <br/>

                <label htmlFor="preco">Preço </label><br/>
                <input type="number" name="preco" defaultValue={produto.preco}></input> <br/>

                <label htmlFor="descricao">Descrição </label> <br/>
                <input type="text" name="descricao" defaultValue={produto.descricao}></input> <br/>

                <label htmlFor="validade">Validade </label> <br/>
                <input type="date" name="validade" defaultValue={produto.validade}></input> <br/>

                <label htmlFor="estoque">Estoque </label> <br/>
                <input type="number" name="estoque" defaultValue={produto.estoque}></input> <br/>

                <br/>

            <button>Cadastrar</button>  
            </form> 
        </>
    );
}

export default TelaEditaProduto;