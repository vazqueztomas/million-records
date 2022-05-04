
import './assets/css/App.css';
import Header from './components/Header';
import Front from './sections/front';
import Section2 from './sections/sec-cards'
import ButtonPlus from './components/Button';
import MuestraProductos from './sections/sec-products';


import images from "./assets/images-carousel";
import ImageCarousel from "./components/Carousel";
import Suscribe from './sections/sec-suscribe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Front/>
        <ButtonPlus text = 'Ver más'></ButtonPlus>
        <Section2/>
        <MuestraProductos/>
      {/* <ImageCarousel images={images} /> */}
      <Suscribe></Suscribe>

      </header>
    </div>
  );
}

export default App;
