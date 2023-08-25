import Style from "./MainContent.module.css"
export default (props)=> {
    return(
        <>
        <section>
            <div className={Style.item}>
                <p>{props.content}</p>
            </div>
        </section>
        </>
    )
}