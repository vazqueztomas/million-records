import '../assets/css/Button.css';

export default function ButtonPlus(props) {
    return(
        <div className = 'button-plus'>
            <button type = 'text' className = 'simple'>{props.text}</button>
        </div>
    )
}