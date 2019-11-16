import React,{useState} from 'react';

import Criptomoneda from './Criptomoneda';
import Error from './Error';

function Formulario(props) {
  const [Moneda, guardarMoneda] = useState('');
  const [Cripto, guardarCripto] = useState('');
  const [error, guardarError] = useState(true);


    // Validar que el usuario llene ambos campos
    const cotizarMoneda = e => {
        e.preventDefault();

        if(Moneda === '' || Cripto === '' ) {
            guardarError(true);
            return;
        }
        guardarError(false);


        const datosForm = {
          Moneda,
          Cripto
        }
        console.log(datosForm);
        console.log("DATOS RECIBIDOS");

        props.calcularCripto(datosForm);

        // pasar los datos al componente principal

    }

    // Mostrar el error en caso de que exista
    // const componente = (error) ?  <Error mensaje="Ambos campos son obligatorios" /> : null;

    return (
        <form
          onSubmit={cotizarMoneda}
        >

            <div className="row">
                <label>Elige tu Moneda</label>
                <select
                    className="u-full-width"
                    onChange={e => guardarMoneda(e.target.value)}
                >
                    <option value="" >- Elige tu Moneda -</option>
                    <option value="USD" >Dolar Estadounidense</option>
                    <option value="MXN" >Peso Mexicano</option>
                    <option value="GBP" >Libras</option>
                    <option value="EUR" >Euro</option>
                </select>
            </div>

            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select
                    className="u-full-width"
                    onChange={e => guardarCripto(e.target.value)}

                >
                    <option value="">- Elige tu Criptomoneda -</option>
                    <option value="BTC" onChange={e => guardarCripto(e.target.value)}>Bitcoin</option>
                    <option value="ETH" onChange={e => guardarCripto(e.target.value)}>ETH</option>
                    <option value="EOS" onChange={e => guardarCripto(e.target.value)}>EOS</option>
                    <option value="XRP" onChange={e => guardarCripto(e.target.value)}>XRP</option>
                        />
                    ))}

                </select>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Calcular" />

        </form>
    )
}
export default Formulario;
