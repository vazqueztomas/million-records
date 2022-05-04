import '../assets/css/Header.css';

const IMG = "https://cdn-icons-png.flaticon.com/512/6427/6427032.png"

export default function Header () {
    return(
        <div className='header'>
            
            <img src={IMG} alt = 'headphones'></img>
            <ul>
                <li><a href = "#">HOME</a></li>
                <li><a href = "#">PUNTOS DE VENTA</a></li>
                <li><a href = "#">CONTACTO</a></li>
            </ul>
        </div>
    )
}