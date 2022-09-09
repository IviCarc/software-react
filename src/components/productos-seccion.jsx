import './productos-seccion.css';
import React, { useState, useEffect } from 'react';
import SimpleSlider from './slider';
import './carrousel.css';
import {Link} from 'react-router-dom';

const Producto = (props) => { 
    const base64String = btoa(String.fromCharCode(...new Uint8Array(props.img)));

    return (
        <Link to={props.id} className='card' key={props.i}>
            <div className='card-hover-info'>
                <p>{props.descripcion}</p>
            </div>
            <div className='card-img-container'>
                <img className='card-img' src={`data:image/jpeg;base64,${base64String}`} alt="productoimg" />
            </div>
            <div className='card-info-container'>
                <h3>${props.precio}</h3>
                <p>{props.nombre}</p>
            </div>
        </Link>
    )
}

const Productos = () => {
    const [productos, setProductos] = useState(null);

    const axios = require('axios');

    useEffect(() => {
        const fetchProductos = async () => {
            let data = await axios.get('http://localhost:5000/todas-categorias');
            console.log(data.data)
            setProductos(data.data);
        }
        fetchProductos();
    }, [])

    const responsiveSlider = [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 875,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600 ,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            vertical:true,
            // adaptiveHeight:true
          }
        }
      ]


    
    return (
        <div className='productos-seccion'>
            {productos && productos.map((categorias, i) => { 
                return (
                    <div className='categoria-container' key={i}>
                        <div className='categoria-titulo-container'>
                            <h3 className='categoria-titulo'>{categorias['categoria']}</h3>
                            <a href="#">Ver más</a>
                        </div>

                        <SimpleSlider 
                                prevarrowclass='cards-prev-arrow cards-arrow' 
                                nextarrowclass='cards-arrow cards-next-arrow' 
                                classname='slider-cards' 
                                slidestoshow={6} 
                                slidestoscroll={6} 
                                dots={false} 
                                ulclass='cards-slider-ul' 
                                responsive={responsiveSlider}
                        >
                            {categorias['productos'].map((producto, j) => {
                                return <Producto i={j} id={producto._id} descripcion={producto.descripcion} nombre={producto.producto} img={producto.imagenes.data} precio={producto.precio} />
                            })}

                        </SimpleSlider>

                    </div>
                )
            })
            }
        </div>
    )
}

export default Productos