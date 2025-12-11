import { redirect } from 'next/navigation';
import { Venda } from '../../../database/tables';

async function editaVenda(formData) {

    'use server'
    const id = formData.get('id');
    const val = formData.get('valor');
    const data = formData.get('data');
    const cliId = formData.get('idcliente');
    const funId = formData.get('idfuncionario');
    const pagId = formData.get('idpagamento');

    const ven = await Venda.findByPk(id);
    ven.ValorTotal = val;
    ven.DataVenda = data;
    ven.ClienteId = cliId;
    ven.FuncionarioId = funId;
    ven.Pagamento = pagId;

    await ven.save();
    redirect('/venda')


}

async function TelaEditaVendas({ searchParams }) {

    const id = searchParams.id;
    const venda = await Venda.findByPk(id);
    return(
        <>
            <h1>Editando Vendas</h1> 

            <form action={editaVenda} class="form-cadastro">
             
                <input type="hidden" name="id" defaultValue={venda.id}/>

                <br/> 
                <label htmlFor="valor">Valor </label> <br/>
                <input type="text" name="valor" defaultValue={venda.valor}></input> <br/>
            
                <label htmlFor="data">Data </label> <br/>
                <input type="text" name="data" defaultValue={venda.data}></input> <br/>

                <label htmlFor="idcliente">ID do Cliente </label><br/>
                <select id='idcliente' name="idcliente" defaultValue={venda.idcliente}>
                    <option value="">Escolha ID do cliente</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>     
                    <option>6</option>     
                </select> <br/>

                <label htmlFor="idfuncionio">ID do Funcionario </label><br/>
                <select id='idfuncionario' name="idfuncionario" defaultValue={venda.idfuncionario}>
                    <option value="">Escolha ID do Funcionario</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option> 
                </select> <br/>

                <label htmlFor="idpagamento">Tipo do Pagamento </label><br/>
                <select id='idpagamento' name="idpagamento" defaultValue={venda.idpagamento}>
                    <option value="">Escolha ID do Pagamento</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select> <br/>

                <br/>

            <button className="btn-cadastrar">Confirmar Edição</button>  
            </form> 
        </>
    );
}

export default TelaEditaVendas;