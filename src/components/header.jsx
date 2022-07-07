import './header.css'
import {ReactComponent as CarritoLogo} from '../svgs/cart.svg'
import {ReactComponent as BusquedaLogo} from '../svgs/magnifying-glass-solid.svg'

const Header = () => {
    return (

        <header>
            <nav>
                <ul>
                    <li id='titulo'>
                        <a href="#"> <h1>IvitoShop</h1></a>
                    </li>
                    <li id="search-container">
                    <div className="responsive-nav-container">
                        <img src={require("../svgs/bars-solid.svg")} alt=""/>
                    </div>
                    <div className="search-bar-container">
                        <select name="categorias" id="categorias">
                            <option className="cat-opcion" value="Todo" selected>Todo</option>
                            <option className="cat-opcion" value="Monitores">Monitores</option>
                            <option className="cat-opcion" value="Mouse">Mouse</option>
                            <option className="cat-opcion" value="Teclado">Teclado</option>
                            <option className="cat-opcion" value="Placas de video">Placas de video</option>
                            <option className="cat-opcion" value="Motherboards">Motherboards</option>
                        </select>
                        <input className="search-bar" type="text"/>
                        <button className="search-btn">
                            <BusquedaLogo />
                        </button>
                    </div>
                </li>
                <div className="header-items-container">
                    <li id="inicio"><a href="#">Inicio</a></li>
                    <li id="ingresar"><a href="htmls/ingresar.html">Ingresar</a></li>
                    <li id="carrito"><a href="htmls/carrito.html"><CarritoLogo className='caret-icon'/></a>
                    </li>
                </div>
                </ul>
            </nav>
        </header>

    )
}

export default Header