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
    const catId = formData.get('idcategoria')
    const forId = formData.get('idfornecedor')


    const pro = await Produto.findByPk(id);
    pro.nome = nome;
    pro.tipo = tipo;
    pro.preco = preco;
    pro.descricao = desc;
    pro.validade = val;
    pro.estoque = est;
    pro.CategoriumId = catId;
    pro.FornecedorId = forId;

    await pro.save();
    redirect('/produto')


}

async function TelaEditaProduto({ searchParams }) {

    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    return(
        <>
            <h1>Editando Produto</h1> 

            <form action={editaProduto} class="form-cadastro">
                
                <input type="hidden" name="id" defaultValue={produto.id}/>
 
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

                <label htmlFor="idcategoria">IDcategoria </label> <br/>
                <select id='idcategoria' name="idcategoria" defaultValue={produto.idcategoria}>
                    <option value="">Escolha ID da Categoria</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>     
                </select> <br/>

                <label htmlFor="idfornecedor">IDfornecedor </label> <br/>
                <select id='idfornecedor' name="idfornecedor" defaultValue={produto.idfornecedor}>
                    <option value="">Escolha ID do Fornecedor</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>     
                </select> <br/>

                <br/>

            <button class="btn-cadastrar">Confirmar Edição</button>  
            </form> 
        </>
    );
}

export default TelaEditaProduto;