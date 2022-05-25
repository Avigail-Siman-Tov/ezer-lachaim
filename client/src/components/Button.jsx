import '../styles/button.css';


function Button({text, clickHandler }){
   
    return (
    <button className='btn'  onClick={clickHandler}>
        {text}
    </button>
    );
}
export default Button;