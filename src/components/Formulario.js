import Parrafo from "./Parrafo";
import '../assets/css/Button.css'

const divStyle = {
  backgroundColor: "black",
  color: "white",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "50px",
};

const styleInput = {
  backgroundColor: "black",
  border: "none",
  borderBottom: "4px solid white",
  color: "white",
};

const styleInputdiv = {
  display: 'flex',
  flexDirection: 'row',
  padding: '0 15px'
}

const Formulario = (props) => {
  return (
    <div className="formulario" style={divStyle}>
      <h1>{props.title}</h1>
      <Parrafo text={props.text} style={{ fontSize: "20px" }} />
      <div className="inputStyle" style = {styleInputdiv}>
        <input type="text" style={styleInput}></input>
      </div>
    </div>
  );
};

export default Formulario;
