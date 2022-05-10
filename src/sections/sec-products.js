import "../assets/css/Sec3.css";
import Parrafo from "../components/Parrafo";
import ImgJoystick from '../assets/images/icons8-joystick-50.png'
import ImgAudifonos from '../assets/images/icons8-auriculares-64.png'
import ImgMicrofono from '../assets/images/icons8-sin-micrófono-50.png'
import ImgInstrumentos from '../assets/images/icons8-bass-50.png'
import ImagenProducto from "../assets/headphones";
export default function MuestraProductos() {

  return (
    <div className="container-products">
      <div className="text">
        <h1 className="title-products">PRODUCTOS HECHOS A TU MEDIDA</h1>
        <Parrafo
          text={
            "Use our Online Product Guides and discover your suitable product quickly and easily."
          }
          className="p-products"
        />
      </div>
      <div className="products">
          <ImagenProducto name="Audífonos" src = {ImgAudifonos} alt = 'Audífonos'/>
          <ImagenProducto name="Instrumentos"src = {ImgInstrumentos} alt = 'Instrumentos' />
          <ImagenProducto name="Micrófonos" src = {ImgMicrofono} alt = 'Microfonos'/>
          <ImagenProducto name="Gaming" src = {ImgJoystick} alt = 'Gaming'/>
      </div>
    </div>
  );
}
