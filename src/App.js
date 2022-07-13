import "./App.scss";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const styleApp = { padding: "10'x 20px", marginTop: 10}
  return (

    <div className="App" style={styleApp}>

      <NavBar />
      <h1>COMISION 34685</h1>
      <h2> CODERHOUSE </h2>
      <p> Proyecto ReactApp</p>
    </div>
  );
}

export default App;
