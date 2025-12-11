import { redirect } from 'next/navigation';
import { Venda } from '../../../database/tables';


async function inserevenda(formData) {
    'use server'
    const dados = {
        ValorTotal: formData.get('valor'),
        DataVenda: formData.get('data'),
        ClienteId: formData.get('idcliente'),
        FuncionarioId: formData.get('idfuncionario'),             
        PagamentoId: formData.get('idpagamento')             
    }

    await Venda.create(dados);
    redirect('/venda')

}


    

function TelaNovoProduto(){
    return (
        <form action={inserevenda} className="form-cadastro">
            
            <label htmlFor="valor">Valor da Venda </label> <br/>
            <input type="text" name="valor" placeholder='Digite o Valor'></input> <br/>
            
            <label htmlFor="data">Data da Venda </label> <br/>
            <input type="date" name="data" placeholder='Digite a Data'></input> <br/>

             <label htmlFor="idcliente">ID do Cliente </label><br/>
                <select id='idcliente' name="idcliente">
                    <option value="">Escolha ID do cliente</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>     
                    <option>6</option>     
                </select> <br/>

                <label htmlFor="idfuncionio">ID do Funcionario </label><br/>
                <select id='idfuncionario' name="idfuncionario">
                    <option value="">Escolha ID do Funcionario</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option> 
                </select> <br/>

                <label htmlFor="idpagamento">Tipo do Pagamento </label><br/>
                <select id='idpagamento' name="idpagamento">
                    <option value="">Escolha ID do Pagamento</option>
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

export default TelaNovoProduto;

