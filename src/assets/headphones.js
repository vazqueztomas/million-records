import "./css/ImagenProducto.css";

export default function ImagenProducto(props) {
  return (
    <div className="headphones-svg">
      <img src={props.src} alt={props.alt} />
      <h5>{props.name}</h5>
    </div>
  );
}
