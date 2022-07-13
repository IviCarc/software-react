import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Metodos from './components/metodos';
import Carrousel from './components/carrousel';
import Productos from './components/productos-seccion';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {  
  return (
      <div className="App">
        <Carrousel />
        <Metodos/>
        <Productos />
      </div>
  );
}

export default App;
