
import "./App.scss";
import"./components/NavBar/NavBar.scss";
import Navegador from "./components/NavBar/NavBar.js"
import ItemProducts from "./components/ItemProducts/ItemProducts.js";

function App() {
  return (
    <div>
     <Navegador/>
     <ItemProducts/>
    </div>
  );
}

export default App;
