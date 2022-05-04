import "../assets/css/Sec3.css";
import HeadphonesSVG from "../assets/headphones";
import Parrafo from "../components/Parrafo";
import ImgJoystick from '../assets/images/icons8-joystick-50.png'
import ImgAudifonos from '../assets/images/icons8-auriculares-64.png'
import ImgMicrofono from '../assets/images/icons8-sin-micrófono-50.png'
import ImgInstrumentos from '../assets/images/icons8-bass-50.png'
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
        <a href="https://google.com">
          <HeadphonesSVG name="Audífonos" src = {ImgAudifonos} alt = 'Audífonos'/>
          <HeadphonesSVG name="Instrumentos"src = {ImgInstrumentos} alt = 'Instrumentos' />
          <HeadphonesSVG name="Micrófonos" src = {ImgMicrofono} alt = 'Microfonos'/>
          <HeadphonesSVG name="Gaming" src = {ImgJoystick} alt = 'Gaming'/>
        </a>
      </div>
    </div>
  );
}
