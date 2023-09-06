import PropTypes from "prop-types"

Image.propTypes = {
    urlImage: PropTypes.string
}

function Image(props){
    return(
        <div>
            <img src={props.urlImage}></img>
        </div>
    )
}

export default Image