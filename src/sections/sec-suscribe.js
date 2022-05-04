import backgroundWiz from "../assets/images/background-wizka.png";
import Parrafo from "../components/Parrafo";
import Formulario from "../components/Formulario";

const styleDiv = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "50px",
};

const styleImg = {
  width: "400px",
  height: 'auto',
};
const Suscribe = () => {
  return (
    <div style={styleDiv}>
      <Formulario
        title={"ESTAS PREPARADO?"}
        text={
          "SUSCRIBITE Y ENTERATE DE TODAS NUESTRAS ACTUALIZACIONES"
        }
      />
      <img src={backgroundWiz} alt="Background Wiz Khalifa" style={styleImg} />
    </div>
  );
};

export default Suscribe;
