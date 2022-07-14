
import "./components/NavBootstrap/NavBootstrap.scss"
import "./App.scss";
// import NavBar from "./components/NavBar/NavBar";
import NavBootstrap from "./components/NavBootstrap/NavBootstrap.js";




function App() {
  const styleApp = { padding: "5px 2px", marginTop: 3}
  return (

    <div className="App-header" style={styleApp}>
         <NavBootstrap/> 
      {/* <NavBar /> */}
      <h1>COMISION 34685</h1>
      <h2> CODERHOUSE </h2>
      <p> Proyecto ReactApp</p>
    </div>
  );
}

export default App;
