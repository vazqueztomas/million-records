import '../assets/css/Sec1.css';
import Parrafo from '../components/Parrafo';


export default function Section1() {
    return(
        <div className="sec1-main">
            <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHx8&w=1000&q=80"></img>
            <div className = 'text'>

            <h1>Since 2021.</h1>
            <Parrafo text = {"Creciste rodeado de esto."}/>
            <Parrafo text = {"Los mejores productos. Empresa líder. La música y vos."}/>
            </div>
        </div>
    )
}