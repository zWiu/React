import Style from "./style.module.css"
import PropTypes from "prop-types"

Input.propTypes={
    passSize: PropTypes.number.isRequired,
    setPassSize: PropTypes.func
}
export default function Input(props){

    return(
    <input 
    type="number" 
    id="tamanhoPass" 
    min={1} 
    className={Style.input}
    value={props.passSize}
    onChange={(ev)=> props.setPassSize(+ev.target.value)}
    />
    )
}