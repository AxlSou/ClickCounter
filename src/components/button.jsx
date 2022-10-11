import '../stylesheets/Button.css'

function Button({ text, esBotonDeClick, manejarClick }) {
    return(
        <button
        className={esBotonDeClick ? "btn-click" : "btn-reset"}
        onClick={manejarClick}>
            {text}
        </button>
    )
}

export default Button;