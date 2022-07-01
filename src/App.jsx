import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Metodos from './components/metodos';
import Carrousel from './components/carrousel';


function App() {  
  return (
    <div className="App">
      <Header/>
      <Carrousel />
      <Metodos/>
      <Footer/>
    </div>
  );
}

export default App;
