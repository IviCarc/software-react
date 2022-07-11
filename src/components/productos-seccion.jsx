import './productos-seccion.css';
import React, { useState, useEffect } from 'react';
import SimpleSlider from './slider';
import './carrousel.css';

const Producto = (props) => {
    return (
        <a href='#' className='card'>
            <div className='card-hover-info'>
                <p>{props.descripcion}</p>
            </div>
            <div className='card-img-container'>
                <img className='card-img' src={require(`../imgs/${props.img}`)} alt="productoimg" />
            </div>
            <div className='card-info-container'>
                <h3>${props.precio}</h3>
                <p>{props.nombre}</p>
            </div>
        </a>
    )
}

const Productos = () => {
    const [productos, setProductos] = useState(null);

    const axios = require('axios');

    useEffect(() => {
        const fetchProductos = async () => {
            let data = await axios.get('http://192.168.0.167:5000');
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


    
    return (
        <div className='productos-seccion'>
            {productos && productos.map(categorias => {
                return (
                    <div>
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
                            {categorias['productos'].map(producto => {
                                return <Producto descripcion={producto.descripcion} nombre={producto.producto} img={producto.img} precio={producto.precio} />
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