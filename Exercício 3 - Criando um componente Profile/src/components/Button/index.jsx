import Style from "./Button.module.css"

export default (props)=>{
    return(
        <div className={Style.button}>
            <button>{props.button}</button>
        </div>
    )
}