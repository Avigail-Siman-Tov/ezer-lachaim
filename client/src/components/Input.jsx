import "../styles/input.css";

function Input({ value, name, placeholder, type, onChange, hasError }) {
    return (
        
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`input ${hasError ? "input-error" : ""}`}
            />
    );
}
export default Input;
