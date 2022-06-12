import '../styles/select.css';

function Select({ options, placeHolder, hasError, changeHandler, onChange, type, name, value }) {
    return (
        <div>
            {/* <FormControl sx={{ m: 1, width: 300, mt: 3 }}></FormControl> */}
            <select className='select' defaultValue={placeHolder}
                // onChange={(event) => {
                //     changeHandler(event.target.value)
                //     const newValue = event.target.value;
                //     changeHandler && changeHandler(newValue);
                // }}
                onChange={onChange}
            >
                name={name};
                value={value}
                <option id="widthTempOption" className={`placeholder ${hasError ? "error" : ""}`}
                    value={placeHolder}>{placeHolder}</option>
                {options.map((element, index) => (
                    <option key={index} value={element}>{element}</option>
                ))}
            </select>
            {/* </FormControl> */}
        </div>
    )
    
}
export default Select;

