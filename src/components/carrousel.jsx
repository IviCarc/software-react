import './carrousel.css';
import SimpleSlider from './slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {ReactComponent as CarritoLogo} from '../svgs/cart.svg'

const Carrousel = () => {

    return (
        <SimpleSlider dotsclass='carrousel-btns' ulclass='carrousel-ul' autoplay={true} slidestoshow={1} slidestoscroll={1}> 
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande.webp')} alt=""/></a>
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande2.webp')} alt=""/></a>
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande3.webp')} alt=""/></a>
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande4.webp')} alt=""/></a>
        </SimpleSlider>
    )
}

export default Carrousel