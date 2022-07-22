import "./components/Modal/Modal.scss";
import Modal from "./components/Modal/Modal";
import "./App.scss";
import "./components/NavBar/NavBar.scss";
import Navegador from "./components/NavBar/NavBar.js"
// import ItemProducts from "./components/ItemProducts/ItemProducts.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {

  return (
    <div>
      <Navegador />
      <div className="main-container">
      <ItemListContainer section ="Productos en oferta"/>
      <ItemListContainer section ="Productos sin stock"/>
 
      </div>
      <Modal/>

    </div>
  );
}

export default App;
