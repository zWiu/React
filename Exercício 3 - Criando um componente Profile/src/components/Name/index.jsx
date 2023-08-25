import Style from "./Name.module.css"

export default (props)=>{
    return(
        <div className={Style.name}>
            <p>{props.name}</p>
        </div>
    )
}