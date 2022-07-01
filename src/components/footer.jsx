import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-info">
            <ul>
                <li><a href="">Trabajá con nosotros</a>
                    </li>
                <li><a href="">Términos y condiciones</a></li>
                <li><a href="">Cómo cuidamos tu privacidad</a></li>
                <li><a href="">Información al usuario financiero</a> </li>
                <li><a href="">Ayuda</a></li>
                <li><a href="">Defensa al consumidor</a> </li>
                <li><a href="">Información sobre seguros</a></li>
            </ul>
        </div>
        <div className="footer-copyright">
            <p>Copyright © 2022-2022 IvitoShop S.R.L</p>
        </div>
        <div className="footer-direccion">
            <p>Presidente Roca 150, Arduino, CP 2000, Rosario, Santa Fe, Argentina</p>
        </div>
    </footer>
    )    
}

export default Footer;