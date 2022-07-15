import './admin.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


const NuevoProducto = (props) => {
    const {onChange, sendData, listaCategorias} = props

    const [nuevoProducto, setNuevoProducto] = useState({
        producto: { value: "", valid: false },
        descripcion: { value: "", valid: false },
        precio: { value: "", valid: false },
        categoria: { value: "", valid: false },
        cantidadDisponible: { value: "", valid: false },
        imagenes: { value: "", valid: false },
    });

    return (
        <>
            <form className="new-product-form" action="">
                <div className="input-container">
                    <label htmlFor="producto">Nombre del producto</label>
                    <input onChange={(e) => onChange(e, setNuevoProducto, nuevoProducto)} type="text" name="producto" />
                </div>
                <div className="input-container">
                    <label htmlFor="descripcion">Descripción</label>
                    <input onChange={(e) => onChange(e, setNuevoProducto, nuevoProducto)} type="text" name="descripcion" />
                </div>
                <div className="input-container">
                    <label htmlFor="precio">Precio</label>
                    <input onChange={(e) => onChange(e, setNuevoProducto, nuevoProducto)} type="number" name="precio" />
                </div>
                <div className="input-container">
                    <label htmlFor="categoria">Categoria</label>
                    <select onChange={(e) => onChange(e, setNuevoProducto, nuevoProducto)} name="categoria" id="">
                        <option selected value='none'>Seleccione una categoria</option>
                        {listaCategorias && listaCategorias.map((obj ,i) => {
                            return <option key={i} value={obj.categoria}>{obj.categoria}</option>
                        })}
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="cantidadDisponible">Cantidad disponible</label>
                    <input onChange={(e) => onChange(e, setNuevoProducto, nuevoProducto)} type="number" name="cantidadDisponible" />
                </div>
                <div className="input-container">
                    <label htmlFor="imagenes">Subir imagen</label>
                    <input onChange={(e) => onChange(e, setNuevoProducto, nuevoProducto)} type="file" accept="image/*"  name="imagenes" />
                </div>
            </form>
            <button className='send-btn' onClick={(e) => sendData(e,nuevoProducto, 'nuevo-producto', 'multipart/form-data')}>Añadir producto</button>
        </>
    )
}

const NuevaCategoria = (props) => {
    const {onChange, sendData} = props

    const [categoria, setCategoria] = useState({categoria : ""});

    return (
        <>
            <form className="new-category-form" action="">
                <div className="input-container">
                    <label htmlFor="categoria">Nombre de la categoria</label>
                    <input onChange={(e) => onChange(e, setCategoria, categoria)} type="text" name="categoria" />
                </div>
            </form>
            <button className='send-btn' onClick={(e) => sendData(e, categoria, 'nueva-categoria', "application/json")}>Añadir Categoria</button>
        </>
    )
}

const AdminPage = () => {

    // [nuevoProducto, nuevaCategoria, editarProducto]
    const [modo, setModo] = useState([true, false, false]);
    const [listaCategorias, setListaCategorias] = useState(null);

    const obtenerCategorias = async () => {
        const categorias = await axios.get('http://localhost:5000/todas-categorias');
        setListaCategorias(categorias.data);
    }

    useEffect(() => {
        obtenerCategorias();
    },[])

    const onChange = (e, setter, state) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setter({
            ...state,
            [inputName]: {
                ...state[inputName],
                value: inputValue,
            },
        });

        if (inputName == 'imagenes') {
            setter({
                ...state,
                [inputName]: {
                    ...state[inputName],
                    value: e.target.files[0],
                },
            });
        }
    };


    const cambiarModo = (e) => {
        obtenerCategorias();
        const indice = parseInt(e.target.value);
        const nuevoArray = modo.map((obj, i) => {
            if (i == indice) {
                return true
            } else {
                return false
            }
        })

        setModo(nuevoArray)
    }

    const sendData = async (e, state, url, contentType) => {
		e.preventDefault();

		let data = {};

		for (const key in state) {
			if (key === "precio" || key == "cantidadDisponible") data[key] = parseInt(state[key].value);
			else data[key] = state[key].value;
		}

		try {
            console.log("DATA",data)
			data = await axios.post("http://localhost:5000/" + url, data, {headers : {"content-type" : contentType}});
		} catch (e) {
			console.log(e);
			return;
		}
	};

    return (
        <div className='admin-page'>
            <div className='select-div'>
                <button className='select-mode-btn' onClick={cambiarModo} value={0} >Agregar producto</button>
                <button className='select-mode-btn' onClick={cambiarModo} value={1} >Agregar categoría</button>
                <button className='select-mode-btn' onClick={cambiarModo} value={2} >Editar producto</button>
            </div>
            {modo[0] && <NuevoProducto listaCategorias={listaCategorias} sendData={sendData} onChange={onChange}/>}
            {modo[1] && <NuevaCategoria sendData={sendData} onChange={onChange}/>}
            {/* {modo[0] && <NuevoProducto onChange={onChange}/>} */}
        </div>
    )
}

export default AdminPage