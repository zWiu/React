import Style from "./Profile.module.css"

function Profile(props){
    return (
        <div className={Style.container}>
            <div className={Style.profile}>
            <div className={Style.image}>
                <img src={props.image} alt="" />
            </div>
            <div className={Style.name}>
                <p>{props.name}</p>
            </div>
            <div className={Style.description}>
                <div className={Style.line}></div>
                <p>{props.description1}</p>
                <div className={Style.line}></div>
                <p>{props.description2}</p>
                <div className={Style.line}></div>
                <p>{props.description3}</p>
                <div className={Style.line}></div>
            </div>
            <div className={Style.button}>
                <button>{props.button1}</button>
                <button>{props.button2}</button>
                <button>{props.button3}</button>
            </div>
            </div>
        </div>
    )
}

export default Profile