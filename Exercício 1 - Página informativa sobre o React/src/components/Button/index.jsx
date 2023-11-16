import Style from "./style.module.css"
import PropTypes from "prop-types"

Button.propTypes = {
    contentButton: PropTypes.string.isRequired
}

function Button(props){
    
    return(
        <div className={Style.button}>
            <button>{props.contentButton}</button>
        </div>
    )
}

export default Button