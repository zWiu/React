import PropTypes from "prop-types"

Title.propTypes = {
    title: PropTypes.string.isRequired
}

function Title(props){
    
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title