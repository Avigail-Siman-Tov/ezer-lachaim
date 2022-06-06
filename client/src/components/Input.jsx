import "../styles/input.css";

function Input({ value, label, name, placeholder, type, onChange,hasError }) {
    return (
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
    );
}
export default Input;


