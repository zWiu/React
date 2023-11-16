import PropTypes from "prop-types"

Paragraph.propTypes={
    contentText: PropTypes.string.isRequired
}

export default function Paragraph(props){

    return(
        <div>
            <p>{props.contentText}</p>
        </div>
    )
}

