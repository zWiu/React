import cardImg from "../../assets/Rayquaza.png"
import Style from "../../App.module.css"
export default () => {
    return(
        <div className={Style.container}> 
            <div className={Style.image}>   
            <img src={cardImg}></img>
            </div>
            <div className={Style.text}>
                <h1>Rayquaza(2004)</h1>
                <p>Rayquaza é do jogo de mascotes 
                    Pokémon Emerald, aparecendo 
                    na capa do jogo, também foi nomeado 
                    como Pokémon Celeste. Ele finalizou 
                    o combate entre Kyogre e Groudon
                    quando o Time Magma e Aqua, os acordou.</p>
                <button>Saba Mas</button>
            </div>
        </div>
    )
}