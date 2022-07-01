import './metodos.css';
import {ReactComponent as CreditoLogo} from '../svgs/credito.svg';
import {ReactComponent as DebitoLogo} from '../svgs/debit.svg';
import {ReactComponent as EfectivoLogo} from '../svgs/efectivo.svg';
import {ReactComponent as SinTarjetaLogo} from '../svgs/sin-tarjeta.svg';
import {ReactComponent as VerMasLogo} from '../svgs/view-more.svg';

const Metodos = () => {
    return (
        <div className="metodos-container">
        <div className="metodo" id="credito-method">
            <div className="metodo-icon">
                <CreditoLogo className='card-icon'/>
            </div>
            <div className="metodo-info">
                <h3>Tarjeta de crédito</h3>
                <a href="#">
                    <h4>Ver promociones bancarias</h4>
                </a>
            </div>
        </div>
        <div className="metodo" id="debito-method">
            <div className="metodo-icon">
                <DebitoLogo className='card-icon'/>
            </div>
            <div className="metodo-info">
                <h3>Tarjeta de débito</h3>
                <a href="#">
                    <h4>Ver más</h4>
                </a>
            </div>
        </div>
        <div className="metodo" id="sintarjeta-method">
            <div className="metodo-icon">
                <SinTarjetaLogo className="card-icon"/>
            </div>
            <div className="metodo-info">
                <h3>Cuotas sin tarjeta</h3>
                <a href="#">
                    <h4>Ver más</h4>
                </a>
            </div>
        </div>
        <div className="metodo" id="efectivo-method">
            <div className="metodo-icon">
                <EfectivoLogo className="card-icon"/>
            </div>
            <div className="metodo-info">
                <h3>Efectivo</h3>
                <a href="#">
                    <h4>Ver más</h4>
                </a>
            </div>
        </div>
        <div className="metodo" id="more-methods">
            <div className="metodo-icon">
                <a href=""><VerMasLogo className='card-icon'/></a>
            </div>
        </div>

    </div>
    )
}

export default Metodos