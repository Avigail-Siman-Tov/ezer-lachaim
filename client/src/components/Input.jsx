import "../styles/input.css";
import ReactDOM from 'react-dom/client';


function Input({ value, name, placeholder, type, onChange, hasError }) {
    return (
        <div>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                // onChange={(event) => {
                //     const newValue = event.target.value;
                //     changeHandler && changeHandler(newValue);
                // }}
                className={`input ${hasError ? "error" : ""}`}
            />
        </div>
    );
}
export default Input;


