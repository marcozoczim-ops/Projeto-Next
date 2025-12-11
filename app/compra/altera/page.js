import { redirect } from 'next/navigation';
import { ItemCompra } from '../../../database/tables';

async function editaCompra(formData) {

    'use server'
    const id = formData.get('id');
    const pre = formData.get('preco');
    const quanti = formData.get('quant');
    const subt = formData.get('sub');
    const proId = formData.get('idproduto');
    const forId = formData.get('idfornecedor');

    const com = await ItemCompra.findByPk(id);
    com.PrecoUni = pre;
    com.quantidade = quanti;
    com.SubTot = subt;
    com.ProdutoId = proId;
    com.FornecedorId = forId;

    await com.save();
    redirect('/compra')


}

async function TelaEditaCompra({ searchParams }) {

    const id = searchParams.id;
    const compra = await ItemCompra.findByPk(id);
    return(
        <>
            <h1>Editando Compras</h1> 

            <form action={editaCompra} class="form-cadastro">

            <input type="hidden" name="id" defaultValue={compra.id}/>
             
            <label htmlFor="preco">Preço Unitario </label> <br/>
            <input type="text" name="preco" placeholder='Digite o preço' defaultValue={compra.PrecoUni}></input> <br/>
            
            <label htmlFor="quant">Quantidade </label> <br/>
            <input type="number" name="quant" placeholder='Digite a Quantidade' defaultValue={compra.Quantidade} ></input> <br/>

            <label htmlFor="sub">SubTotal </label> <br/>
            <input type="text" name="sub" placeholder='Digite o SubTotal' defaultValue={compra.SubTotal}></input>

             <label htmlFor="idproduto">ID do Produto </label><br/>
                <select id='idproduto' name="idproduto" defaultValue={compra.ProdutoId}>
                    <option value="">Escolha ID do Produto</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>     
                    <option>6</option>     
                </select> <br/>

                <label htmlFor="idfornecedor">ID do Fornecedor </label><br/>
                <select id='idfornecedor' name="idfornecedor" defaultValue={compra.FornecedorId}>
                    <option value="">Escolha o ID do Fornecedor</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option> 
                </select> <br/>

            <br/>

            <button className="btn-cadastrar">Cadastrar</button>
            </form> 
        </>
    );
}

export default TelaEditaCompra;