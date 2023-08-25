import Style from "./Photo.module.css"

export default (props)=>{
    return(
        <>
            <img className={Style.image} src={props.imageSrc} alt="" />
        </>
    )
}