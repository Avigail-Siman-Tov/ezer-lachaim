import "../styles/input.css";

// function Input({ placeholder, hasError, changeHandler, type = "text"}) {
//     return (
//         <input
//             type={type}
//             onChange={(event) => {
//                 const newValue = event.target.value;
//                 changeHandler && changeHandler(newValue);
//             }}
//             className={`input ${hasError ? "error" : ""}`}
//             placeholder={placeholder}
//         />
//     );
// }
// export default Input;

import React  from "react";

const Input = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default Input;
