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
        title={"DON'T SEE YOUR DATE?"}
        text={
          "SUBSCRIBE AND BE ONE OF THE FIRST TO KNOW WHEN WIZ IS COMING TO YOUR AREA!"
        }
      />
      <img src={backgroundWiz} alt="Background Wiz Khalifa" style={styleImg} />
    </div>
  );
};

export default Suscribe;
