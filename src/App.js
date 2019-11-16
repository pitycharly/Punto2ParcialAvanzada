
// TITO HASTA ACA LLEGUE, NO PUDE HACER QUE LA API ME RETORNO EL ARCHIVO JSON. No SE PORQUE ME DICE
// QUE EL PARAMETRO TSYM NO ES VALIDO
//"tsym param is invalid. (tsym length is higher than maxlength: 10)" si pongo el parametro entre comillas
//"tsym param is not valid. Nothing trades in USD    " SI PONGO EL PARAMETRO SIN COMILLAS.

//Si me anduviera eso lo hubiera terminado, disculpe :c



import React,{Component} from 'react';
import Formulario from'./components/Formulario';

import imagen from './cryptomonedas.png';

//import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

class App extends Component{
  state = {
    datForm :{},
    dataCripto:['']
  }

  calcularCripto = datos => {
    //console.log(datos);
    //copiar el state actual
    const datForm = datos;
    // agregar el nuevo state
    this.setState({
      datForm
    });
  };

  consultarApi = async () => {

    const url = `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=${this.state.datForm.Moneda}
    &api_key=1530fc44f80cf7d51b750c3a5ab8098f854bfb1f8ff366f6190f6b5f35a732a3`

    const respuesta = await fetch(url);
    const dataCripto = await respuesta.json();

    //



  this.setState({
    dataCripto : dataCripto
  });
}



  componentDidUpdate() {
      this.consultarApi();

}

//FALTA CALCULAR Y MOSTRAR LOS DATOS DE LA API. 

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="one-half column">
                <img src={imagen} alt="imagen criptomonedas" className="logotipo" />
            </div>
            <div className="one-half column">
                <h1>Cotiza Criptomonedas al Instante</h1>
                crearReporte={this.crearReporte}
                <Formulario calcularCripto={this.calcularCripto}/>

            </div>
        </div>
    </div>
    ) ;
}
}

export default App;
