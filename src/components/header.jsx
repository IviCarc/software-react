import './header.css'
import { ReactComponent as CarritoLogo } from '../svgs/cart.svg';
import { ReactComponent as BusquedaLogo } from '../svgs/magnifying-glass-solid.svg';
import {Link} from 'react-router-dom';

const Header = () => {

    // TAMAÑO DEL SELECT CATEGORÍAS

    // let select = document.getElementById('categorias');
    // let optionsEl = document.querySelectorAll('.cat-opcion');

    // let selectedOpt = optionsEl[select.selectedIndex];
    // let optionLength = selectedOpt.textContent.length * parseInt(window.getComputedStyle(selectedOpt).fontSize.slice(0, 7)) + 20
    // select.style.width = `${optionLength}px`

    // select.addEventListener('click', () => {
    //     let selectedOpt = optionsEl[select.selectedIndex];
    //     let optionLength = selectedOpt.textContent.length * parseInt(window.getComputedStyle(selectedOpt).fontSize.slice(0, 7)) + 20
    //     console.log(optionLength)
    //     select.style.width = `${optionLength}px`
    // })

    return (

        <header>
            <nav>
                <ul>
                    <li id='titulo'>
                        <Link to={'/'}> <h1>IvitoShop</h1></Link>
                    </li>
                    <li id="search-container">
                        <div className="responsive-nav-container">
                            <img src={require("../svgs/bars-solid.svg")} alt="" />
                        </div>
                        <div className="search-bar-container">
                            <select name="categorias" id="categorias">
                                <option className="cat-opcion" value="Todo" defaultValue>Todo</option>
                                <option className="cat-opcion" value="Monitores">Monitores</option>
                                <option className="cat-opcion" value="Mouse">Mouse</option>
                                <option className="cat-opcion" value="Teclado">Teclado</option>
                                <option className="cat-opcion" value="Placas de video">Placas de video</option>
                                <option className="cat-opcion" value="Motherboards">Motherboards</option>
                            </select>
                            <input className="search-bar" type="text" />
                            <button className="search-btn">
                                <BusquedaLogo className='search-icon' />
                            </button>
                        </div>
                    </li>
                    <div className="header-items-container">
                        <li id="inicio"><Link to={'/'}>Inicio</Link></li>
                        <li id="ingresar"><Link to="htmls/ingresar.html">Ingresar</Link></li>
                        <li id="carrito"><Link to="htmls/carrito.html"><CarritoLogo className='cart-icon' /></Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>

    )
}

export default Header