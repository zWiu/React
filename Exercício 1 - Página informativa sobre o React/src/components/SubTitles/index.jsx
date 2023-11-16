import Style from "./style.module.css"
import PropTypes from "prop-types"

SubTitle.propTypes={
    contentText: PropTypes.string.isRequired
}

export default function SubTitle(props){

    return(
        <div className={Style.subtitle}>
            <h3>{props.contentText}</h3>
        </div>
    )
}

