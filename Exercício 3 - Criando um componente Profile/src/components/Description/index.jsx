import Style from "./Description.module.css"

export default (props)=>{
    return(
        <div className={Style.description}>
            <p>{props.description}</p>
        </div>
    )
}