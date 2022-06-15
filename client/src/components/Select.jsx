import '../styles/select.css';
// function Select({ options, placeHolder, hasError, changeHandler, onChange, type, name, value }) {

function Select({ options, placeHolder, hasError,onChange, name, value }) {
    return (
        <select className='select'
            // onChange={(event) => {
            //     changeHandler(event.target.value)
            //     const newValue = event.target.value;
            //     changeHandler && changeHandler(newValue);
            // }}

            onChange={onChange}
            name={name}
            value={value}
        >
            <option id="widthTempOption" className={`placeholder ${hasError ? "error" : ""}`}
                value={placeHolder}>{placeHolder}</option>
            {options.map((element, index) => (
                <option key={index} value={element}>{element}</option>
            ))}
        </select>
    )

}
export default Select;

