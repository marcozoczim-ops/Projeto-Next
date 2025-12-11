import { redirect } from 'next/navigation';
import { ItemCompra } from '../../../database/tables';


async function inserecompra(formData) {
    'use server'
    const dados = {
        PrecoUni: formData.get('preco'),
        quantidade: formData.get('quant'),
        SubTot: formData.get('sub'),
        ProdutoId: formData.get('idproduto'),             
        FornecedorId: formData.get('idfornecedor')             
    }

    await ItemCompra.create(dados);
    redirect('/compra')

}


    

function TelaNovaCompra(){
    return (
        <form action={inserecompra} className="form-cadastro">
            
            <label htmlFor="preco">Preço Unitario </label> <br/>
            <input type="text" name="preco" placeholder='Digite o preço'></input> <br/>
            
            <label htmlFor="quant">Quantidade </label> <br/>
            <input type="number" name="quant" placeholder='Digite a Quantidade'></input> <br/>

            <label htmlFor="sub">SubTotal </label> <br/>
            <input type="text" name="sub" placeholder='Digite o SubTotal'></input>

             <label htmlFor="idproduto">ID do Produto </label><br/>
                <select id='idproduto' name="idproduto">
                    <option value="">Escolha ID do Produto</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>     
                    <option>6</option>     
                </select> <br/>

                <label htmlFor="idfornecedor">ID do Fornecedor </label><br/>
                <select id='idfornecedor' name="idfornecedor">
                    <option value="">Escolha o ID do Fornecedor</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option> 
                </select> <br/>

            <br/>

            <button className="btn-cadastrar">Cadastrar</button>

        </form>
    );

}

export default TelaNovaCompra;

