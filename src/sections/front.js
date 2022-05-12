import '../assets/css/Sec1.css';
import Parrafo from '../components/Parrafo';


export default function Section1() {
    const titleStyle = {
        fontSize: "3rem",
        padding: "5px",
        backgroundColor: "#63278b",
        color: '#fff'
        
    }
    return(
        <div className="sec1-main">
            <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBzdHVkaW98ZW58MHx8MHx8&w=1000&q=80"></img>
            <div className = 'text'>

            <h1>Los mejores productos de la zona.</h1>
            <h1 style={titleStyle}>Since 2021.</h1>
            <h1>Empresa líder. La música y vos.</h1>
            </div>
        </div>
    )
}