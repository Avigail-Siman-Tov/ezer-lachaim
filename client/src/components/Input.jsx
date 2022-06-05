import "../styles/input.css";

function Input({ placeholder, hasError, changeHandler, type = "text"}) {
    return (
        <input
            type={type}
            onChange={(event) => {
                const newValue = event.target.value;
                changeHandler && changeHandler(newValue);
            }}
            className={`input ${hasError ? "error" : ""}`}
            placeholder={placeholder}
        />
    );
}
export default Input;
