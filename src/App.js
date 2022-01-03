
import './App.css';
import Header from './components/Header';
import Section1 from './sections/Sec1';
import Section2 from './sections/sec-cards'
import ButtonPlus from './components/Button';
import MuestraProductos from './sections/sec-products';


import images from "./assets/images-carousel";
import ImageCarousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Section1/>
        <ButtonPlus text = 'Ver más'></ButtonPlus>
        <Section2/>
        <MuestraProductos/>
      <ImageCarousel images={images} />

      </header>
    </div>
  );
}

export default App;
