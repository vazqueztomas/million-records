import "./Sec3.css";
import HeadphonesSVG from "../assets/headphones";
export default function MuestraProductos() {
  return (
    <div className="container-products">
      <div className="text">
        <h1 className="title-products">PRODUCTOS HECHOS A TU MEDIDA</h1>
        <p className="p-products">
          Use our Online Product Guides and discover your suitable product
          quickly and easily.
        </p>
      </div>
      <div className="products">
        <a href="https://google.com">
          <HeadphonesSVG name = 'Audifonos'/>
          <HeadphonesSVG name = 'Microfonos'/>
          <HeadphonesSVG name = 'Placas'/>
          <HeadphonesSVG name = 'Instrumentos'/>
        </a>

      </div>
    </div>
  );
}
