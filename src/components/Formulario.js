import Parrafo from "./Parrafo";

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
  border: 'none',
  borderBottom: '4px solid white',
  color: 'white'
};

const Formulario = (props) => {
  return (
    <div className="formulario" style={divStyle}>
      <h1>{props.title}</h1>
      <Parrafo text={props.text} />
      <input type="text" style={styleInput}></input>
    </div>
  );
};

export default Formulario;
