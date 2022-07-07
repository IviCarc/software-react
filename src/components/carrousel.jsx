import './carrousel.css';
import SimpleSlider from './slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {ReactComponent as CarritoLogo} from '../svgs/cart.svg'



const Carrousel = () => {

    return (
        <SimpleSlider > 
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande.webp')} alt=""/></a>
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande2.webp')} alt=""/></a>
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande3.webp')} alt=""/></a>
         <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande4.webp')} alt=""/></a>
        </SimpleSlider>

    //     <div className="carrousel carrousel-main">
    //     <div className="btn-container atras">
    //         <button id="atras_btn" className="carrousel-btn-atras carrousel-btn">
    //             <img src="svgs/caret-left.svg" className="caret-icon" alt=""/>
    //         </button>
    //     </div>

    //     <div className="grande" id="carrousel-main">
    //         <div className="img-container">
    //             <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande.webp')} alt=""/></a>
    //         </div>
    //         <div className="img-container">
    //             <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande2.webp')} alt=""/></a>
    //         </div>
    //         <div className="img-container">
    //             <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande3.webp')} alt=""/></a>
    //         </div>
    //         <div className="img-container">
    //             <a href="#"><img className="carrousel-img" src={require('../imgs/chartgrande4.webp')} alt=""/></a>
    //         </div>
    //     </div>
    //     <div className="btn-container adelante">
    //         <button id="adelante_btn" className="carrousel-btn">
    //             {/* <img src={("../svgs/caret-right.svg")} className="caret-icon"
    //                 alt=""/> */}
    //             <CarritoLogo className='caret-icon'/>
    //         </button>
    //     </div>

    //     <div className="carrousel-btns-container">
    //         <button className="carrousel-select-btn"></button>

    //         <button className="carrousel-select-btn"></button>

    //         <button className="carrousel-select-btn"></button>

    //         <button className="carrousel-select-btn"></button>
    //     </div>
    // </div>
    )
}

export default Carrousel