
import "./App.scss";
import "./components/NavBar/NavBar.scss";
import Navegador from "./components/NavBar/NavBar.js"
import ItemProducts from "./components/ItemProducts/ItemProducts.js";

function App() {

  return (
    <div>
      <Navegador />
      <div className="main-container">
        <h1 className="title-sections"> Productos </h1>
        <ItemProducts title='reggiano' price={1500} img={'reggiano.png'}/>
        <ItemProducts title='holanda' price={1700} img={'holanda.png'}/>
        <ItemProducts title='sobre' price={900} img={'sobre.png'}/>
      </div>


    </div>
  );
}

export default App;
