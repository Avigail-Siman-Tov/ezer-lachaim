import './styles/select.css';


function Select({options,placeHolder, hasError,changeHandler}){
    return (
    <select className='select' defaultValue={placeHolder} 
    onChange={(event ) => {changeHandler(event.target.value )
        const newValue = event.target.value;
        changeHandler && changeHandler(newValue);
    }}>
        {/* <option className='placeholder'  */}
        <option className={`placeholder ${hasError ? "error" : ""}`}
        value={placeHolder}>{placeHolder}</option>
        {options.map((element, index) => (            
            <option key={index} value={element}>{element}</option>
            
        ))}
    </select>
    )
}
export default Select;