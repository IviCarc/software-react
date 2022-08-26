import { useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './product-page.css'

const ProductPage = (props) => {
    const [producto, setProducto] = useState(null);
    const location = useLocation();
    console.log(location.pathname)

    useEffect(() => {
        const fetchProducto = async () => {
            const data = await axios.get('http://localhost:5000/get' + location.pathname);
            setProducto(data.data);
            console.log(data.data)
        }
        fetchProducto();
    }
        , [])

    return (
        <div className='product-page'>
            {
                producto &&
                <div>
                    <div className='main-info-container'>
                        {/* // SOLO RENDERIZA UNA IMAGEN // */}
                        <div className='main-img'>
                            <img className='product-img' src={
                                `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(producto.imagenes.data)))}`
                            } alt="" />
                        </div>
                        <div className='main-info'>
                            <h1>{producto.producto}</h1>

                            <h3>{producto.descripcion}</h3>

                            <p>${producto.precio}</p>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default ProductPage;