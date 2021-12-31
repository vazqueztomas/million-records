import './Header.css';

export default function Header () {
    return(
        <div className='header'>
            <img src='https://cdn-icons-png.flaticon.com/512/6427/6427032.png' alt = 'headphones'></img>
            <ul>
                <li><a href = "#">HOME</a></li>
                <li><a href = "#">PUNTOS DE VENTA</a></li>
                <li><a href = "#">CONTACTO</a></li>
            </ul>
        </div>
    )
}