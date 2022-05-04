import "./assets/css/App.css";
import Header from "./components/Header";
import Front from "./sections/front";
import Section2 from "./sections/sec-cards";
import ButtonPlus from "./components/Button";
import MuestraProductos from "./sections/sec-products";

import Suscribe from "./sections/sec-suscribe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Front />
        <ButtonPlus text="Ver más"></ButtonPlus>
        <Section2 />
        <MuestraProductos />
        <Suscribe></Suscribe>
      </header>
    </div>
  );
}

export default App;
