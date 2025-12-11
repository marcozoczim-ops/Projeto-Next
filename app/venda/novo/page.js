import { redirect } from 'next/navigation';
import { Venda } from '../../../database/tables';


async function inserevenda(formData) {
    'use server'
    const dados = {
        nome: formData.get('produto'),
        tipo: formData.get('tipo'),
        preco: formData.get('preco'),
        descricao: formData.get('descricao'),
        validade: formData.get('validade'),
        estoque: formData.get('estoque'),
        CategoriumId: formData.get('idcategoria'),
        FornecedorId: formData.get('idfornecedor')             
    }

    await Venda.create(dados);
    redirect('/venda')

}
    

function TelaNovoProduto(){
    return (
        <form action={inserevenda} class="form-cadastro">
            
            <label htmlFor="valor">Valor da Venda </label> <br/>
            <input type="text" name="valor" placeholder='Digite o Valor'></input> <br/>
            
            <label htmlFor="tipo">Data da Ved </label> <br/>
            <input type="text" name="tipo" placeholder='Digite o tipo'></input> <br/>

            <label htmlFor="preco">Preço </label><br/>
            <input type="number" name="preco" placeholder='Digite o preço'></input> <br/>

            <label htmlFor="descricao">Descrição </label> <br/>
            <input type="text" name="descricao" placeholder='Digite a descrição'></input> <br/>

            <label htmlFor="validade">Validade </label> <br/>
            <input type="date" name="validade"></input> <br/>

            <label htmlFor="estoque">Estoque </label> <br/>
            <input type="number" name="estoque" placeholder='Digite o estoque'></input> <br/>

            <label htmlFor="idcategoria">IDcategoria </label> <br/>
            <select id='idcategoria' name="idcategoria" >
                <option value="">Escolha ID da Categoria</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>     
            </select> <br/>

            <label htmlFor="idfornecedor">IDfornecedor </label> <br/>
            <select id='idfornecedor' name="idfornecedor" >
                <option value="">Escolha ID do Fornecedor</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>     
            </select> <br/>

            <br/>

            <button class="btn-cadastrar">Cadastrar</button>

        </form>
    );

}

export default TelaNovoProduto;

