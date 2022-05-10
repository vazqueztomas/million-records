import backgroundWiz from "../assets/images/background-wizka.png";

import Formulario from "../components/Formulario";
import "../assets/css/sec-suscribe.css"


const Suscribe = () => {
  return (
    <div className="container">
      <Formulario
        title={"ESTAS PREPARADO?"}
        text={
          "SUSCRIBITE Y ENTERATE DE TODAS NUESTRAS ACTUALIZACIONES"
        }
      />
      
      <img src = {backgroundWiz} alt="Background Wiz Khalifa" />
      
    </div>
  );
};

export default Suscribe;
